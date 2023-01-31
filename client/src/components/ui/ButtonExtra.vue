<template>
  <router-link
    v-if="url"
    :to="url"
    class="btn-extra"
  >
    <slot></slot>
  </router-link>

  <button
    v-else
    class="btn-extra"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String
  }
});
</script>

<style lang="scss" scoped>
.btn-extra {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  background-color: #FFFFFF;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  color: $color-primary;
  cursor: pointer;
  border: 1px solid $color-secondary;
  outline: none;
  transition: background-color .5s ease 0s, color .5s ease 0s;

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
    background-color: $color-primary;
    color: #FFFFFF;
  }
}
</style>