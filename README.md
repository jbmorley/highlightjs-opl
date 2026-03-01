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

Build using the build script:

```shell
scripts/build.sh
```

This fetches the latest highlight.js source and builds the package from within that project (see [Packaging](https://github.com/highlightjs/highlight.js/blob/main/extra/3RD_PARTY_QUICK_START.md#packaging)).

To make a release, use the `--release` flag. This will update the version number, publish to NPM, and create a GitHub release if there are changes to be released:

```shell
scripts/build.sh --release
```

This step is performed automatically on GitHub main branch builds.

## License

OPL for Highlight.js is licensed under the MIT License (see [LICENSE](https://github.com/inseven/psion-screen-saver/blob/main/LICENSE)).

