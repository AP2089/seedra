<template>
  <div class="accordion__range">
    <div class="accordion__range-control">
      <InputboxBase
        :label="$t('from')"
        :readonly="true"
        :mask="maskFrom"
        v-model="valueFrom"
        class="accordion__range-inputbox inputbox-base_sm"
      />
      <hr class="accordion__range-line" />
      <InputboxBase
        :label="$t('to')"
        v-model="valueTo"
        :mask="maskTo"
        class="accordion__range-inputbox inputbox-base_sm"
        @change="inputChange"
      />
    </div>
    <RangeBase
      :minValue="from"
      :maxValue="to"
      class="accordion__range-slider"
      v-model="valueRange"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import InputboxBase from '@/components/ui/InputboxBase';
import RangeBase from '@/components/ui/RangeBase';
import useGlobalStore from '@/stores/globalStore';

const props = defineProps({
  from: {
    type: Number,
    required: true
  },
  to: {
    type: Number,
    required: true
  },
  group: {
    type: String
  }
});

const emits = defineEmits([
  'rangeChange'
]);

const globalStore = useGlobalStore();
const valueFrom = ref(props.from);
const valueTo = ref(props.to);
const valueRange = ref(props.to);

const setMask = (data) => {
  const value = data ? data.toString() : '';
  const length = value.length > 0 ? value.length : 2;

  return globalStore.currencySymbol + '#'.repeat(length);
}

const maskFrom = computed(() => setMask(props.from));
const maskTo = computed(() => setMask(props.to));

watch(() => valueRange.value, (value) => {
  valueTo.value = value;

  emits('rangeChange', {
    type: 'range',
    value: valueTo.value,
    group: props.group
  });
});

const inputChange = (event) => {
  const value = event.target.value;
  const valueNumber = Number(value.replace(globalStore.currencySymbol, ''));

  if (!value || valueNumber > props.to) {
    valueTo.value = props.to;
  } else if (valueNumber < props.from) {
    valueTo.value = props.from;
  }

  valueRange.value = String(valueTo.value).replace(globalStore.currencySymbol, '');
}
</script>

<style lang="scss" scoped>
.accordion {
  &__range-control {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__range-inputbox {
    width: calc(50% - 20px);
  }

  &__range-line {
    width: 16px;
    height: 2px;
    background-color: $color-extra;
    margin: 0 0 20px 0;
    border: none;
  }
}
</style>