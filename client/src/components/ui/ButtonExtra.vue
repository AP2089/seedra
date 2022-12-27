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
  font-size: 16px;
  line-height: 1.2;
  color: $color-primary;
  min-width: 100px;
  cursor: pointer;
  border: 1px solid $color-secondary;
  outline: none;
  padding: 16px 20px 13px 20px;
  transition: background-color .5s ease 0s, color .5s ease 0s;

  &:hover {
    text-decoration: none;
    background-color: $color-primary;
    color: #FFFFFF;
  }
}
</style>