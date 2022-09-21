<script lang="ts">
import { defineComponent } from "vue";
import type { Product } from "../types/types";
import type { PropType } from "vue";

export default defineComponent({
  data() {
    return {
      headerText: "Jackets",
    };
  },
  props: {
    headerT: String,
    productData: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
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
  </div>
</template>
<style>
.img {
  border: 1px solid black;
}
</style>
