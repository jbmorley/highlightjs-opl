# OPL for Highlight.js

OPL syntax highlighting for [highlight.js](https://highlightjs.org).

## Usage

### Static Website or Simple Usage

Simply load this module after loading Highlight.js. You'll use the minified version found in the `dist` directory. This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/highlightjs-opl/dist/opl.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

### Using UNPKG CDN

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/highlightjs-opl/dist/opl.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

## Development

This package is published on [NPM](https://npmjs.com) using:

```shell
npm publish
```

Setting the version can be done as follows:

```shell
npm version 1.0.1
```

> [!NOTE]
>
> This will not automatically commit the updated `package.json` or tag the release as this functionality has been disabled in `.npmrc` to allow for external versioning.

## License

OPL for Highlight.js is licensed under the MIT License (see [LICENSE](https://github.com/inseven/psion-screen-saver/blob/main/LICENSE)).

