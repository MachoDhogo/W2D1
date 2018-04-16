var https = require('https');
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

//this is function definition?
function reverse (html) {
  console.log(html.split("").reverse().join(""));
}

//this is function invokation? printHTML is passing a reference
getHTML(requestOptions, reverse);

