<template>
  <div class="banner-extra">
    <div class="banner-extra__center center">
      <div
        :style="{'background-image': `url(${leftBg})`}"
        class="banner-extra__wrap"
      >
        <div
          :style="{'background-image': `url(${rightBg})`}"
          class="banner-extra__inner"
        >
          <div class="banner-extra__heading" v-if="title">{{title}}</div>
          <div class="banner-extra__description" v-if="description">{{description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useImageFormat from '@/hooks/useImageFormat';
import leftBgAny from '@/images/banner-extra-left-bg.png';
import leftBgWebp from '@/images/banner-extra-left-bg.png?webp';
import rightBgAny from '@/images/banner-extra-right-bg.png';
import rightBgWebp from '@/images/banner-extra-right-bg.png?webp';

const props = defineProps({
  title: {
    type: String
  },
  description: {
    type: String
  },
});

const leftBg = useImageFormat(leftBgAny, leftBgWebp);
const rightBg = useImageFormat(rightBgAny, rightBgWebp);

</script>

<style lang="scss" scoped>
.banner-extra {
  @include media('min', $viewport-post-md) {
    margin-bottom: 50px;
  }
  
  @include media('max', $viewport-md) {
    margin-bottom: 30px;
  }

  &__wrap {
    background: rgba(255, 230, 46, 0.09);
    border-radius: 12px;
    background-repeat: no-repeat;
    background-position: left bottom;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 104px;
    background-repeat: no-repeat;
    background-position: right bottom;

    @include media('min', $viewport-post-md) {
      padding: 25px;
    }
    
    @include media('max', $viewport-md) {
      padding: 15px;
    }
  }

  &__heading {
    font-weight: 600;
    line-height: 1;
    margin-bottom: 10px;

    @include media('min', $viewport-post-md) {
      font-size: 24px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 20px;
    }
  }

  &__description {
    font-weight: 500;
    line-height: 1.7;
    color: $color-extra;

    @include media('min', $viewport-post-md) {
      font-size: 16px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
    }
  }
}
</style>