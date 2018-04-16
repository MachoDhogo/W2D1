//require http module
var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOption = {
    host: 'sytantris.github.io', //domain name
    path: '/http-examples/step1.html' //path in domain name
  };

  //takes a callback with one parameter - response which is a stream that represents HTTP response
  https.get(requestOption, function(response) {

    //set encoding of received data to UTF-8
    response.setEncoding('utf8');

    //the callback is invoked when a `data` chunk received
    //console.log each chunk, concatenate with a '\n'
    response.on('data', function (data) {
      console.log(data + '\n');
    });
  });
}

getAndPrintHTMLChunks();
