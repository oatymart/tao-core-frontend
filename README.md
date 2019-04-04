# tao-core-frontend

A test repo of frontend TAO code, designed to be privately published as an npm package and installed into your project.

Contains one folder `js`, which is a direct copy of `tao/views/js`, and another `es6`, which is the same folder but automatically converted to ES6 using the tool [amd-to-es6](https://github.com/jonbretman/amd-to-as6) (but some modules were skipped due to errors...)

## Option 1: Setup using local publishing

Let's use the local npm repository [Verdaccio](https://github.com/verdaccio/verdaccio) to test the publishing and importing of our package:

```bash
npm i -g verdaccio
verdaccio
```

Clone this repo:

```bash
git clone https://github.com/oatymart/tao-core-frontend
cd tao-core-frontend
```

Publish this package locally using Verdaccio:

```bash
npm adduser --registry http://localhost:4873
npm publish --registry http://localhost:4873
```

> The version in `package.json` needs to be increased if ever you republish.

### Use your published tao-core-frontend in a new project

```bash
cd /path/to/my/project/tao/views
npm init -y
npm i tao-core-frontend
```

Now you are ready to use the included modules in your bundling / build tool experiments.

## Option 2: Alternative Setup using npm link

```bash
git clone https://github.com/oatymart/tao-core-frontend
cd tao-core-frontend
npm link
```

Then to use it:

```bash
cd /path/to/my/project/tao/views
npm link tao-core-frontend
```

Now you are ready to use the included modules in your bundling / build tool experiments.

> You could encounter problems with resolving module paths through the symlinks created by npm link, which is why this is Option 2.

## Develop?

Please clone or fork a copy if you'd like to experiment with different structures/formats etc. This is a testing repo and probably won't be maintained longer than a couple of weeks.
