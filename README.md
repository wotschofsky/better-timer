[![npm](https://img.shields.io/npm/v/better-timer?style=flat-square)](https://www.npmjs.com/package/better-timer)

# better-timer

Timer class that supports both promises and multiple callbacks.

## Installation
`npm install --save better-timer` \
OR \
`yarn add better-timer`

## General Api

```javascript
  new Timer(duration, ...callbacks)
```

## Code example

```javascript
  import Timer from 'better-timer';
  // OR
  const Timer = require('better-timer').default;

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
