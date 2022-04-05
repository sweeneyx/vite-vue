<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import * as api from '@/api/index'

const router = useRouter()
const route = useRoute()

// 组件挂载后自动向后端请求数据
onMounted(async () => {
  // let result = await api.getUserInfo()
  // console.log(result)
})
</script>

<template>
  <router-view />
</template>

<style lang="less" scoped></style>
