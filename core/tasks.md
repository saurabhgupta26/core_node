1. Explain Node and V8 in your own words ? 
// Node.js is an open-source and cross-platform JavaScript runtime environment. Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.
V8 provides the runtime environment in which JavaScript executes. To work effectively, V8 works on a single threaded function and the js works on the single threaded function as well. Hence, providing with the better working efficiency.

2. Explain steps in REPL(here) and command to start REPL ?
// Open the console.
// > node
// > console.log("hello world");

3. Run `index.js` in the same directory as script writer using `node FILE_NAME.js` and output result of console here.
// > node index.js
// > hello World

4. Require fs module and read `theory.md` using fs.readFile method in index.js file.
// var fs = require('fs');
// fs.readFile('./index);
5. Explain Buffer and different methods to create a buffer ?

6. What is blocking code ? How is it different from non-blocking/async codes ? Correct blocking code in index.js to run asynchronously ?
// Answer here ...

7. Request from browser `https://altcampus.io` and copy request, response and general headers into answer.js.

8. Parse the URL `http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4` using `url` module's parse method and write output in answer.js

9. parse the query object as well from above url using `url.parse(url, true)` and output result in answer.js

10. create a file `math.js`
  1. Export variables and functions
    - define a const pie = 3.14
    - define functions to add and multiply 2 numbers
    - export it from math.js
    - require in index.js and console the output by executing it there.
```js
// math.js
const pie = 3.14;
function sum() {}
function multiply() {}
// export it from math.js
```

  2. Define above const and functions as properties and methods on module.exports object.
    - require in index.js and execute it.

```js
  module.exports = {
    pie: 3.14,
    add: () => {}
  }
```
  3. Define above using exports 

```js
exports.sum = () => {}
```
