# Webpack 4 Chunk Splitting Bug

Demonstrates a problem with `splitChunks`.

Usage:

* Run with `node` 8.11.2 and `npm` 5.6.0 on a UNIX-ish platform

  * Need an instant environment? `docker run --rm -ti -v $PWD:$PWD -w $PWD -e HOME=$HOME node:8 bash`

* Test with either one of:

  - `make test`

  - `npm i && node_modules/.bin/webpack && node -p 'Object.keys(require("./build"))'`

* Observe `TypeError: Cannot read property 'call' of undefined`

* Comment out the `splitChunks` block in `webpack.config.js`

* Test again

* Observe expected output: `[ 'uuid' ]`

Full dump in Docker:

```
node -p 'Object.keys(require("./build"))'
/Users/garthk/src/webpack-4-bug/build/index.js:20
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                              ^

TypeError: Cannot read property 'call' of undefined
    at __webpack_require__ (/Users/garthk/src/webpack-4-bug/build/index.js:20:30)
    at Object../src/index.ts (/Users/garthk/src/webpack-4-bug/build/index.js:80:16)
    at __webpack_require__ (/Users/garthk/src/webpack-4-bug/build/index.js:20:30)
    at ./src/index.ts.Object.defineProperty.value (/Users/garthk/src/webpack-4-bug/build/index.js:69:18)
    at Object.<anonymous> (/Users/garthk/src/webpack-4-bug/build/index.js:72:10)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
```
