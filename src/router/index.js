import { createRouter, createWebHistory } from 'vue-router'

const VueDemo = () => import('@/views/VueDemo.vue')
const MyMap = () => import('@/views/provide-inject/MyMap.vue')
const GlobalMessage = () => import('@/views/antd/GlobalMessage.vue')
const ToDoIndex = () => import('@/views/todo/ToDoIndex.vue')
const Loading = () => import('@/views/Loading.vue')

const routes = [
  { path: '/', component: VueDemo },
  { path: '/provide', component: MyMap },
  { path: '/message', component: GlobalMessage },
  { path: '/todo-index', component: ToDoIndex },
  { path: '/loading', component: Loading },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
