<template>
  <div class="filter-base">
    <div
      v-if="title"
      class="filter-base__title"
    >
      {{ title }}
    </div>

    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String
  }
});
</script>

<style lang="scss" scoped>
.filter-base {
  position: sticky;
  top: 75px;
  left: 0;

  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
}
</style>