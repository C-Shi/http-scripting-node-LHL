let getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

  /* Write your code here! */

  // put coding rule into a two-dimentional array so it is easier for looping
  const encrypt = [
    [/you/g, 'j00'], [/ck/g, 'x'], [/er/g, '0r'], [/a/g, '4'], [/3/g, 'l'], [/1/g, 'o'], [/s/g, '5'], [/t/g, '7'] 
  ]

  // do not re-assign value to the argument passed in
  let output = html;

  // loop through each rule, pair[0] is the search target, pair[1] is the replacement
  encrypt.forEach((pair) => {
    output = output.replace(pair[0], pair[1]);
  })
  
  console.log(output);
}

getHTML(requestOptions, print1337);