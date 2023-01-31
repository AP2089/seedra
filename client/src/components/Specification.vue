<template>
  <div class="specification">
    <div class="specification__center center">
      <div class="specification__wrap">
        <div class="specification__left">
          <h3 class="specification__heading heading-base">{{title}}</h3>

          <div class="specification__content" v-html="description"></div>
        </div>
        <div class="specification__right">
          <div
            class="specification__decor"
            :style="{'background-image': `url(${decorBg})`}"
          >
            <Picture
              :src="image"
              :webp="imageWebp"
              :alt="title"
              class="specification__decor-img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useImageFormat from '@/hooks/useImageFormat';
import decorBgAny from '@/images/specification-bg.png';
import decorBgWebp from '@/images/specification-bg.png?webp';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imageWebp: {
    type: String
  }
});

const decorBg = useImageFormat(decorBgAny, decorBgWebp);
</script>

<style lang="scss" scoped>
.specification {
  @include media('min', $viewport-post-md) {
    margin-bottom: 50px;
  }
  
  @include media('max', $viewport-md) {
    margin-bottom: 30px;
  }

  &__wrap {
    @include media('min', $viewport-post-md) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  &__left {
    @include media('min', $viewport-post-md) {
      width: 50%;
      padding-right: 30px;
    }
    
    @include media('max', $viewport-md) {
      margin-bottom: 30px;
    }
  }

  &__right {
    @include media('min', $viewport-post-md) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      width: 50%;
    }

    @include media('max', $viewport-md) {
      max-width: 400px;
      margin: 0 auto;
    }
  }

  &__content {
    font-weight: 300;
    line-height: 1.7;

    @include media('min', $viewport-post-md) {
      font-size: 16px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
    }
  }

  &__decor {
    position: relative;
    width: 100%;
    padding-top: calc((545px / 575px) * 100%);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  &__decor-img {
    display: block;
    width: 84%;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: 6%;
    left: 5%;
    z-index: 1;
  }
}
</style>