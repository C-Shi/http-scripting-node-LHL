function getAndPrintHTML (options) {

  /* Add your code here */
  let https = require('https');

  let output = '';  // output is initialized with empty string

  https.get(options, (res) => {
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);