export default {
  input: "./src/index.js",
  output: [
    {
      file: './dist/my-lib-umd.js',
      format: 'umd',
      name: 'myLib'
    },
    {
      file: './dist/my-lib-es.js',
      format: 'es'
    },
    {
      file: './dist/my-lib-cjs.js',
      format: 'cjs'
    }
  ]
}