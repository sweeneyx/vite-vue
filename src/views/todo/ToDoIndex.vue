<script setup></script>

<template>
  <div class="container">
    <div class="container-header">
      <p>header</p>
    </div>
    <div class="container-body">
      <p>body</p>
    </div>
    <div class="container-footer">
      <p>footer</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
@color: pink;
@font14: 14px;
.container {
  background-color: @color;
  font-size: @font14;
}
</style>
