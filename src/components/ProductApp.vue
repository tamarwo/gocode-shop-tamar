<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { Product } from "../types/types";
import type { PropType } from "vue";
import { cartProductList } from "@/stores/cartList";
import { storeToRefs } from "pinia";

const store = cartProductList();

const headerText = ref("Jackets");
const props = defineProps({
  headerT: String,
  productData: {
    type: Object as PropType<Product>,
    required: true,
  },
  cartList: Boolean,
});
function addToCart() {
  store.addToCart(props.productData);
}
function removeFromCart() {
  store.removeFromCart(props.productData);
}
function increcment() {
  store.incrementProduct(props.productData);
}
function decrecment() {
  store.decrementProduct(props.productData);
}
function getCartItemCount() {
  const a = store.productsList.filter(
    (p) => p.product.id == props.productData.id
  );
  return a.length ? a[0].count : 0;
}
</script>
<template>
  <div class="product-card">
    <slot name="header"></slot>
    {{ productData.category }}
    <div class="product-image">
      <img :src="productData.image" />
      <img
        style="display: none"
        src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
      />
    </div>
    <div class="product-info" style="display: none">
      <h5>{{ productData.description }}</h5>
      <h6>$ {{ productData.price }}</h6>
    </div>
    <button @click="addToCart" v-if="!cartList">Add to cart</button>
    <button @click="increcment">+</button>
    <div>{{ getCartItemCount() }}</div>
    <button>-</button>
    <button @click="removeFromCart" v-if="cartList">remove</button>
  </div>
</template>
<style>
.img {
  border: 1px solid black;
}
</style>
