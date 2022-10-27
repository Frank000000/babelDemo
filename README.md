### install

```bash
# npm i rollup -g
npm i rollup -D
```

### build

```bash
rollup -i src/index.js -o dist/bundle.js -f es
```

<!-- or (package.json) -->
```json
"dev": "rollup -i src/index.js -o dist/bundle.js -f es"
```
```bash
npm run dev
```

- f(`amd`, `cjs`, `es`,`esm`, `iife`, `umd`)

Configure two packaging modes packaging logic,then:
```bash
node rollup-build.js
```

`UMD` and `CommonJS` cannot support the `tree Shaking` feature

install commonjs
```bash
npm i -D rollup-plugin-commonjs
```

Use `babel` to convert `es6`+to `es5`

```bash
npm i -D rollup-plugin-babel
```

