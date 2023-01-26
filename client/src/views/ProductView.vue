<template>
  <LayoutBase>
    <Details
      :id="productStore.id"
      :title="productStore.title"
      :price="productStore.price"
      :priceOld="productStore.priceOld"
      :description="productStore.description"
      :report="productStore.report"
      :options="productStore.options"
      :gallery="productStore.gallery"
    />

    <Products
      :title="$t('related.products')"
      :items="productStore.related"
      :isFluid="true"
    />
  </LayoutBase>
</template>

<script setup>
import { watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import LayoutBase from '@/components/LayoutBase';
import Details from '@/components/Details';
import Products from '@/components/Products';
import useProductStore from '@/stores/productStore';

const productStore = useProductStore();
const route = useRoute()

onMounted(() => {
  productStore.dataFeatch();
});

watch(() => route.params.id, () => {
  productStore.dataFeatch();
});
</script>