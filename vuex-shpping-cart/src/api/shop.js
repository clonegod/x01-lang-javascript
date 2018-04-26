/**
 * Mocking client-server processing
 */
const _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
]

export default {
  // 返回所有商品，用来初始化商品列表
  getProducts (cb) {
    _products.forEach(p => {
      p['total'] = p.inventory
    })
    setTimeout(() => cb(_products), 100)  // cb == callback
  },

  // 购物 API 接受一个成功回调和一个失败回调
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()        // 购买成功时调用该回调函数
        : errorCb()   // 购买失败时调用该回调函数
    }, 100)
  }
}
