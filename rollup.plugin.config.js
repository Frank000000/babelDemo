import resolve from 'rollup-plugin-node-resolve'

export default {
  input: './src/plugin/main.js',
  output: [{
    file: './dist/index-plugin-cjs.js',
    format: 'cjs'
  }, {
    file: './dist/index-plugin-es.js',
    format: 'es'
  }],
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules' // 仅处理node_modules内的库
      } 
    }) //使用rollup插件
  ],
  external:['包名'] //排除的外包名，打包后还是引入的包，不一起打包进去
}
