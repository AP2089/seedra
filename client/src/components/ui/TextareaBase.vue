<template>
  <div class="textarea-base">
    <div
      class="textarea-base__label"
      v-if="label"
    >
      {{ label }}
    </div>

    <textarea
      :value="modelValue"
      :class="textareaClasses"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>

    <Message
      v-if="(validation.$dirty && validation.$errors.length > 0)"
      :text="validation.$errors[0].$message"
      type="error"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
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
  }
});

const emit = defineEmits([
  'update:modelValue'
]);

const textareaClasses = computed(() => {
  return [
    'textarea-base__field',
    {error: props.validation.$dirty && props.validation.$invalid}
  ];
});
</script>

<style lang="scss" scoped>
.textarea-base {
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
    color: $color-extra;
    outline: none;
    transition: border-color .5s ease 0s, color .5s ease 0s;

    @include media('min', $viewport-post-md) {
      height: 135px;
      font-size: 16px;
      padding: 15px 25px;
    }
    
    @include media('max', $viewport-md) {
      height: 80px;
      font-size: 14px;
      padding: 15px;
    }

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