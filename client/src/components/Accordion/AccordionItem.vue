<template>
  <div class="accordion__item"> 
    <button
      @click="handleCollapse"
    >
      {{ title }}
    </button>

    <Collapse
      :when="isOpen"
      class="collapse"
    >
      <div v-if="description" v-html="description"></div>
      <slot v-else></slot>
    </Collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Collapse } from 'vue-collapsed';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

const isOpen = ref(false);

function handleCollapse() {
  isOpen.value = !isOpen.value
}
</script>

<style lang="scss" scoped>
.collapse {
  transition: height var(--vc-auto-duration) cubic-bezier(0.3, 0, 0.6, 1);
}
</style>