# semver-existing-max

Find the maximum version of the given version range that exists in dependency or version list.

## Install

```
$ npm i semver-existing-max
```
or
```
$ yarn add semver-existing-max
```
or
```
$ bun add semver-existing-max
```

## Usage

Passing a package name — fetches versions from the npm registry:

```js
import semverExistingMax from 'semver-existing-max';

const result = await semverExistingMax('semver', '~1.0.5');
// => '1.0.7' (or the current max matching that range on the registry)
```

Or passing a version list directly:

```js
import semverExistingMax from 'semver-existing-max';

const versionList = ['1.0.4', '1.0.5', '1.0.6', '1.0.7', '1.1.2'];

const result = await semverExistingMax(versionList, '~1.0.5');
// => '1.0.7'
```

## API

#### `semverExistingMax('dependency name or version list', 'version range')`

Return the maximum version of the given version range that exists in the dependency or version list. 


## Related

- [semver](https://github.com/npm/node-semver)

## License

MIT