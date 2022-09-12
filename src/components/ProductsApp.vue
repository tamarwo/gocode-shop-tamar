<script lang='ts'>
import  {defineComponent} from 'vue';
import ProductApp from './ProductApp.vue';

export default defineComponent({
  components:{ProductApp},
  data(){
     return{
     headerText:'Jackets',
     listProducts:{
            name:'coat',
            color:'',
            src:''
     }
  }},
  props:{
    headerT:String
  }
 
});
</script>
<template>
 <section class="products">
    <ProductApp />
    <ProductApp />
    <ProductApp />
    <ProductApp />
    <ProductApp />
    <ProductApp />
    <ProductApp />
    <ProductApp />
 </section>
</template>
<style>

</style>