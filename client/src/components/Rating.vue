<template>
  <div
    :class="[
      'rating',
      { [`rating_${size}`]: size }
    ]"
  >
    <Sprite
      v-for="i in 5"
      :key="i"
      name="star"
      :class="[
        'rating__icon',
        { 'active': i <= active }
      ]"
    />

    <span
      v-if="count"
      class="rating__count"
    >
      ({{ count }})
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Number,
    default: 0
  },
  count: {
    type: Number
  },
  size: {
    type: String
  }
});
</script>

<style lang="scss" scoped>
.rating {
  $rs: &;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &__icon {
    margin-right: 1px;
    fill: #FFFFFF;
    stroke: $color-info;
    stroke-width: 2;

    @include media('min', $viewport-post-md) {
      width: 24px;
      height: 24px;
    }
    
    @include media('max', $viewport-md) {
      width: 16px;
      height: 16px; 
    }

    &.active {
      fill: $color-info;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__count {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
    color: $color-extra;
    margin-left: 15px;
  }

  &_sm {
    #{$rs}__icon {
      width: 16px;
      height: 16px;
    }
  }
}
</style>