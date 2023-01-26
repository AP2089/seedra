<template>
  <div class="amount">
    <button
      type="button"
      class="amount__btn"
      @click="click('-')"
    >-</button>

    <input
      type="text"
      class="amount__inputbox"
      v-mask="'###'"
      v-model="count"
      @change="change"
    />

    <button
    type="button"
    class="amount__btn"
    @click="click('+')"
    >+</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { mask as vMask } from 'vue-the-mask';

const props = defineProps({
  value: {
    type: [Number, String],
    default: 1
  }
});

const emit = defineEmits([
  'update'
]);

const count = ref(props.value);

const change = (event) => {
  let value = event.target.value;

  if (!value) {
    count.value = 1;
  }
}

const click = (key) => {
  if (key === '+') {
    count.value = count.value + 1;
  } else {
    count.value = count.value - 1 <= 0 ? 1 : count.value - 1;
  }
}

watch(count, (value) => {
  if (/^\d+$/.test(value)) {
    emit('update', Number(value));
  }
});
</script>

<style lang="scss" scoped>
.amount {
  display: inline-flex;
  padding: 5px;
  border: 1px solid $color-secondary;
  border-radius: 15px;

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    border: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
    font-size: 18px;
    font-weight: 500;
    color: $color-primary;
    opacity: 1;
    transition: opacity .5s ease 0s;

    &:hover {
      opacity: .7;
    }
  }

  &__inputbox {
    background: rgba(53, 151, 64, 0.08);
    border-radius: 6px;
    width: 32px;
    height: 32px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: $color-primary;
    border: none;
    text-align: center;
    outline: none;

    &:hover {
      outline: none;
    }
  }
}
</style>