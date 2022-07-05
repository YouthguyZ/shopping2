import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 导入 path 
const path=require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置@路径别名，方便导入模块
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
