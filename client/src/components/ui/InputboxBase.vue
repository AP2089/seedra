<template>
  <div class="inputbox-base">
    <div
      class="inputbox-base__label"
      v-if="label"
    >
      {{ label }}
    </div>

    <input
      v-if="mask"
      type="text"
      v-mask="mask"
      :class="inputClasses"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <input
      v-else
      type="text"
      :class="inputClasses"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <Message
      v-if="validation.$dirty && validation.$errors.length > 0"
      :text="validation.$errors[0].$message"
      type="error"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { mask as vMask } from 'vue-the-mask';
import Message from '@/components/ui/Message';

const props = defineProps({
  label: {
    type: String
  },
  modelValue: {
    type: String
  },
  placeholder: {
    type: String
  },
  validation: {
    type: Object
  },
  mask: {
    type: String
  }
});

const emit = defineEmits([
  'update:modelValue'
]);

const inputClasses = computed(() => {
  return [
    'inputbox-base__field',
    {error: props.validation.$dirty && props.validation.$invalid}
  ];
});
</script>

<style lang="scss" scoped>
.inputbox-base {
  &__label {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: $color-extra;
    margin-bottom: 5px;
  }

  &__field {
    display: block;
    width: 100%;
    border: 1px solid $color-secondary;
    border-radius: 4px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    color: $color-extra;
    height: 56px;
    padding: 0 25px;
    outline: none;
    transition: border-color .5s ease 0s, color .5s ease 0s;

    &:hover,
    &:focus {
      border-color: $color-global;
    }

    &.error {
      border-color: $color-danger;
      color: $color-danger;
    }
  }
}
</style>