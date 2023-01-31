<template>
  <div class="details__info">
    <h4 class="details__subtitle">{{ $t('product.information') }}</h4>
    <div class="details__specification">
      <div class="details__report" v-html="report"></div>
      <div class="details__options">
        <ul class="list-details">
          <li
            v-for="option in options"
            :key="option"
            class="list-details__item"
          >
            <div class="list-details__title">{{ option.title }}</div>
            <div class="list-details__value">{{ option.value }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  'report',
  'options'
]);
</script>

<style lang="scss" scoped>
.details {
  &__subtitle {
    font-style: normal;
    font-weight: 600;
    line-height: 1.2;
    padding-bottom: 10px;
    margin: 0 0 10px 0;
    border-bottom: 1px solid $color-secondary;

    @include media('min', $viewport-post-md) {
      font-size: 36px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 20px;
    }
  }

  &__specification {
    @include media('min', $viewport-post-md) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  &__report {
    font-style: normal;
    font-weight: 300;
    line-height: 1.7;

    @include media('min', $viewport-post-md) {
      width: 50%;
      font-size: 16px;
      padding-right: 25px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
      margin-bottom: 30px;
    }
  }

  &__options {
    @include media('min', $viewport-post-md) {
      width: 50%;
      padding-left: 25px;
    }
  }
}
</style>