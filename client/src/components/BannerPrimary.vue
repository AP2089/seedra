<template>
  <div class="banner-primary">
    <div class="banner-primary__center center">
      <div
        :style="{'background-image': `url(${leftBg})`}"
        class="banner-primary__wrap"
      >
        <div
          :style="{'background-image': `url(${rightBg})`}"
          class="banner-primary__inner"
        >
          <div
            v-if="title"
            class="banner-primary__heading"
          >
            {{title}}
          </div>

          <div 
            v-if="description"
            class="banner-primary__description"
          >
            {{description}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useImageFormat from '@/hooks/useImageFormat';
import leftBgAny from '@/images/banner-primary-left-bg.png';
import leftBgWebp from '@/images/banner-primary-left-bg.png?webp';
import rightBgAny from '@/images/banner-primary-right-bg.png';
import rightBgWebp from '@/images/banner-primary-right-bg.png?webp';

const props = defineProps({
  title: {
    type: String
  },
  description: {
    type: String
  }
});

const leftBg = useImageFormat(leftBgAny, leftBgWebp);
const rightBg = useImageFormat(rightBgAny, rightBgWebp);

</script>

<style lang="scss" scoped>
.banner-primary {
  margin-bottom: 30px;

  &__wrap {
    background-color: $color-base;
    background-repeat: no-repeat;
    background-position: left bottom;

    @include media('min', $viewport-post-md) {
      border-radius: 24px;
    }
    
    @include media('max', $viewport-md) {
      border-radius: 12px;
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: right top;

    @include media('min', $viewport-post-md) {
      padding: 25px;
      min-height: 250px;
    }
    
    @include media('max', $viewport-md) {
      padding: 15px;
      min-height: 100px;
    }
  }

  &__heading {
    font-weight: 600;
    line-height: 1;
    margin-bottom: 15px;
    max-width: 700px;
    text-align: center;

    @include media('min', $viewport-post-md) {
      font-size: 48px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 20px;
    }
  }

  &__description {
    font-weight: 300;
    line-height: 1.7;
    max-width: 700px;
    text-align: center;

    @include media('min', $viewport-post-md) {
      font-size: 16px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
    }
  }
}
</style>