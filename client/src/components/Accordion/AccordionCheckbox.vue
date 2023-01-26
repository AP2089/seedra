<template>
  <div class="accordion__options">
    <div
      v-for="option in options"
      class="accordion__option"
    >
      <CheckboxBase
        :name="option.name"
        :value="option.id"
        :checked="option.checked"
        :group="group"
        @change="$emit('checkboxChange', $event)"
      />
    </div>
  </div> 
</template>

<script setup>
import CheckboxBase from '@/components/ui/CheckboxBase';

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  group: {
    type: String
  }
});
</script>

<style lang="scss" scoped>
.accordion {
  &__option {
    line-height: 0;
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>