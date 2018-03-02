'use strict'

const request = require('request');
const validator = require('validator');

module.exports.add = function(options,list,cb){
	if (!validator.isEmail(options.email)){ return cb("Invalid subscriber email"); }
	if (!validator.isLength(list, {min:1,max:20})){ return cb("Invalid list name"); }
	request.post({url:'https://www.getrevue.co/profile/'+list+'/add_subscriber', form: {"member": {"email": options.email, "first_name": options.first_name, "last_name": options.last_name }}}, function(err,httpResponse,body){ 
		if (err){ return cb(err); }
		return cb(null,body);
	});
};