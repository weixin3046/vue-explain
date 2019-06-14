import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Ui from './assets/ui.css'
// import request from '@/global/api'
// import getTest from "@/global/request.js";

Vue.config.productionTip = false;
// Vue.prototype.axios = getTest;
Vue.use(ElementUI)
/* eslint-disable no-new */
var  bus = new Vue()
export default bus
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
