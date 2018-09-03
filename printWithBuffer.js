let https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  let output = '';  // output is initialized with empty string

  https.get(requestOptions, (res) => {
    // set encoding to utf-8
    res.setEncoding('utf8');

    // when each stream received, concat into the output stream
    res.on('data', (data) => {
      output += data;
    })

    // console.log will fired when 'end' event happens, which will not log any data in between
    res.on('end', () => {
      console.log(output);
    })
  })
}

getAndPrintHTML();