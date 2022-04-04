<script setup>
import { reactive } from 'vue'

defineProps({
  data: {
    type: Array,
    required: true,
    default: [],
  },
})

const columns = [
  { title: '序号', dataIndex: 'key' },
  { title: '事项', dataIndex: 'item' },
  { title: '状态', dataIndex: 'status', slots: { customRender: 'status' } },
]

const state = reactive({
  selectedRowKeys: [],
})

const onSelectChange = (selectedRowKeys) => {
  console.log('selectedRowKeys changed: ', selectedRowKeys)
  state.selectedRowKeys = selectedRowKeys
}

// 选择框默认属性配置
const getCheckboxProps = (record) => {
  if (record.status) state.selectedRowKeys.push(record.key)
}
</script>

<template>
  <a-table
    :row-selection="{
      selectedRowKeys: state.selectedRowKeys,
      onChange: onSelectChange,
      getCheckboxProps,
    }"
    :columns="columns"
    :data-source="data"
  >
    <template #status="{text, record, index}">
      <span v-if="record.status === true">已完成</span>
      <span v-else>未完成</span>
    </template>
  </a-table>
</template>

<style lang="less" scoped></style>
