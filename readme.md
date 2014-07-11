To get things running and reproduce the error, do:

```shell
$ npm install
```

```shell
$ gulp bundle
```

You should then see the following error:

```
[13:36:32] Using gulpfile ~/Projects/gulp-streams-to-stream/gulpfile.js
[13:36:32] Starting 'bundle'...

path.js:313
        throw new TypeError('Arguments to path.resolve must be strings');
        ^
TypeError: Arguments to path.resolve must be strings
    at Object.exports.resolve (path.js:313:15)
    at Transform.saveFile [as _transform] (/Users/montgomeryc/Projects/gulp-streams-to-stream/node_modules/gulp/node_modules/vinyl-fs/lib/dest/index.js:38:26)
    at Transform._read (/Users/montgomeryc/Projects/gulp-streams-to-stream/node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js:184:10)
    at Transform._write (/Users/montgomeryc/Projects/gulp-streams-to-stream/node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js:172:12)
    at doWrite (/Users/montgomeryc/Projects/gulp-streams-to-stream/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js:238:10)
    at writeOrBuffer (/Users/montgomeryc/Projects/gulp-streams-to-stream/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js:228:5)
    at Transform.Writable.write (/Users/montgomeryc/Projects/gulp-streams-to-stream/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js:195:11)
    at write (/Users/montgomeryc/Projects/gulp-streams-to-stream/node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js:605:24)
    at flow (/Users/montgomeryc/Projects/gulp-streams-to-stream/node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js:614:7)
    at Transform.pipeOnReadable (/Users/montgomeryc/Projects/gulp-streams-to-stream/node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js:646:5)
```