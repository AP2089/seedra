<template>
  <LayoutPrimary>
    <Products
      :items="catalogStore.items"
      :isFluid="true"
      :paginationPageCount="catalogStore.pageCount"
      @paginationChange="catalogStore.dataFeatch"
      class="products_narrow"
    />

    <template #sidebar>
      <FilterBase
        :title="$t('filters')"
      >
        <Accordion
          :items="catalogStore.filter"
          @checkboxChange="catalogStore.filterChange"
          @rangeChange="catalogStore.filterChange"
        />
      </FilterBase>
    </template>
  </LayoutPrimary>
</template>

<script setup>
import { onMounted } from 'vue';
import LayoutPrimary from '@/components/LayoutPrimary';
import Products from '@/components/Products';
import Accordion from '@/components/Accordion';
import FilterBase from '@/components/FilterBase';
import useCatalogStore from '@/stores/catalogStore';

const catalogStore = useCatalogStore();

onMounted(() => {
  catalogStore.dataFeatch();
});
</script>