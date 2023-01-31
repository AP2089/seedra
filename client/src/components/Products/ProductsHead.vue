<template>
  <div class="products__head">
    <div
      v-if="title"
      class="products__title heading-base"
    >
      {{ title }}
    </div>

    <ButtonExtra
      v-if="moreUrl"
      :url="moreUrl"
      class="products__btn-more"
    >
      {{ $t('view.all') }}
    </ButtonExtra>
  </div>
</template>

<script setup>
import ButtonExtra from '@/components/ui/ButtonExtra';

const props = defineProps([
  'title',
  'moreUrl'
]);

</script>

<style lang="scss" scoped>
.products {
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include media('min', $viewport-post-md) {
      margin-bottom: 30px;
    }
    
    @include media('max', $viewport-md) {
      margin-bottom: 15px;
    }
  }

  &__title {
    margin: 0;
  }

  &__btn-more {
    @include media('min', $viewport-post-md) {
      min-width: 170px;
      margin-left: 30px;
    }
    
    @include media('max', $viewport-md) {
      min-width: 80px;
      margin-left: 10px;
    }
  }
}
</style>