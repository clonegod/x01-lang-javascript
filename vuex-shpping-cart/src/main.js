import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import { currency } from './utils/currency'

Vue.filter('currency', currency)

new Vue({
  // 将渲染结果绑定到index.html中id为app的DOM节点
  el: '#app',
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例『注入』到每一个子组件中
  store,
  // 指定根组件为APP，并对其进行渲染
  render: h => h(App)
})