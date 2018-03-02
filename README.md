# node-revue

A node.js module to import subscribers to Revue


## Installation

`npm install node-revue --save`


## Usage

There are two required fields you need to successfully add a subscriber. The email and your Revue username. Optionally, you can include first and last name for your subscribers.

```javascript
const revue = require('revue');

revue.add({email: "required@email.com", first_name: "John", last_name: "Doe"},"myusername",function(err,success){ 
	// Handle both cases 
})
```
###### * first_name and last_name are optional


## Notes

Unfortunately, Revue does not offer a way to automatically import subscribers and this way will require your subscriber's confirmation via email.

This module uses the form integration to add your subscriber to Revue. There is an API key for the Wordpress plugin and although it can be used instead of the form, it does the same thing and still enforces the confirmation email problem as mentioned before.


## Use cases

You can add your subscribers from the back-end of your application while using your own form and keeping the list on your own database.

You can create integrations and provide your users with the option to add their Revue, simply by entering their Revue username.


## Dependencies

This module uses [request](https://github.com/request/request) to contact Revue and [validator](https://github.com/chriso/validator.js/) to provide an instant check on inputs.


## Tests

To be added soon


## License (MIT)

```
Copyright (c) 2018 Aggelos Gesoulis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

```
