<template>
  <div class="products__list">
    <div
      v-for="item in items"
      :key="item.id"
      class="products__item"
    >
      <Product
        :id="item.id"
        :url="item.url"
        :title="item.title"
        :image="item.image"
        :imageWebp="item.imageWebp"
        :price="item.price"
        :priceOld="item.priceOld"
        :rating="item.rating"
        :ratingCount="item.ratingCount"
      />
    </div>
  </div>
</template>

<script setup>
import Product from '@/components/Product';

const props = defineProps([
  'items'
]);
</script>

<style lang="scss" scoped>
.products {
  $rs: &;

  &__list {
    display: grid; 
    grid-auto-rows: 1fr; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr;
    gap: 30px 30px;

    #{$rs}_narrow & {
      gap: 3px 3px;
    }
  }
}
</style>