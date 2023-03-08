> TODO

<p align="center">
  <img alt="ikota" src="public/ikotastylus.svg" width="300" />
</p>

# Overview

Ikota (Russian word for "hiccups", pronounced `/ikóta/`) is a CLI
automation tool for working with React. This plugin offers a
stylus preprocessor implementation for ikota.

# Install

```bash
$ npm i ikota @ikota/example
$ ikota config # or
$ npx ikota config
```

Follow prompt steps given by the ikota. After that you have to
add the following import to plugins array:

```js
const ikotaMantine = require("@ikota/mantine");

module.exports = {
  componentPath: "src/components",
  useTypescript: false,
  addConfigFile: true,
  addIndexFile: true,
  preprocessor: "mantine",
  useLambdaSimplifier: true,
  trailingSpace: true,
  plugins: [ikotaMantine],
  other: {
    styleProps: true,
    JSDoc: true
  }
}
```

# Usage

To generate the component you can use the configuration given
above or override the preprocessor set by the config using `-P`
flag:

```bash
$ ikota component -P example-styl
```

> **Note**: Make sure to add plugin in the plugins array of the
config, otherwise it would throw an error.

## Example

<p align="center">
  <img alt="Generating the component with Stylus" src="public/generatecomponent.png" width="40%" />
</p>

# Contributing

Pull requests are welcome. For major changes, please open an issue
first to discuss what you would like to change.

# License

This project is under [MIT](https://choosealicense.com/licenses/mit/)
license. You can freely use it for your own purposes.
