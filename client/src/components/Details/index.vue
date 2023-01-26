<template>
  <div class="details">
    <div class="details__main">
      <DetailsMedia
        :title="title"
        :gallery="gallery"
      />

      <DetailsPanel
        :id="id"
        :title="title"
        :description="description"
        :price="price"
        :priceOld="priceOld"
      />
    </div>

    <DetailsInfo
      :report="report"
      :options="options"
    />
  </div>
</template>

<script setup>
import DetailsMedia from '@/components/Details/DetailsMedia';
import DetailsPanel from '@/components/Details/DetailsPanel';
import DetailsInfo from '@/components/Details/DetailsInfo';

const props = defineProps({
  id: {
    type: [Number, null],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: [Number, null],
    required: true
  },
  priceOld: {
    type: [Number, null]
  },
  description: {
    type: String
  },
  report: {
    type: String
  },
  options: {
    type: Object
  },
  gallery: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.details {
  margin-bottom: 50px;

  &__main {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 50px;
  }
}
</style>