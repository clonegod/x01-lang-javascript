import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  added: [],    // 购物车中已添加的商品集合
  checkoutStatus: null  // 是否结账的标记
}

// getters
const getters = {
  // state为在模块中定义的局部状态
  checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    // 把当前购物车的物品备份起来
    const savedCartItems = [...state.added] 
    // 发出结账请求，然后乐观地清空购物车
    commit(types.CHECKOUT_REQUEST)
    // 购物 API 接受一个成功回调和一个失败回调
    shop.buyProducts(
      products,
      // 成功操作，提交CHECKOUT_SUCCESS mutation
      () => commit(types.CHECKOUT_SUCCESS), 
       // 失败操作，提交CHECKOUT_FAILURE mutation
      () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    )
  }
}

// mutations
// action dispatch mutation，在mutation中对state状态进行更新，state的更新将同步到组件中
const mutations = {
  [types.ADD_TO_CART] (state, { id }) {
    state.lastCheckout = null
    const record = state.added.find(p => p.id === id)
    if (!record) {
      // 向购物车添加商品
      state.added.push({
        id, // 商品id
        quantity: 1 // 本次添加的商品数量 
      })
    } else {
      record.quantity++  // 当购物车已存在添加的商品时，对其数量+1
    }
  },

  [types.CHECKOUT_REQUEST] (state) {
    // clear cart
    state.added = []
    state.checkoutStatus = null
  },

  [types.CHECKOUT_SUCCESS] (state) {
    state.checkoutStatus = 'successful'
  },

  [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems
    state.checkoutStatus = 'failed'
  }, 

  [types.REMOVE_FROM_CART] (state, { id }) {
    console.log('remove product from cart, id= %s', id)
    const record = state.added.find(p => p.id === id)
    if (!record) {
      // 当库存==总量时，从购物车移除商品的按钮会设置disable属性，因此该日志是不会被输出的。
      console.log('Oops! Cart have no product of id %s', id)
    } else {
      record.quantity--  // 当购物车已存在添加的商品时，对其数量+1
    }
  }
}

export default {
  state,    // 模块的局部状态
  getters,  // store 的计算属性
  actions,  // 在组件中dispatch的各种action
  mutations // 由action所commit的各种mutation
}
