<script setup>
import { onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import MyMap from '@/views/provide-inject/MyMap.vue'
import GlobalMessage from '@/views/antd/GlobalMessage.vue'
import ToDoIndexVue from '@/views/todo/ToDoIndex.vue'
import * as api from '@/api/index'

// 组件挂载后自动向后端请求数据
onMounted(async () => {
  let result = await api.getUserInfo()
  // console.log(result)
})
</script>

<template>
  <img alt="Vue logo" src="@/assets/logo.png" />

  <!-- vite 官网用法示例 -->
  <HelloWorld msg="Hello Vue 3 + Vite" />

  <!-- provide & inject 用法示例 -->
  <MyMap />

  <!-- ant design vue 全局信息提示框 -->
  <GlobalMessage />

  <ToDoIndexVue />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
