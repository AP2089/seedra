<template>
  <svg>
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>