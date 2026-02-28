# OPL for Highlight.js

OPL syntax highlighting for [highlight.js](https://highlightjs.org).

## Usage

### Static website or simple usage

Simply load this module after loading Highlight.js. You'll use the minified version found in the `dist` directory. This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/highlightjs-opl/dist/opl.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

