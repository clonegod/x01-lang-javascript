import * as types from './mutation-types'

// 添加商品到购物车（由action触发一个添加商品的mutation，在commit的时附加payload）
// 这是一个全局的action，提交的mutation（ADD_TO_CART）将传递到cart和products模块中。
export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id  // 传递商品id作为payload
    })
  }
}

// 从购物车移除商品，同样会触发cart和product模块内的mutation（cart对当前商品数减1，product对商品库存加1）
export const removeFromCart = ({ commit }, product) => {
  commit(types.REMOVE_FROM_CART, {
    id: product.id
  })
}

