<template>
  <div>
    <p>
      Is the user authenticated {{ cartStore.isAuth }}
    </p>
    <p>
      There are {{ cartStore.getCartNo }} items in cart
    </p>
    <p>
      The items include {{ cartStore.getCartItems }}
    </p>
    <p> 
      Is item 1 in cart {{ cartStore.itemInCart(1) }}
    </p>
    <p> 
      Is item 2 in cart {{ cartStore.itemInCart(2) }}
    </p>
    <button @click="cartStore.addItem({_id: 2})">Add item</button>
    <button @click="cartStore.removeItem(0)">Remove item</button>
    <button @click="cartStore.clearCart()">Clear cart</button>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";
const cartStore = useCartStore();

</script>