<template>
  <LayoutBase>
    <BannerPrimary
      :title="favoritesStore.title"
    />

    <Products
      :items="favoritesStore.items"
    />
  </LayoutBase>
</template>

<script setup>
import { onMounted } from 'vue';
import LayoutBase from '@/components/LayoutBase';
import BannerPrimary from '@/components/BannerPrimary';
import Products from '@/components/Products';
import useFavoritesStore from '@/stores/favoritesStore';

const favoritesStore = useFavoritesStore();

onMounted(() => {
  favoritesStore.dataFeatch();
});
</script>