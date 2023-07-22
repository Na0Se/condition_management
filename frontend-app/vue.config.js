const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //fetch時のアクセス先
    //(同一オリジンポリシーの制約を回避するため必要な設定）
    proxy: 'http://localhost:3001'
  }
})
