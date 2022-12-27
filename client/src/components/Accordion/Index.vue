<template>
  <div class="accordion">
    <AccordionItem
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :description="item.description"
    >
      <AccordionCheckbox
        v-if="item.type === 'checkbox'"
        :options="item.options"
      />

    </AccordionItem>
  </div>
</template>

<script setup>
import AccordionItem from '@/components/Accordion/AccordionItem';
import AccordionCheckbox from '@/components/Accordion/AccordionCheckbox';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>