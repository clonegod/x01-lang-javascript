<template>
  <ul>
    <!-- 显示商品列表 -->
    <li v-for="p in products">
      {{ p.title }} - {{ p.price | currency }} - 总量： {{p.total}} - 当前库存：{{p.inventory}}
      <br>
      <!-- 添加商品到购物车。当库存为0时，禁用添加按钮 -->
      <button
        :disabled="!p.inventory"
        @click="addToCart(p)">
        Add to cart
      </button>
      <!-- 从购物车移除商品。当库存等于总量时，禁用移除按钮 -->
      <button
        :disabled="p.inventory === p.total"
        @click="removeFromCart(p)">
        Remove from cart 
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  // created 钩子将在Vue实例/组件被创建之后被调用
  created () {
    // 1. 初始化商品集合
    // 子组件通过 this.$store 访问根实例中注册的 store 选项，由store来触发一个action
    this.$store.dispatch('getAllProducts') // 派发一个名为getAllProducts的action（在product.js中）
  },

  // mapGetters 辅助函数仅仅是将 store 中的 getters 映射到局部计算属性
  // 将一个 getter 属性另取一个名字，需使用对象形式。
  computed: mapGetters({
    // 2. 获取商品集合
    // this.$store.getters.allProducts
    products: 'allProducts'  // product.js中由getters提供的计算属性
  }),
  
  //  mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用
  methods: mapActions([
    // 3. 添加商品到购物车
    'addToCart', // 映射 this.addToCart() 为 this.$store.dispatch('addToCart')
    // 4. 从购物车移除商品
    'removeFromCart'
  ])
}
</script>
