const url = require('url');
// const URL = require('url').URL;
/* NOTE: if you are using v6 (LTS), line 1 gives errors,
*  if you get an error saying, TypeError: URL is not a constructor, 
*  comment line 1, and uncomment line 2 */

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

let printMe  = (msg) => console.log(msg);

// Serialized URL
printMe(myUrl.href);
printMe(myUrl.toString());

// Host (root domain)
printMe(myUrl.host);

// Hostname (does not get port)
printMe(myUrl.hostname);

// Pathname
printMe(myUrl.pathname);

// Serialized query
printMe(myUrl.search);

// Params object
printMe(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
printMe(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => printMe(`${name}: ${value}`));