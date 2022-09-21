<script lang="ts">
import { defineComponent } from "vue";
import ProductApp from "./ProductApp.vue";
import type { Product } from "../types/types";
import type { PropType } from "vue";

export default defineComponent({
  components: { ProductApp },
  data() {
    return {
      headerText: "Jackets",
      listProductsO: {
        name: "coat",
        color: "",
        src: "",
      },
    };
  },
  props: {
    headerT: String,
    listProducts: Array as PropType<Array<Product>>,
  },
});
</script>
<template>
  <section class="products">
    <template v-for="pr in listProducts" :key="pr.Id">
      <ProductApp :productData="pr">
        <!--template #header>best seller!!</template>
        <template #footer>run to buy!!</template-->
      </ProductApp>
    </template>
  </section>
</template>
<style></style>
