<script setup>
import { inject } from 'vue'

const userLocation = inject('location', 'The Universe')
const userGeolocation = inject('geolocation')
const updateUserLocation = inject('updateLocation')

</script>

<template>
  <p>{{ userLocation }}</p>
  <p>
    <a-button @click="updateUserLocation" type="primary">修改location</a-button>
  </p>
</template>

<style scoped>
</style>