<template>
  <div class="search-main">
    <div class="search-main__core">
      <Sprite
        name="search"
        class="search-main__icon"
      />

      <input
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        class="search-main__field"
      />

      <Sprite
        v-if="isLoading"
        name="loader"
        class="search-main__loader"
      />
    </div>

    <div
      v-if="items.length > 0"
      class="search-main__list"
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="search-main__item"
        @click="$emit('choos', item.id)"
      >
        <router-link
          :to="item.url"
          class="search-main__link"
        >
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import translations from '@/translations';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: translations.global.t('search')
  },
  items: {
    type: Array,
    required: true
  },
  isLoading: {
    type: Boolean
  }
});
</script>

<style lang="scss" scoped>
.search-main {
  position: relative;

  &__core {
    position: relative;
  }

  &__icon {
    display: block;
    width: 24px;
    height: 24px;
    fill: $color-extra;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    z-index: 0;
    margin-top: auto;
    margin-bottom: auto;
  }

  &__field {
    display: block;
    width: 100%;
    border: 1px solid $color-secondary;
    border-radius: 70px;
    background-color: #ffffff;
    height: 48px;
    padding: 5px 35px 5px 60px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    outline: none;
    color: $color-global;
    transition: border-color .5s ease 0s;

    &:hover,
    &:focus {
      border-color: $color-extra;
    }

    @include placeholder() {
      color: $color-extra;
      opacity: 1;
    }
  }

  &__loader {
    display: block;
    width: 20px;
    height: 20px;
    fill: $color-primary;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 1;
  }

  &__list {
    width: 100%;
    max-height: calc(100vh - 80px);
    background-color: #ffffff;
    overflow-x: hidden;
    overflow-y: auto;
    border: 1px solid $color-secondary;
    border-radius: 15px;
    padding: 10px 0;
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    z-index: 10;
  }

  &__item {
    line-height: 1.4;
    border-bottom: 1px solid $color-secondary;

    &:last-child {
      border-bottom: none;
    }
  }

  &__link {
    display: block;
    text-decoration: none;
    font-size: 14px;
    color: $color-global;
    padding: 12px 15px;
    transition: color .5s ease 0s;

    &:hover {
      color: $color-primary;
    }
  }
}
</style>