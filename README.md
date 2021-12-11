[![npm](https://img.shields.io/npm/v/better-timer?style=flat-square)](https://www.npmjs.com/package/better-timer)

# better-timer

Timer class that supports both promises and multiple callbacks.

## Installation

Add the script to your project through a package manager:

`$ npm i better-timer`

or

`$ yarn add better-timer`

Alternatively you can also import the script found in the releases section on GitHub directly. If you choose this option you won't need to use imports going forward - everything will all be available to you automatically.

```html
<script src="better-timer.min.js"></script>
```

Or include through a public CDN:

```html
<script src="https://unpkg.com/better-timer@2/dist/better-timer.min.js"></script>
```

## General Api

```javascript
  new Timer(duration, ...callbacks)
```

## Code example

```javascript
  import Timer from 'better-timer';
  // OR
  const Timer = require('better-timer');

  // Duration in Milliseconds
  const duration = 1000;

  const timer = new Timer(duration, () => {
    // Callbacks are optional
    console.log('Callback executed!');
  });

  // Get promise and add "then" block
  timer.promise.then(() => {
    console.log('Promise resolved!');
  });

  // Pause timer
  timer.pause();

  // Resume timer
  timer.resume();

  // Cancel timer
  timer.cancel();
```
