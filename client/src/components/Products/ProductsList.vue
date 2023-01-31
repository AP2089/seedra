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

    @include media('min', $viewport-post-sm) {
      grid-template-columns: 1fr 1fr 1fr; 
      grid-template-rows: 1fr;
      gap: 30px 30px;
    }

    @include media(null, $viewport-post-xs, $viewport-sm) {
      grid-template-columns: 1fr 1fr; 
      grid-template-rows: 1fr;
      gap: 30px 30px;
    }

    @include media('max', $viewport-xs) {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    #{$rs}_narrow & {
      @include media('min', $viewport-post-xs) {
        gap: 3px 3px;
      }
      
      @include media('max', $viewport-xs) {
        gap: 3px;
      }
    }
  }
}
</style>