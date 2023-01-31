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
      :readonly="readonly"
      @input="inputChange"
    />

    <input
      v-else
      type="text"
      :class="inputClasses"
      :value="modelValue"
      :placeholder="placeholder"
      :readonly="readonly"
      @input="inputChange"
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
    type: [String, Number]
  },
  placeholder: {
    type: String
  },
  validation: {
    type: Object,
    default: {}
  },
  mask: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: false
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

const inputChange = (event) => {
  const value = event.target.value;

  emit('update:modelValue', value);
}
</script>

<style lang="scss" scoped>
.inputbox-base {
  $rs: &;

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
      height: 56px;
      padding: 0 25px;
      font-size: 16px;
    }
    
    @include media('max', $viewport-md) {
      height: 40px;
      padding: 0 15px;
      font-size: 14px;
    }

    &:hover,
    &:focus {
      border-color: $color-global;
    }

    &.error {
      border-color: $color-danger;
      color: $color-danger;
    }

    &[readonly] {
      border-color: $color-secondary !important;
    }
  }

  &_sm {
    #{$rs}__field {
      @include media('min', $viewport-post-md) {
        height: 40px;
        padding: 0 10px;
      }
    }
  }
}
</style>