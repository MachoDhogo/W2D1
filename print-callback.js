var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

  /* Add your code here */
  var requestInputs = {
    host: options.host,
    path: options.path
  };

  var chunkData = '' //append to a string.. to remove chunks

  //takes a callback with one parameter - response which is a stream that represents HTTP response
  https.get(requestInputs, function(response) {

    //set encoding of received data to UTF-8
    response.setEncoding('utf-8');

    //the callback is invoked when a `data` chunk is received
    //taking a string, want to have a string at the end
    //this is to pair the chunks to make it easier to manage
    response.on('data', function (data) {
        chunkData += data;

    });
    response.on('end', function(){
      callback(chunkData); // this is the invocation
    });
  });
}


//this is function definition?
function printHTML (html) {
  console.log(html);
}

//this is function invokation? printHTML is passing a reference
getHTML(requestOptions, printHTML);



