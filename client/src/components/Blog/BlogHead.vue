<template>
  <div class="blog__head">
    <div
      v-if="title"
      class="blog__title heading-base"
    >
      {{title}}
    </div>
    <div
      v-if="moreUrl"
      class="blog__panel"
    >
      <ButtonExtra
        :url="moreUrl"
        class="blog__btn-more"
      >
        {{$t('go.to.our.blog')}}
      </ButtonExtra>
    </div>
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
.blog {
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__title {
    margin: 0;
  }

  &__panel {
    margin-left: 30px;
  }

  &__btn-more {
    min-width: 170px;
  }
}
</style>