<template>
  <router-link
    v-if="url"
    :to="url"
    class="btn-base"
  >
    <slot></slot>
  </router-link>

  <button
    v-else
    :type="type"
    class="btn-base"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String
  },
  type: {
    type: String,
    default: 'button'
  }
});
</script>

<style lang="scss" scoped>
.btn-base {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  background-color: $color-primary;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  color: #FFFFFF;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color .5s ease 0s;

  @include media('min', $viewport-post-md) {
    min-width: 100px;
    font-size: 16px;
    padding: 16px 20px 13px 20px;
  }
  
  @include media('max', $viewport-md) {
    min-width: 70px;
    font-size: 14px;
    padding: 12px 15px;
  }

  &:hover {
    text-decoration: none;
    background-color: $color-service;
    color: #FFFFFF;
  }
}
</style>