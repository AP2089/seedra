<template>
  <button
    type="button"
    :class="classes"
    @click="$emit('change', !isActive)"
  >
    <div
      v-for="index in 3"
      :key="index"
      class="btn-hamburger__line"
    ></div>
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

const classes = computed(() => ([
  'btn-hamburger',
  { 'active': props.isActive }
]));
</script>

<style lang="scss" scoped>
.btn-hamburger {
  width: 30px;
  height: 28px;
  position: relative;
  transform: rotate(0deg);
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  transition: .5s ease-in-out;

  &__line {
    display: block;
    width: 100%;
    height: 3px;
    position: absolute;
    background-color: $color-primary;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;

    &:nth-child(1) {
      top: 4px;
    }

    &:nth-child(2) {
      top: 12px;
    }

    &:nth-child(3) {
      top: 20px;
    }
  }

  &.active &__line {
    &:nth-child(1) {
      top: 12px;
      transform: rotate(135deg);
    }

    &:nth-child(2) {
      opacity: 0;
      left: -30px;
    }

    &:nth-child(3) {
      top: 12px;
      transform: rotate(-135deg);
    }
  }
}
</style>