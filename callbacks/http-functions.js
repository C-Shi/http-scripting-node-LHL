module.exports = function getHTML (options, callback) {
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
