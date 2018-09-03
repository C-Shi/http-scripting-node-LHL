let https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */

  https.get(requestOptions, (res) => {
    // set enconding method
    res.setEncoding('utf8');

    // data event will be fired when new stream comes in
    res.on('data', (data) => {
      console.log(data + '\n');
    })


    // 'end' event will be fired when all the readable stream has been read
    res.on('end', () => {
      console.log('Response stream complete');
    });
  })
}

getAndPrintHTMLChunks();