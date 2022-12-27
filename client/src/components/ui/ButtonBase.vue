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
  font-size: 16px;
  line-height: 1.2;
  color: #FFFFFF;
  min-width: 100px;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 16px 20px 13px 20px;
  transition: background-color .5s ease 0s;

  &:hover {
    text-decoration: none;
    background-color: $color-service;
    color: #FFFFFF;
  }
}
</style>