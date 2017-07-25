
import Vue from 'vue'
import webview from 'assets/H5Plus/webview'

import App from './listApp'
/* eslint-disable no-new */
console.log('第二个页面启动')
new Vue({
  el: '#app',
  mounted: () => {
    setTimeout(() => {
      webview.show()
    }, 0)
    console.log('挂载之后执行的代码')
  },
  template: '<App/>',
  components: {
    App
  }
})
