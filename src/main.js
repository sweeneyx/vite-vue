import { createApp } from 'vue'
import App from './App.vue'

// 由于unplugin-vue-components插件无法处理antd ui组件库中的非组件模块，因此需要按需加载这些模块
import { message } from 'ant-design-vue'
import 'ant-design-vue/es/message/style/css'
// 导入全局样式
import './styles/global.less'
// 导入路由
import router from '@/router'

const app = createApp(App)

// 注册路由
app.use(router)

// 定义全局属性，全局属性可以所有组件内访问
app.config.globalProperties.$message = message

app.mount('#app')
