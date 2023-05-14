# eslint-config

These are Bjerk's eslint config, used on most of our projects.

This is derived work from [runeh](https://github.com/runeh) and Indiv AS:
https://github.com/runeh/typical-fetch/blob/main/.eslintrc.json

We'd **actually** love more users of our config, so if you have ideas on
improvements – please file an issue or pull request!

```shell
yarn add @bjerk/eslint-config
```

If you want help installing the bunch of peerDependencies for this package,
consider using this:

```shell
npx check-peer-dependencies
```

Or, if you're using [pnpm], you can make it install peer
dependencies automatically:

```shell
pnpm config set auto-install-peers true --location project
```

[pnpm]: https://pnpm.io/

To make all this config work, you only need to add this to `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@bjerk/eslint-config"
  }
}
```

Tip: We often use this along with `@simenandre/prettier`, a shared Prettier config.

## Migrate from v2?

We removed `jest`-related rules in v3, essentially making `jest` an optional
dependency. In our experience, we don't necessarily want to use Jest for every
project anymore. Versions below v3 **require** `jest`.

Here are the steps to get it working [again]:

Run this in your terminal:

```shell
yarn add -D eslint-plugin-jest
```

```json
{
  "eslintConfig": {
    "extends": ["@bjerk/eslint-config", "plugin:jest/recommended"],
    "plugins": ["jest"]
  }
}
```
