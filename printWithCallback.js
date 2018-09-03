function getHTML (options, callback) {

  /* Add your code here */
  let https = require('https');
  let output = '';

  https.get(options, (res) => {
    res.setEncoding('utf8');

    res.on('data', (data) => {
      output += data;
    })

    res.on('end', () => {
      callback(output);
    });
  })

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);