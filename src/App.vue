<template>
  <div>
    app 组件
  </div>
  <h1>大和之</h1>
</template>

<script setup lang="ts">
// 测试接口
import request from '@/utils/request';
request.get('/home/category/head').then(res=>console.log(res))
</script>

<style scoped lang="less">
/* // 必须导入variables.less */
// 使用自动导入便不用引入样式
// @import '@/assets/styles/variables.less';
// @import '@/assets/styles/mixins.less';
h1 {
  background-color: @warnColor;
  .hoverShadow();
}
</style>