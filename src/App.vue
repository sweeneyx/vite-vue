<script setup>
import { onMounted } from 'vue'
import * as api from '@/api/index'

// 组件挂载后自动向后端请求数据
onMounted(async () => {
  // let result = await api.getUserInfo()
  // console.log(result)
})
</script>

<template>
  <router-view />
</template>

<style lang="less"></style>
