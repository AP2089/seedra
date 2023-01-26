<template>
  <div class="accordion">
    <AccordionItem
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :selected="item.selected"
      :title="item.title"
      :description="item.description"
      :isActive="isActive(item.id)"
      @change="tabChange"
    >
      <AccordionCheckbox
        v-if="item.type === 'checkbox'"
        :options="item.options"
        :group="item.group"
        @checkboxChange="$emit('checkboxChange', $event)"
      />

      <AccordionRange
        v-if="item.type === 'range'"
        :from="item.from"
        :to="item.to"
        :group="item.group"
        @rangeChange="$emit('rangeChange', $event)"
      />
    </AccordionItem>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AccordionItem from '@/components/Accordion/AccordionItem';
import AccordionCheckbox from '@/components/Accordion/AccordionCheckbox';
import AccordionRange from '@/components/Accordion/AccordionRange';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

const tabActive = ref({
  id: 1,
  isActive: true
});

const tabChange = (data) => {
  tabActive.value = data;
}

const isActive = (id) => {
  return tabActive.value.isActive && id === tabActive.value.id;
}
</script>