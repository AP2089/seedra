<template>
  <nav class="menu-main">
    <ul class="menu-main__list">
      <li
        v-for="item in items"
        class="menu-main__item"
      >
        <router-link
          :to="item.url"
          class="menu-main__link"
        >
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.menu-main {
  &__list {
    list-style: none;
    margin: 0;
    padding: 0;

    @include media('min', $viewport-post-md) {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }

  &__item {
    @include media('min', $viewport-post-md) {
      margin: 0 15px 0 0;
      padding: 0 16px 0 0;
      line-height: 1.2;
      position: relative;

      &:after {
        display: block;
        content: '';
        width: 1px;
        height: 25px;
        background-color: $color-secondary;
        position: absolute;
        top: 1px;
        right: 0;
      }

      &:last-child {
        margin-right: 0;
        padding-right: 0;

        &:after {
          display: none;
        }
      }
    }
    
    @include media('max', $viewport-md) {
      margin: 0;
      padding: 0;
      border-bottom: 1px solid $color-secondary;

      &:last-child {
        border-bottom: none;
      }
    }
  }

  &__link {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: $color-extra;
    text-decoration: none;
    text-transform: uppercase;
    transition: color .5s ease 0s;

    @include media('max', $viewport-md) {
      display: block;
      padding: 7px 15px;
    }

    &:hover,
    &.active {
      text-decoration: none;
      color: $color-primary;
    }
  }
}
</style>