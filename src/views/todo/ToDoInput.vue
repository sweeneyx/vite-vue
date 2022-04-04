<script setup>
import { ref } from 'vue'
let selectText = ref('全部')
let inputText = ref('')

// 自定义事件
const emit = defineEmits(['addTask'])
const addTask = () => {
  emit('addTask', inputText.value)
  inputText.value = ''
}
</script>

<template>
  <div class="container">
    <a-input-group compact>
      <a-select v-model:value="selectText" class="select-text">
        <a-select-option value="全部">全部</a-select-option>
        <a-select-option value="已完成">已完成</a-select-option>
        <a-select-option value="未完成">未完成</a-select-option>
      </a-select>
      <a-input
        v-model:value="inputText"
        placeholder="请输入任务信息, 按Enter键添加任务"
        class="input-text"
        @keyup.native.enter="addTask"
      />
    </a-input-group>
  </div>
</template>

<style lang="less" scoped>
@select-width: 100px;
.container {
  .select-text {
    width: @select-width;
  }
  .input-text {
    width: calc(100% - @select-width);
  }
}
</style>
