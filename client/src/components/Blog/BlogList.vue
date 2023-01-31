<template>
  <div class="blog__list">
    <div
      v-for="item in items"
      class="blog__item"
    >
      <div class="blog__wrap">
        <div class="blog__date">
          <Sprite
            name="date"
            class="blog__icon-date"
          />
          {{item.date}}
        </div>
        <div class="blog__title">
          <router-link
            :to="item.url"
            class="blog__title-link"
          >
            {{item.title}}
          </router-link>
        </div>
        <div class="blog__description">{{item.description}}</div>
        <ButtonExtra
          :url="item.url"
          class="blog__btn-more"
        >
          {{$t('read')}}
        </ButtonExtra>
      </div>
      <Picture
        :src="item.image"
        :webp="item.imageWebp"
        :alt="item.title"
        class="blog__image"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ButtonExtra from '@/components/ui/ButtonExtra';

const props = defineProps([
  'items'
]);

const itemCounter = ref(1);

const setItemClasess = () => {
  itemCounter.value = itemCounter.value + 1;

  if (itemCounter.value === 10) {
    itemCounter.value = 1;
  }

  return itemCounter.value;
}
</script>

<style lang="scss" scoped>
.blog {
  $rs: &;

  &__list {
    @include media('min', $viewport-post-sm) {
      display: grid; 
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-rows: minmax(300px, auto);
      gap: 30px 30px;
    }
  }

  &__item {
    position: relative;
    background-color: $color-base;
    border-radius: 12px;
    overflow: hidden;

    @include media('min', $viewport-post-sm) {
      padding: 30px;

      &:nth-child(9n+1) { grid-area: 1 / 1 / 2 / 3; }
      &:nth-child(9n+2) { grid-area: 1 / 3 / 3 / 4; }
      &:nth-child(9n+3) { grid-area: 2 / 1 / 3 / 2; }
      &:nth-child(9n+4) { grid-area: 2 / 2 / 3 / 3; }
      &:nth-child(9n+5) { grid-area: 3 / 1 / 4 / 3; }
      &:nth-child(9n+6) { grid-area: 3 / 3 / 4 / 4; }
      &:nth-child(9n+7) { grid-area: 4 / 1 / 6 / 2; }
      &:nth-child(9n+8) { grid-area: 4 / 2 / 6 / 3; }
      &:nth-child(9n+9) { grid-area: 4 / 3 / 6 / 4; }
    }
    
    @include media('max', $viewport-sm) {
      padding: 15px;
      margin-bottom: 15px;
    }
  }

  &__wrap {
    position: relative;
    z-index: 1;

    #{$rs}__item:nth-child(9n+1) &,
    #{$rs}__item:nth-child(9n+5) & {
      max-width: 400px;
    }
  }

  &__date {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: $color-extra;
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
    margin-bottom: 5px;
  }

  &__icon-date {
    width: 24px;
    height: 24px;
    fill: $color-extra;
    margin-right: 8px;
  }

  &__image {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  &__title {
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 10px;

    @include media('min', $viewport-post-md) {
      font-size: 24px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 18px;
    }
  }

  &__title-link {
    color: $color-global;
    text-decoration: none;
    transition: color .5s ease 0s;

    &:hover {
      color: $color-primary;
      text-decoration: none;
    }
  }

  &__description {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.7;
    color: $color-extra;
    margin-bottom: 15px;

    #{$rs}__item:nth-child(9n+3) &,
    #{$rs}__item:nth-child(9n+4) &,
    #{$rs}__item:nth-child(9n+6) & {
      display: none;
    }
  }

  &__btn-more {
    min-width: 110px;
  }
}
</style>