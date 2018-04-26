import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',  component: Login },
    { path: '/hello', name:"hello", component: Hello }
  ]
  
})
