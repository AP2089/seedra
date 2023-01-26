<template>
  <LayoutBase>
    <h1 class="heading-base">{{ favoritesStore.title }}</h1>

    <Products
      :items="favoritesStore.items"
      :isFluid="true"
      :paginationPageCount="favoritesStore.pageCount"
      @paginationChange="favoritesStore.dataFeatch"
    />
  </LayoutBase>
</template>

<script setup>
import { onMounted } from 'vue';
import LayoutBase from '@/components/LayoutBase';
import Products from '@/components/Products';
import useFavoritesStore from '@/stores/favoritesStore';

const favoritesStore = useFavoritesStore();

onMounted(() => {
  favoritesStore.dataFeatch();
});
</script>