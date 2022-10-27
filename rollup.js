import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'

export default {
  input: '···',
  output: ['···'],
  plugins: [
    commonjs(), //使用rollupcommonjs插件
    babel({
      exclude: 'node_modules/**' // 排除node_modules
    }), //使用rollupbabel插件
    json()
  ]
}
