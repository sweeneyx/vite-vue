<script setup>
import { provide, reactive, readonly, ref } from 'vue'
import MyMarker from '@/views/provide-inject/MyMarker.vue'

const location = ref('North Pole')
const geolocation = reactive({
  longitude: 90,
  latitude: 135
})

const updateLocation = () => {
  location.value = 'South Pole'
}
// 如果要确保通过 provide 传递的数据不会被 inject 的组件更改，我们建议对提供者的 property 使用 readonly。
provide('location', readonly(location))
provide('geolocation', geolocation)
provide('updateLocation', updateLocation)

</script>

<template>
  <h1>provide & inject 用法示例</h1>
  <MyMarker />
</template>

<style scoped>
</style>