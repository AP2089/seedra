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
    font-size: 36px;
    line-height: 1.2;
    padding-bottom: 10px;
    margin: 0 0 10px 0;
    border-bottom: 1px solid $color-secondary;
  }

  &__specification {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  &__report {
    width: 50%;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.7;
    padding-right: 25px;
  }

  &__options {
    width: 50%;
    padding-left: 25px;
  }
}
</style>