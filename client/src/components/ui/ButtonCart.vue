<template>
  <button
    type="button"
    :class="[
      'btn-cart',
      { 'active': isActive }
    ]"
    @click="$emit('change')"
  >
    <Sprite
      :name="isActive ? 'check' : 'cart'"
      class="btn-cart__icon"
    />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
.btn-cart {
  $rs: &;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: #ffffff;
  border: 1px solid $color-secondary;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color .5s ease 0s, border-color .5s ease 0s;

  &__icon {
    width: 24px;
    height: 24px;
    fill: $color-primary;
    transition: fill .5s ease 0s;
  }

  &:hover,
  &.active {
    background-color: $color-primary;
    border-color: $color-primary;

    #{$rs}__icon {
      fill: #ffffff;
    }
  }
}
</style>