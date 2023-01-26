<template>
  <div class="accordion__item"> 
    <div class="accordion__head">
      {{ title }}

      <transition name="check">
        <span
          v-if="selected"
          class="accordion__check"
        ></span>
      </transition>

      <button
        type="button"
        :class="btnClases"
        @click="tabChange"
      >
        <Sprite
          name="dropdown"
          class="accordion__btn-icon"
        />
      </button>
    </div>

    <Collapse
      :when="isActive"
      class="accordion__body"
    >
      <div class="accordion__content">
        <div v-if="description" v-html="description"></div>
        <slot v-else></slot>
      </div>
    </Collapse>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Collapse } from 'vue-collapsed';

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: false
  },
  selected: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([
  'change'
]);

const tabChange = () => {
  emit('change', {
    id: props.id,
    isActive: !props.isActive
  });
}

const btnClases = computed(() => {
  return [
    'accordion__btn',
    { active: props.isActive }
  ]
});
</script>

<style lang="scss" scoped>
.accordion {
  $rs: &;

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 16px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid $color-secondary;
  }

  &__check {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: $color-primary;
    margin: 0 auto 0 3px;
    transform: translateY(-5px);
  }

  &__btn {
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;
    margin-left: 15px;
    cursor: pointer;

    &:hover {
      #{$rs}__btn-icon {
        fill: $color-primary;
      }
    }

    &.active {
      #{$rs}__btn-icon {
        fill: $color-primary;
        transform: rotate(180deg);
      }
    }
  }

  &__btn-icon {
    display: block;
    width: 24px;
    height: 24px;
    fill: $color-extra;
    transform: rotate(0deg);
    transition: fill .5s ease 0s, transform .5s ease 0s;
  }

  &__body {
    transition: height var(--vc-auto-duration) cubic-bezier(0.3, 0, 0.6, 1);
  }

  &__content {
    padding-bottom: 10px;
  }
}

.check-enter-active,
.check-leave-active {
  opacity: 1;
  transform: translateY(-5px);
  transition: opacity .5s ease, transform .5s ease;
}

.check-enter-from,
.check-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>