<template>
  <LayoutBase>
    <Cart
      :items="cartStore.items"
      :paginationPageCount="cartStore.pageCount"
      :messageSuccess="cartStore.messageSuccess"
      @paginationChange="cartStore.dataFeatch"
      @updateAmount="cartStore.amountChange"
      @remove="cartStore.remove"
      @formSubmit="cartStore.formSubmit"
    />
  </LayoutBase>
</template>

<script setup>
import { onMounted } from 'vue';
import LayoutBase from '@/components/LayoutBase';
import Cart from '@/components/Cart';
import useCartStore from '@/stores/cartStore';

const cartStore = useCartStore();

onMounted(() => {
  cartStore.dataFeatch();
});
</script>