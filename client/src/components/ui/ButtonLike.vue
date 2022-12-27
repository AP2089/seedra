<template>
  <button
    type="button"
    :class="[
      'btn-like',
      { 'active': isActive }
    ]"
    @click="$emit('change')"
  >
    <Sprite
      name="like"
      class="btn-like__icon"
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
.btn-like {
  $rs: &;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid $color-secondary;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color .5s ease 0s, border-color .5s ease 0s;

  &__icon {
    width: 24px;
    height: 24px;
    fill: $color-info;
    transition: fill .5s ease 0s;
  }

  &:hover,
  &.active {
    background-color: $color-info;
    border-color: $color-info;

    #{$rs}__icon {
      fill: #ffffff;
    }
  }
}
</style>