
import Vue from 'vue'
import Lib from 'assets/js/Lib'
import webview from 'assets/H5Plus/webview'

console.log(webview)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    message: 'HelloHello<BR>HelloHelloHelloHelloHelloHelloHe<BR>lloHelloHelloHelloHelloHelloHelloHe<BR>lloHelloHelloHelloHello<BR>HelloHelloHelloHelloHelloHelloHe<BR>lloHelloHelloHelloHello<BR>HelloHelloHel<BR>loHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello'
  },
  mounted: () => {
    let i = 1
    setInterval(() => {
      if (i <= 5) {
        webview.open('list.html')
        i++
      }
    }, 3000)
  },
  components: {
    Lib
  }
})
