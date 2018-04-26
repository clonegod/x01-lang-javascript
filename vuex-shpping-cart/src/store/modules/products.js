import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  // 返回所有商品（商品集合在组件实例化之后调用created钩子进行赋值）
  allProducts: state => state.all
}

// actions
const actions = {
  // 声明一个getAllProducts的action
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      // 提交一个名为RECEIVE_PRODUCTS的mutation变更
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  // RECEIVE_PRODUCTS将对商品列表进行商品数据的初始化
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },

  // 每添加一个商品到购物车，该商品的库存减1
  [types.ADD_TO_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory--
  },

  [types.REMOVE_FROM_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory++
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
