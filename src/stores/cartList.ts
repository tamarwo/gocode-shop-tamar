import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from "../types/types";
import type { ProductCarts } from "../types/types";

export const cartProductList = defineStore('ProductList', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const productsList= reactive<Array<ProductCarts>>([])
  
   function incrementProduct(product:Product) {
       const productIndex=productsList.findIndex(p=>p.product.id==product.id)

       productsList[productIndex].count++;
    }
    function decrementProduct(product:Product) {
        const productIndex=productsList.findIndex(p=>p.product.id==product.id)
        productsList[productIndex].count--;
    }
    function addToCart(product:Product){
       
        if(productsList.findIndex(p=>p.product.id==product.id)<=0)
         { 
            productsList.push({product:product,count:1})
         }
         else
             alert("item exist!");
    }
    function removeFromCart(product:Product)
    {
        productsList.splice(productsList.findIndex(p=>p.product.id==product.id),1);
    }
  return { count, doubleCount,productsList, incrementProduct ,decrementProduct,addToCart,removeFromCart}
})
