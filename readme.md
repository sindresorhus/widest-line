# widest-line [![Build Status](https://travis-ci.org/sindresorhus/widest-line.svg?branch=master)](https://travis-ci.org/sindresorhus/widest-line)

> Get the **visual** width of the widest line in a string - the number of columns required to display it, for ex. in a terminal

* [ANSI escape codes](http://en.wikipedia.org/wiki/ANSI_escape_code) will be ignored and won't affect the width.
* Unicode characters magic (ex. some are [fullwidth](https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms)
and use double the normal width) will be handled on a "best effort" basis.


## Install

```
$ npm install --save widest-line
```


## Usage

```js
const widestLine = require('widest-line');

widestLine('古\n\u001b[1m@\u001b[22m');
//=> 2
```


## Advanced usage

Getting the visual width of a string is non-trivial when Unicode is used.
Furthermore, some terminals behave differently, for ex. iterm2 display some "big" emojis on 2 columns instead of one.

To allow handling those special cases, the "string-width" algorithm may be customized:

```js
widestLine('🌒🌓🌔🌕🌖🌗🌘\nfull moon', {
    getStringWidth: s => superStringWidth(s, {target: 'iterm2'}) // imaginary example
});
//=> 14
```


## Related

- [string-width](https://github.com/sindresorhus/string-width) - Get the visual width of a string


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
