<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <cart></cart>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import Cart from './Cart.vue'

export default {
    // 根组件中引入其它子组件
  components: { ProductList, Cart }
}
</script>
