import Vue from 'vue'
import Vuex from 'vuex'

// 导入构造器选项配置
import * as actions from './actions'
import * as getters from './getters'

// 导入子模块的对象，会自动合并到store。
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// 初始化Vuex的store对象
export default new Vuex.Store({
  actions,  // 全局的actions
  getters,  // 全局的getters
  modules: { //将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter。
    cart,
    products
  },
  strict: debug // 无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。仅在测试环境使用strict模式！
})
