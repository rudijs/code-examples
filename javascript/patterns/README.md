## Overview

Javascript Patterns

Uses Babel v6 with Mocha and Chai.

- Composition over Inheritance
- Factory Functions
- [7 Patterns to Refactor JavaScript Applications](https://blog.engineyard.com/2015/7-patterns-refactor-javascript-value-objects) by [Michael Phillips](https://blog.engineyard.com/authors/Michael%20Phillips)
- Value Object (WIP)
- Service Object (WIP)
- Form Object (TODO)
- Query Object (TODO)
- View Object (TODO)
- Policy Object (TODO)
- Decorators (TODO)

## Install
- `git clone git@github.com:rudijs/javascript-patterns.git`
- `cd javascript-patterns`
- `npm install`

After NPM installs the required packages it will run the `build-js` task.

The `build-js` task compiles the ES6 code, with Babel, into the build/ directory.

## Test

- Tests are run on the compliled ES5 code in the `build/` directory
- `npm test`
- Watch for changes and test
- `npm test:watch`

## Developement

- Compile the ES6 code to ES5
- `npm run build-js`
- Watch for changes and compile
- `npm run build-js:watch`
