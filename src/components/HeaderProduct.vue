<script lang="ts">
import  {defineComponent} from 'vue';

export default defineComponent({
  data(){
     return{
     headerText:'Jackets'
  }},
  props:{
    headerT:String
  }
 
});
</script>
<template>
  <div class="product-filter">
    <h1>{{headerT}}</h1>
    <div class="sort">
      <div class="collection-sort">
        <label>Filter by:</label>
        <select>
          <option value="/">All Jackets</option>
          <option value="/">2016</option>
          <option value="/">All Jackets</option>
          <option value="/">2016</option>
          <option value="/">jacket</option>
          <option value="/">Jackets</option>
          <option value="/">layers</option>
          <option value="/">Obermeyer</option>
          <option value="/">Roxy</option>
          <option value="/">womens</option>
        </select>
      </div>
    </div>
  </div>
</template>
<style scoped>
.h1 {
    font-size: 400;
    border: 1px solid black;
}
.collection-sort{
        color:red;
    }
    .product-filter{
        color:blue;
    }
    .sort{
        color:green;
    }

</style>
