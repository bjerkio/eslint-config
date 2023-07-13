# bjerk/eslint-config

A reusable Eslint config built by and maintained by Bjerk.

```shell
yarn add @bjerk/eslint-config
```

If you want help installing the bunch of peerDependencies for this package,
consider using this:

```shell
npx check-peer-dependencies
```

Or, if you're using [pnpm], you can make it install peer dependencies
automatically:

```shell
pnpm config set auto-install-peers true --location project
```

[pnpm]: https://pnpm.io/

To make all this config work, you only need to add this to your Eslint
configuration:

```javascript
module.exports = {
  extends: "@bjerk/eslint-config",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
}
```

You can also use parts of this configuration if you want to. For example, if you
only want to use our base config, you can do this:

```json
{
  "extends": "@bjerk/eslint-config/base"
}
```

These are the available configs:

- `@bjerk/eslint-config`
- `@bjerk/eslint-config/base`
- `@bjerk/eslint-config/import`
- `@bjerk/eslint-config/typescript`

**Note**: The main `@bjerk/eslint-config` config includes all the others, but
also `prettier` (and `eslint-config-prettier`).

Tip: We often use this along with `@simenandre/prettier`, a shared Prettier
config. Typically, we recommend letting `prettier` handle all formatting, and
`eslint` handle all linting.

## Motivation

We want to have a consistent code style, and we want to promote readable and
maintainable code. We also want to avoid bugs and errors, and we want to have a
good developer experience.

This is our take on making that happen with Eslint!

## Contributing

In comparison to many other eslint configurations, we welcome contributions to
this config. If you have any ideas on how to improve it, please open an issue or
a pull request!

This isn't supposed to be a _Bjerk only_ config, but rather a config that
everyone can use. We want to make it as good as possible, and we want to make it
as useful as possible. If you agree with our motivation, we'd love to have you
on board!

## Thanks

This config is inspired by:

- [runeh](https://github.com/runeh/typical-fetch/blob/main/.eslintrc.json)
- [Indiv](https://github.com/indivorg/eslint-config)

Thanks are in order! 🙏
