<template>
  <label class="checkbox-base">
    <input
      type="checkbox"
      class="checkbox-base__field"
      :value="value"
      :checked="checked"
      @input="change"
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
  value: {
    type: [String, Number],
    default: ''
  },
  checked: {
    type: Boolean,
    default: false
  },
  name: {
    type: String
  },
  group: {
    type: String,
    default: ''
  }
});

const emits = defineEmits([
  'change'
]);

const change = event => {
  const type = 'checkbox';
  const target = event.target;
  const value = target.value;
  const checked = target.checked;
  const group = props.group;

  emits('change', {
    value,
    checked,
    group,
    type
  });
}
</script>

<style lang="scss" scoped>
.checkbox-base {
  display: inline-block;
  min-width: 20px;
  min-height: 20px;
  line-height: 0;
  margin: 0;
  padding: 0;
  position: relative;
  cursor: pointer;
  opacity: 1;
  transition: opacity .5s ease 0s;

  &__field {
    opacity: 0;
    position: absolute;
    left: -100vw;
    z-index: -1;
  }

  &__toggle {
    width: 20px;
    height: 20px;
    background: rgba(53, 151, 64, 0.08);
    border: 1px solid $color-primary;
    border-radius: 6px;
    position: absolute;
    top: 0;
    left: 0;
  }

  &__toggle-icon {
    width: 15px;
    height: 15px;
    fill: $color-primary;
    position: absolute;
    top: 2px;
    left: 2px;
    opacity: 0;
    transition: opacity .5s ease 0s;
  }

  &__title {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: $color-extra;
    padding: 2px 0 0 25px;
  }

  &:hover {
    opacity: .7;
  }

  &__field:checked ~ &__toggle > &__toggle-icon {
    opacity: 1;
  }
}
</style>