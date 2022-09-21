<script lang="ts" setup>
import { ref } from "vue";
import ProductApp from "./ProductApp.vue";
import type { Product } from "../types/types";
import type { PropType } from "vue";
import { cartProductList } from "@/stores/cartList";

const store = cartProductList();

const headerText = ref("Jackets");
const listProducts = store.productsList;
// const props = defineProps({
//   headerT: String,
//   listProducts: Array as PropType<Array<Product>>,
// });
</script>
<template>
  <section class="productsList2">
    <div v-if="listProducts.length == 0">no items in the cart!</div>
    <template v-for="pr in listProducts" :key="pr.Id">
      <ProductApp :productData="pr.product" :cartList="true">
        <!--template #header>best seller!!</template>
            <template #footer>run to buy!!</template-->
      </ProductApp>
    </template>
  </section>
</template>
<style>
.productsList2 {
  float: left;
  padding-right: 20px;
  margin: 5px;
  border: 1px solid red;
  border-radius: 0.5em;
  max-width: 100px;
}
</style>
