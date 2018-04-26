export const cartProducts = state => {
  // 获取购物车中所有商品列表：名称、价格、数量
  // 全局的getters，通过“state.模块名”调用模块内部的属性
  return state.cart.added.map(({ id, quantity }) => {
    const product = state.products.all.find(p => p.id === id)
    return {
      title: product.title,
      price: product.price,
      quantity
    }
  })
}
