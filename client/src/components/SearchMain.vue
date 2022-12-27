<template>
  <div class="search-main">
    <Sprite
      name="search"
      class="search-main__icon"
    />

    <input
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="search-main__field"
    />
  </div>
</template>

<script setup>
import translations from '@/translations';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: translations.global.t('search')
  }
});
</script>

<style lang="scss" scoped>
.search-main {
  position: relative;

  &__icon {
    display: block;
    width: 24px;
    height: 24px;
    fill: $color-extra;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    z-index: 0;
    margin-top: auto;
    margin-bottom: auto;
  }

  &__field {
    display: block;
    width: 100%;
    border: 1px solid $color-secondary;
    border-radius: 70px;
    background-color: #ffffff;
    height: 48px;
    padding: 5px 10px 5px 60px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    outline: none;
    color: $color-global;
    transition: border-color .5s ease 0s;

    &:hover,
    &:focus {
      border-color: $color-extra;
    }

    @include placeholder() {
      color: $color-extra;
      opacity: 1;
    }
  }
}
</style>