import { defineConfig, ConfigEnv, UserConfigExport, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import { configMockPlugin } from './src/plugins/configMockPlugin'
import { configStyleImportPlugin } from './src/plugins/configStyleImportPlugin'
import { configSvgIconsPlugin } from './src/plugins/configSvgIconsPlugin'
import { configHtmlPlugin } from './src/plugins/configHtmlPlugin'
import { configCompressPlugin } from './src/plugins/configCompressPlugin'

import { wrapperEnv } from './src/utils/env'

const resolve = (dir: string) => path.join(__dirname, dir)

// 环境变量 https://blog.csdn.net/chendf__/article/details/115676683
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)

  const {
    VITE_PORT,
    VITE_USE_MOCK,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
  } = viteEnv

  return defineConfig({
    base: './',
    plugins: [
      vue(),
      configMockPlugin(VITE_USE_MOCK, isBuild), // mock 模拟请求
      configSvgIconsPlugin(isBuild), // svg 处理
      configStyleImportPlugin(isBuild), // element-plus 按需引入
      configHtmlPlugin(viteEnv, isBuild), // EJS 标签处理
      configCompressPlugin(
        VITE_BUILD_COMPRESS,
        VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      ) // gzip 或者 brotli 来压缩资源
    ],
    resolve: {
      alias: {
        '@': resolve('src'),
        comps: resolve('src/components'),
        apis: resolve('src/apis'),
        views: resolve('src/views'),
        store: resolve('src/store'),
        routes: resolve('src/routes'),
        styles: resolve('src/styles')
      }
    },

    server: {
      //服务器主机名
      host: '',
      //端口号
      port: VITE_PORT,
      //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
      strictPort: false,
      //服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
      open: false
      //自定义代理规则
      // proxy: {
      //   // 选项写法
      //   '/api': {
      //     target: 'http://localhost:3088',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, '')
      //   }
      // }
    }
  })
}
