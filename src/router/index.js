import { createRouter, createWebHistory } from 'vue-router'

const Loading = () => import('@/views/Loading.vue')
const VueDemo = () => import('@/views/VueDemo.vue')
const MyMap = () => import('@/views/provide-inject/MyMap.vue')
const GlobalMessage = () => import('@/views/ant/GlobalMessage.vue')
const ToDoIndex = () => import('@/views/todo/ToDoIndex.vue')
const Index = () => import('@/views/index/Index.vue')

const routes = [
  { path: '/login', component: Loading },
  {
    path: '/',
    component: Index,
    children: [
      { path: '/', component: VueDemo },
      { path: '/provide', component: MyMap },
      { path: '/message', component: GlobalMessage },
      { path: '/todo-index', component: ToDoIndex },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // 判断当前用户是否登录，如果没有登录则让路由跳转到登录页面
  sessionStorage.setItem('token', 'sweeney.chen')
  let token = sessionStorage.getItem('token')
  if (to.path !== '/login' && !token) next('/login')
  else next()
})

export default router
