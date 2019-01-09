[![Build Status](https://travis-ci.org/digi1874/digi-classname.svg?branch=master)](https://travis-ci.org)
[![codecov](https://codecov.io/gh/digi1874/digi-classname/branch/master/graph/badge.svg)](https://codecov.io/gh/digi1874/digi-classname)

# digi-classname

## 使用
```
yarn add -D digi digi-classname
```
```
import digi from 'digi'
import className from 'digi-classname'

digi.plugins([ className ])

digi({ className: 'a' })
console.log(document.body.lastElementChild.outerHTML)
// => "<div class="a"></div>"

digi({ className: { a: true, b: false, c: true })
console.log(document.body.lastElementChild.outerHTML)
// => "<div class="a c"></div>"

digi({ className: ['a', ['b', true], ['c', false], { d: false, e: true }] })
console.log(document.body.lastElementChild.outerHTML)
// => "<div class="a b e"></div>"

```


#
- [digi](https://github.com/digi1874/digi)
#
