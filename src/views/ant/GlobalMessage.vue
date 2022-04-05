<script setup>
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()

const globalInfo = () => {
  proxy.$message.info('This is a global message')
}
</script>

<template>
  <p>
    <a-button @click="globalInfo" type="primary">global message</a-button>
  </p>
</template>

<style scoped>
</style>