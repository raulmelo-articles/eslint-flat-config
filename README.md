# Migrating to ESLint Flat config

> Demo for [Embrace the Future: Navigating the New Flat Configuration of ESLint](https://www.raulmelo.me/en/blog/migration-eslint-to-flat-config) post.

## About

You'll find all demos in the `/demos` folder.

In each demo folder, you'll find a `.eslintrc.js` version to represent the old way and the new flat config with `eslint.config.js`.

All projects has 2 commands:

- `lint` -> runs ESLint using flat config;
- `lint:eslintrc` -> runs using the .estlinrc config

## Getting started

If you want to run the commands, first make sure you have pnpm installed.

Then, install the dependencies:

```bash
pnpm install
```

Now, you can either run a lint command from the root level and filter the demo:

```bash
pnpm -F basic-esm run lint
```

Or you can navigate inside the demo and run the lint command there:

```bash
cd demos/basic-esm
pnpm run lint
```
