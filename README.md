[![Build Status](https://travis-ci.org/patrickvaler/lit-element-typescript-rollup-starter.svg?branch=master)](https://travis-ci.org/patrickvaler/lit-element-typescript-rollup-starter) [![Dependency Status](https://david-dm.org/patrickvaler/lit-element-typescript-rollup-starter/status.svg?style=flat)](https://david-dm.org/patrickvaler/lit-element-typescript-rollup-starter) [![GitHub version](https://badge.fury.io/gh/patrickvaler%2Flit-element-typescript-rollup-starter.svg)](https://badge.fury.io/gh/patrickvaler%2Flit-element-typescript-rollup-starter)

# lit-element-typescript-rollup-starter

This repo serves as an starter package for anyone looking to get up and running with [lit-element][lit-element-site], [TypeScript][typescript-site] and [rollup][rollup-site].

- Ready to go build system for modern browsers with esmodule support
- Transpiles TypeScript with [Babel 7][babel-site]
- Includes polyfills and code transfroms based on [browserslist][browserslist-github] configuration
- eslint integration with @typescript-eslint
- prettier integration
- minification on production build
- simple development server integration

## Getting Started

### Requirements

- [Node.js]("https://nodejs.org/") >= 10.16.3

### Clone project & install dependencies

```bash
$ git clone git://github.com/patrickvaler/lit-element-typescript-rollup-starter ./my-example-app

$ cd my-example-app

$ npm install
```

### Run in development

```bash
$ npm start
```

Browser will open the application on https://localhost:10000

### Run production build

```bash
$ npm run production build
```

### Browserslist

This project uses [browserslist][browserslist-github] to specify the supported browsers and include all necessary polyfills. The supported browsers can be defined `browserlist` file in current directory.

## License

_The MIT License (MIT)_

Copyright (c) 2019 Patrick Valer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

Made with ♥ by [Patrick Valer]("http://www.patrickvaler.ch") (<hello@patrickvaler.ch>)

[typescript-site]: http://www.typescriptlang.org
[rollup-site]: https://rollupjs.org
[lit-element-site]: https://lit-element.polymer-project.org/
[babel-site]: https://babeljs.io/
[browserslist-github]: https://github.com/browserslist/browserslist
