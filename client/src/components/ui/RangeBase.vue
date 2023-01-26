<template>
  <input
    type="range"
    :min="minValue"
    :max="maxValue"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="range-base"
  />
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number]
  },
  minValue: {
    type: [String, Number]
  },
  maxValue: {
    type: [String, Number]
  },
});

const emit = defineEmits([
  'update:modelValue'
]);
</script>

<style lang="scss" scoped>
.range-base {
  display: block;
  width: 100%;
  height: 5px;
}
</style>