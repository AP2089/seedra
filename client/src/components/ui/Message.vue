<template>
  <div
    :class="[
      'message',
      {[`message-${type}`]: type}
    ]"
  >
    {{text}}
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'info'
  },
  text: {
    type: String
  }
});
</script>

<style lang="scss" scoped>
.message {
  line-height: 1.2;

  &-info {
    margin-bottom: 20px;

    @include media('min', $viewport-post-md) {
      font-size: 18px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
    }
  }

  &-error {
    padding-top: 10px;
    color: $color-danger;

    @include media('min', $viewport-post-md) {
      font-size: 16px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
    }
  }
}
</style>