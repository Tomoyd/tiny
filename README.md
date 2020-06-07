# @tomoyd/tiny


[![npm (scoped)](https://img.shields.io/npm/v/@tomoyd/tiny.svg)](https://img.shields.io/npm/v/@tomoyd/tiny)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@tomoyd/tiny.svg)](https://www.npmjs.com/package/@tomoyd/tiny)
## Install

```
$ npm install @bamblehorse/tiny
```

## Usage

```js
const tiny = require("@bamblehorse/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
