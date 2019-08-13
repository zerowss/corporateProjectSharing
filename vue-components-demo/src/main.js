import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.less'
Vue.config.productionTip = false

import { plugin as VueFunctionApiPlugin } from 'vue-function-api'
Vue.use(VueFunctionApiPlugin)

//创建一个Bus类，负责事件派发,监听及回调管理
Vue.prototype.$bus = new Vue();

//后代向祖代传值
Vue.prototype.$dispatch = function (eventName, data) {
  let parent = this.$parent;
  while (parent) {
    if (parent) {
      parent.$emit(eventName,data);
      parent = parent.$parent;
    }else {
      break;
    }
  }
}

//广播子元素 父组件向所有子组件传值
function boardCast(eventName, data) {
  this.$children.forEach(child=>{
    child.$emit(eventName,data)
    if (child.$children.length) {
      boardCast(child,eventName,data); // 触发的是当前实例的事件
    }
  })
}

Vue.prototype.$boardCast = function (eventName, data) {
  boardCast.call(this,eventName,data);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
