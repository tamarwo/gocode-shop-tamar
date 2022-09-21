<script lang="ts" setup>
import { ref } from "vue";
import ProductApp from "./ProductApp.vue";
import type { Product } from "../types/types";
import type { PropType } from "vue";

const headerText = ref("Jackets");
const props = defineProps({
  headerT: String,
  listProducts: Array as PropType<Array<Product>>,
});
</script>
<template>
  <section class="products">
    <template v-for="pr in listProducts" :key="pr.Id">
      <ProductApp :productData="pr" :cartList="false">
        <!--template #header>best seller!!</template>
        <template #footer>run to buy!!</template-->
      </ProductApp>
    </template>
  </section>
</template>
<style></style>
