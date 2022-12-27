<template>
  <router-link
    :to="url"
    class="btn-service"
  >
    <div class="btn-service__count">
      {{count}}
    </div>

    <Sprite
      :name="icon"
      class="btn-service__icon"
    />
  </router-link>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  count: {
    type: Number
  }
});
</script>

<style lang="scss" scoped>
.btn-service {
  $rs: &;
  display: block;
  width: 24px;
  height: 24px;
  text-decoration: none;
  position: relative;
  color: $color-global;

  &:hover {
    color: $color-global;
    text-decoration: none;

    #{$rs}__count {
      border-color: $color-extra;
    }

    #{$rs}__icon {
      fill: $color-extra;
    }
  }

  &__count {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    font-size: 9px;
    font-weight: bold;
    background-color: #FFFFFF;
    border-radius: 50%;
    border: 1px solid $color-primary;
    position: absolute;
    top: -5px;
    right: -5px;
    z-index: 1;
    transition: border-color .5s ease 0s;
  }

  &__icon {
    display: block;
    width: inherit;
    height: inherit;
    fill: $color-primary;
    transition: fill .5s ease 0s;
  }
}
</style>