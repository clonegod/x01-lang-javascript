<template>
  <div class="cart">
    <h2>Your Cart</h2>
    
    <!-- 购物车空，提示添加商品到购物车 -->
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    
    <!-- 显示购物车中各种商品的信息：名称、价格、数量 -->
    <ul>
      <li v-for="p in products" v-if="p.quantity > 0">
        {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
      </li>
    </ul>

    <!-- 显示购物车商品总价 -->
    <p>Total: {{ total | currency }}</p>

    <!-- 购买结算 -->
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    
    <!-- 显示购买结果 -->
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  
  // 计算属性： 
  computed: {
    ...mapGetters({
      products: 'cartProducts', // 获取购物车中所有商品。全局getters.js中导出的接口。
      checkoutStatus: 'checkoutStatus' // 获取购买结果。cart.js中的getters定义的计算属性。
    }),
    
    // 计算购物车中所有商品的总价
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },

  // Cart组件调用dispatch函数来触发cart.js中的checkout action
  methods: {
    checkout (products) {
      this.$store.dispatch('checkout', products)
    }
  }
}
</script>
