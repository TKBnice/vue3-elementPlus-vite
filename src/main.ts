import { createApp } from 'vue'
import { setupStore } from './store' // 状态管理
import router, { setupRouter } from './router' // 路由
import { setupElement } from './libs/element' // element UI

import App from './App.vue'
import SvgIcon from './components/SvgIcon/index.vue'

import './styles/index.scss'

const app = createApp(App)

app.component('svg-icon', SvgIcon)

setupRouter(app) // 引入路由

setupStore(app) // 引入状态管理

setupElement(app) // 引入element组件

router.isReady().then(() => {
  app.mount('#app')
})
