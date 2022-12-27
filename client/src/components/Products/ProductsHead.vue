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
    margin-bottom: 30px;
  }

  &__title {
    margin: 0;
  }

  &__btn-more {
    min-width: 170px;
    margin-left: 30px;
  }
}
</style>