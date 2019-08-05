import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.less'
import './plugins/element.js'
Vue.config.productionTip = false

//创建一个Bus类，负责事件派发,监听及回调管理
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
