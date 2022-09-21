<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  data() {
    return {
      headerText: "Jackets",
    };
  },
  emits: ["changeFilter"],
  props: {
    headerT: String,
    listToFilter: Array as PropType<String[]>,
  },
  methods: {
    doFilter(event: Event) {
      const value = (event?.target as HTMLSelectElement).value;
      console.log("doFilter", value);
      this.$emit("changeFilter", value);
    },
    doSort(event: Event) {
      const value = (event?.target as HTMLSelectElement).value;

      // this.$emit("changeSort", value);
    },
  },
});
</script>
<template>
  <nav class="product-filter">
    <h1>{{ headerT }}</h1>
    <div class="sort">
      <div class="collection-sort">
        <label>Filter by:</label>
        <select @change="doFilter">
          <option value="">choose category</option>
          <option :value="sFilter" v-for="sFilter in listToFilter">
            {{ sFilter }}
          </option>
        </select>
      </div>
      <div class="collection-sort">
        <label>Sort by:</label>
        <select @change="doSort">
          <option value="/">Featured</option>
          <option value="/">Best Selling</option>
          <option value="/">Alphabetically, A-Z</option>
          <option value="/">Alphabetically, Z-A</option>
          <option value="/">Price, low to high</option>
          <option value="/">Price, high to low</option>
          <option value="/">Date, new to old</option>
          <option value="/">Date, old to new</option>
        </select>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.h1 {
  font-size: 400;
  border: 1px solid black;
}
.collection-sort {
  color: red;
}
.product-filter {
  color: blue;
}
.sort {
  color: green;
}
</style>
