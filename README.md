# sleep-es6

Sleep with Promise

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

# Install

    npm install sleep-es6 --save

    or

    yarn add sleep-es6

# Usage

```typescript
import { sleep } from "sleep-es6";

sleep(1000).then(()=>console.log("after 1000ms"));

```

# API

```typescript
function sleep(timeout: number): Promise<void>;
```

# Test

    npm install
    npm test

[npm-image]: https://badge.fury.io/js/sleep-es6.svg
[npm-url]: https://npmjs.org/package/sleep-es6
[travis-image]: https://travis-ci.org/arvitaly/sleep-es6.svg?branch=master
[travis-url]: https://travis-ci.org/arvitaly/sleep-es6
[daviddm-image]: https://david-dm.org/arvitaly/sleep-es6.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/arvitaly/sleep-es6
[coveralls-image]: https://coveralls.io/repos/arvitaly/sleep-es6/badge.svg
[coveralls-url]: https://coveralls.io/r/arvitaly/sleep-es6