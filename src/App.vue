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

<style scoped>

</style>