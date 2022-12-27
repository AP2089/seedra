<template>
  <picture>
    <source
      v-if="webp"
      :srcset="webp"
      type="image/webp"
    />

    <img
      :src="src"
      :alt="alt"
      loading="lazy"
    />
  </picture>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
    default: ''
  },
  webp: {
    type: String
  },
  alt: {
    type: String,
    default: ''
  }
});
</script>

<style lang="scss" scoped>
img {
  display: block;
  max-width: 100%;
}
</style>