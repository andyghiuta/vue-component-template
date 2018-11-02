# vue-component-template

## What's this
A template for easily creating libraries to be used in Vue projects.
Multiple components can be defined under the same library prefix and they can all be included in the
destination project or only individual ones.

## Project setup
1. Fork this repo
2. Edit `package.json` and change at least `name` and `libname`
3. Install dependencies
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

## Deploy

```
npm version patch|minor|major
git push origin master --tags
```

Optionally publish to npm. See https://docs.npmjs.com/getting-started/publishing-npm-packages

## Usage

### Install
If it's only in git:
```
npm i git+ssh://git@github.com:yourname/lib-name.git#semver:^1.0.0
```
If it's published to npm:
```
npm i @myscope/lib-name
```

### Configure img copy
```
npm i copy-webpack-plugin
```

```
// vue.config.js
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
	configureWebpack: {
    plugins: [
			new CopyWebpackPlugin([{ from: 'node_modules/lib-name/dist/img/*', to: 'img/', flatten: true }]),
		],
	},
};
```

### Use
See `dist/demo.html`
