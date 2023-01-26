## NULLIFY ALL UNDEFINED VALUE

When writing JavaScript or TypeScript, sometimes you will encounter the problem of serializing undefined values and causing errors.

For example, In [next.js]() developing when you pass an object with key of undefined value in `getStaticProps` or `getServerSideProps`, it will throw such the error:

```
error - SerializableError: 
Error serializing '.Prop.value returned fram 'getStaticProps’in "/page/[..slug]".
Reason: "undefined’ cannot be serialized as JSON.
Please use 'null’or omit this value.
```

The bad thing is: many of the Props passed wrote in TypeScript are Optional Keys, and there are a lot of structured sub-data.

So when you accidentally pass in a key whose value is undefined, an error will be raised. This places a large burden on program checking.

So in order to safely serialize an object or a value, you can convert all Undefined to null, which is what this package does.

### Install

```bash
npm install nullify-undefined
```

### Usage

For example, I need to transform all undefined values into null:

```javascript
var obj = {
  a: "the value of a",
  b: {
    c: undefined,
    d: [{ e: undefined }, undefined],
  },
  f: null,
};
```

use `Nullify` function

```javascript
import Nullify from "nullify-undefined";
Nullify(obj);
```

Output:

```javascript
obj = {
  a: "the value of a",
  b: {
    c: null,
    d: [{ e: null }, null],
  },
  f: null,
};

```

This function changes the value of the object passed in, and the return value is a reference to the passed object. If you don't want to change the passed object, you can make a deep copy of the passed object. like this:

```javascript
Nullify({...obj});
```

### LICENSE

This project is MIT licensed.
