// main.js是应用的入口文件，里面有根实例，我们要把 Vuex store 加到到这个根实例里面，进而注入到它所有的子组件里面
import Vue from "vue"
import store from "./vuex/store"
import App from './components/App.vue'

new Vue({
    store, // 注入到所有子组件
    el: "body",
    components: { App }
})