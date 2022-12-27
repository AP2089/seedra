<template>
  <label class="checkbox-base">
    <input
      type="checkbox"
      class="checkbox-base__field"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <span class="checkbox-base__toggle">
      <Sprite
        name="check" 
        class="checkbox-base__toggle-icon"
      />
    </span>

    <span class="checkbox-base__title">{{ name }}</span>
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String
  },
  name: {
    type: String
  }
});

const emit = defineEmits([
  'update:modelValue'
]);
</script>

<style lang="scss" scoped>
.checkbox-base {
  $rs: &;
  display: inline-block;
  line-height: 0;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  min-width: 20px;
  min-height: 20px;
  position: relative;
  overflow: hidden;

  &__field {
    opacity: 0;
    position: absolute;
    left: -100px;
    z-index: -1;

    &:checked ~ #{$rs}__toggle-icon {
      opacity: 1;
    }
  }

  &__toggle {
    width: 20px;
    height: 20px;
    background: rgba(53, 151, 64, 0.08);
    border: 1px solid $color-primary;
    border-radius: 6px;
    cursor: pointer;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: opacity .5s ease 0s;
  }

  &__toggle-icon {
    width: 15px;
    height: 15px;
    fill: $color-primary;
    position: absolute;
    top: 1px;
    left: 2px;
    opacity: 0;
    transition: opacity .5s ease 0s;
  }

  &__title {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: $color-extra;
    padding-left: 25px;
  }

  &:hover {
    #{$rs}__toggle {
      opacity: .7;
    }
  }
}
</style>