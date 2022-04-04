<script setup>
import { ref } from 'vue'
import ToDoInput from './ToDoInput.vue'
import ToDoList from './ToDoList.vue'

const data = ref([
  { key: 1, item: '周一早晨9点开会', status: true },
  { key: 2, item: '周一晚上8点聚餐', status: false },
  { key: 3, item: '准备周三上午的演讲稿', status: true },
])

const addTask = (inputText) => {
  data.value.push({
    key: data.value.length + 1,
    item: inputText,
    status: false,
  })
  console.log(data)
}
</script>

<template>
  <ToDoInput @add-task="addTask" class="todo-input" />
  <ToDoList :data="data" />
</template>

<style lang="less" scoped>
.todo-input {
  margin-bottom: 20px;
}
</style>
