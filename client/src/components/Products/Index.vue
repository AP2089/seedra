<template>
  <div class="products">
    <div
      :class="classesCenter"
    >
      <ProductsHead
        v-if="title || moreUrl"
        :title="title"
        :moreUrl="moreUrl"
      />

      <ProductsList
        v-if="items.length > 0"
        :items="items"
      />
      
      <Message
        v-else
        :text="$t('no.items')"
      />

      <Pagination
        v-if="paginationPageCount"
        :pageCount="paginationPageCount"
        @change="$emit('paginationChange', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import ProductsHead from '@/components/Products/ProductsHead';
import ProductsList from '@/components/Products/ProductsList';
import Pagination from '@/components/Pagination';
import Message from '@/components/ui/Message';

const props = defineProps({
  title: {
    type: String
  },
  moreUrl: {
    type: String
  },
  isFluid: {
    type: Boolean,
    default: false
  },
  items: {
    type: Array,
    required: true
  },
  paginationPageCount: {
    type: Number
  }
});

const classesCenter = computed(() => {
  return !props.isFluid ? 'products__center center' : null;
});
</script>

<style lang="scss" scoped>
.products {
  @include media('min', $viewport-post-md) {
    margin-bottom: 50px;
  }
  
  @include media('max', $viewport-md) {
    margin-bottom: 30px;
  }
}
</style>