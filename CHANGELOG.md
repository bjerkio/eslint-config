# Changelog

## [6.0.1](https://github.com/bjerkio/eslint-config/compare/v6.0.0...v6.0.1) (2023-08-13)


### Bug Fixes

* add missing file to package ([d4030ac](https://github.com/bjerkio/eslint-config/commit/d4030ac0c34abd6b4193bfb7bf3e470a76576fd7))

## [6.0.0](https://github.com/bjerkio/eslint-config/compare/v5.4.0...v6.0.0) (2023-08-09)


### ⚠ BREAKING CHANGES

* improve esm rules ([#270](https://github.com/bjerkio/eslint-config/issues/270))

### Features

* improve esm rules ([#270](https://github.com/bjerkio/eslint-config/issues/270)) ([00b32f2](https://github.com/bjerkio/eslint-config/commit/00b32f2facdf2b48718d06c8f141c7080808111d))


### Bug Fixes

* **deps:** update dependency eslint-config-prettier to v9 ([#267](https://github.com/bjerkio/eslint-config/issues/267)) ([790581d](https://github.com/bjerkio/eslint-config/commit/790581d8b7b8ed184b77f4d206111ab2615fa8ab))

## [5.4.0](https://github.com/bjerkio/eslint-config/compare/5.3.1...v5.4.0) (2023-07-24)


### Features

* add ignorePatterns to base config ([#260](https://github.com/bjerkio/eslint-config/issues/260)) ([0f86df3](https://github.com/bjerkio/eslint-config/commit/0f86df34b9c3e4700bab383884a9aee4f8aa2533))


### Bug Fixes

* do not depend on prettier and typescript ([#261](https://github.com/bjerkio/eslint-config/issues/261)) ([824cbbd](https://github.com/bjerkio/eslint-config/commit/824cbbdf98c7c94b1d4bb729317e755e61b54fea))

## [5.3.0](https://github.com/bjerkio/eslint-config/compare/v5.2.0...v5.3.0) (2023-07-19)


### Features

* bump eslint to ^8.45.0 ([2e2d467](https://github.com/bjerkio/eslint-config/commit/2e2d4670cdd48712e3a239a86d48528315df7d6a))
* use modern module resolution ([adc1c91](https://github.com/bjerkio/eslint-config/commit/adc1c913c38b51ce53c906f83ed296cff469c480))

## [5.2.0](https://github.com/bjerkio/eslint-config/compare/v5.1.0...v5.2.0) (2023-07-18)


### Features

* remove most peer dependencies ([#256](https://github.com/bjerkio/eslint-config/issues/256)) ([a021796](https://github.com/bjerkio/eslint-config/commit/a0217968c51df34e1c0287e93b37934eb1ea493a))


### Bug Fixes

* **deps:** update dependency eslint-plugin-unicorn to v48 ([#253](https://github.com/bjerkio/eslint-config/issues/253)) ([73fe733](https://github.com/bjerkio/eslint-config/commit/73fe7335b156c573fff20cecc454f57d4c994292))

## [5.0.0](https://github.com/bjerkio/eslint-config/compare/v4.2.0...v5.0.0) (2023-07-13)

v5 is yet a step towards making our code more readable and maintainable!

With v5 we are introducing typed checked lining and stylistics config, as typescript-eslint recommends. To further make it easier for contributors and consumers of this eslint config, the separate topics are split into:

- [@bjerk/eslint-config/base](https://github.com/bjerkio/eslint-config/blob/main/base.js) – base configuration, i.e. javascript rules
- [@bjerk/eslint-config/import](https://github.com/bjerkio/eslint-config/blob/main/import.js) – import-related rules
- [@bjerk/eslint-config/typescript](https://github.com/bjerkio/eslint-config/blob/main/typescript.js) – typescript-related rules

You can import only the ones you want if that is your style.

To make v5 work, you have to add `parserOptions`:

```json
{
  "extends": "@bjerk/eslint-config",
  "parserOptions": {
    "project": true
  }
}
```

### ⚠ BREAKING CHANGES

* use typed checked linting and stylistic config ([#247](https://github.com/bjerkio/eslint-config/issues/247))
* split into separate configs ([#246](https://github.com/bjerkio/eslint-config/issues/246))

### Features

* remove unused dependencies ([daec2b3](https://github.com/bjerkio/eslint-config/commit/daec2b34bc096e3d5c69ee7cb6614f04649bd007))
* use typed checked linting and stylistic config ([#247](https://github.com/bjerkio/eslint-config/issues/247)) ([b461fd6](https://github.com/bjerkio/eslint-config/commit/b461fd62c52038ea2bf3f80623651a956f9255d2))


### Code Refactoring

* split into separate configs ([#246](https://github.com/bjerkio/eslint-config/issues/246)) ([2968db1](https://github.com/bjerkio/eslint-config/commit/2968db1d0de41cbfa58102dcea90fe61a60e4458))

## [4.2.0](https://github.com/bjerkio/eslint-config/compare/v4.1.0...v4.2.0) (2023-07-06)


### Features

* **deps:** update dependency prettier to v3 ([#238](https://github.com/bjerkio/eslint-config/issues/238)) ([8959828](https://github.com/bjerkio/eslint-config/commit/8959828465f0046c757a220142c9ea68f9ad80a2))

## [4.0.0](https://github.com/bjerkio/eslint-config/compare/v3.1.0...v4.0.0) (2023-04-15)


### ⚠ BREAKING CHANGES

* Error when using explicit `any` ([#214](https://github.com/bjerkio/eslint-config/issues/214))

### Code Refactoring

* Error when using explicit `any` ([#214](https://github.com/bjerkio/eslint-config/issues/214)) ([5c13293](https://github.com/bjerkio/eslint-config/commit/5c13293b6e60ef9e72e5eee282aa0c49d5087728))

## [3.1.0](https://github.com/bjerkio/eslint-config/compare/v3.0.1...v3.1.0) (2023-03-05)


### Features

* allow default exports for jest configs ([#191](https://github.com/bjerkio/eslint-config/issues/191)) ([f458752](https://github.com/bjerkio/eslint-config/commit/f4587523493f54235ddd9adfcb3279c4217f833f))
* allow template literals ([#162](https://github.com/bjerkio/eslint-config/issues/162)) ([9f20d94](https://github.com/bjerkio/eslint-config/commit/9f20d94150de967a4bb9ebd4fad0bec57115fc0f))

## [3.0.1](https://github.com/bjerkio/eslint-config/compare/v3.0.0...v3.0.1) (2022-11-18)


### Bug Fixes

* release ([8091a3b](https://github.com/bjerkio/eslint-config/commit/8091a3bc4dde751c40593bfcb9f64f5c5a7448c2))

## [3.0.0](https://github.com/bjerkio/eslint-config/compare/v2.2.2...v3.0.0) (2022-11-18)


### ⚠ BREAKING CHANGES

* Remove jest eslint rules (#117)

### Features

* Remove jest eslint rules ([#117](https://github.com/bjerkio/eslint-config/issues/117)) ([0ef4ee1](https://github.com/bjerkio/eslint-config/commit/0ef4ee1b8e68850fe36e3ea82ae344e9887853e7))

## [2.2.2](https://github.com/bjerkio/eslint-config/compare/v2.2.1...v2.2.2) (2022-09-10)


### Bug Fixes

* add peerDevDependencies ([537f9fe](https://github.com/bjerkio/eslint-config/commit/537f9fe7e49480d954bc15331903eec5572cbb78))

## [2.2.1](https://github.com/bjerkio/eslint-config/compare/v2.2.0...v2.2.1) (2022-09-10)


### Bug Fixes

* default export issue ([d9e9c48](https://github.com/bjerkio/eslint-config/commit/d9e9c481db835abc91e556108ad7775c81737aa3))

## [2.2.0](https://github.com/bjerkio/eslint-config/compare/v2.1.0...v2.2.0) (2022-09-10)


### Features

* add deps and installation guide ([4563398](https://github.com/bjerkio/eslint-config/commit/4563398750f7cecab36ef2d6bc08110ec99301f7))

## [2.1.0](https://github.com/bjerkio/eslint-config/compare/v2.0.1...v2.1.0) (2022-07-14)


### Features

* add curly: error rule ([2c7433c](https://github.com/bjerkio/eslint-config/commit/2c7433cd77befc5a4577ad4c2190259111cd1533))
* Add ignoreRestSibling ([11dc598](https://github.com/bjerkio/eslint-config/commit/11dc598ba30e3276e23cf1e3d76018f0dcd841af))

### [2.0.1](https://github.com/bjerkio/eslint-config/compare/v2.0.0...v2.0.1) (2022-03-12)


### Bug Fixes

* build issues ([ffaafc9](https://github.com/bjerkio/eslint-config/commit/ffaafc9414e12b23f083242a3e04b7dfe3b9c904))

## [2.0.0](https://github.com/bjerkio/eslint-config/compare/v1.0.0...v2.0.0) (2022-03-12)


### ⚠ BREAKING CHANGES

* Drop support for node@v14

### Features

* Drop support for node@v14 ([4e75d6e](https://github.com/bjerkio/eslint-config/commit/4e75d6e6eb1c6e6975d0efc982cb55d1c6f17563))

## 1.0.0 (2021-08-29)


### Features

* First commit ([4a7580c](https://www.github.com/bjerkio/eslint-config/commit/4a7580cd6b0132b9ff3f1ec4a86417d86a8dc290))
