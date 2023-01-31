<template>
  <div class="banner-main">
    <div class="banner-main__center center">
      <div
        :style="{'background-image': `url(${wrapBg})`}"
        class="banner-main__wrap"
      >
        <div class="banner-main__content">
          <h3 class="banner-main__heading">{{title}}</h3>
          <div class="banner-main__description">{{description}}</div>
          <div class="banner-main__info">
            <Sprite
              name="hot"
              class="banner-main__icon-hot"
            />

            <div
              v-if="price"
              class="banner-main__price"
            >
              {{currencySymbol}}{{price}}
            </div>

            <div
              v-if="oldPrice"
              class="banner-main__old-price"
            >
              {{currencySymbol}}{{oldPrice}}
            </div>
          </div>
          <ButtonBase
            v-if="url"
            :url="url"
            class="banner-main__btn-view"
          >
            {{$t('view')}}
          </ButtonBase>
        </div>
        <div class="banner-main__media">
          <Picture
            :src="image"
            :webp="imageWebp"
            :alt="title"
            class="banner-main__media-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useImageFormat from '@/hooks/useImageFormat';
import useGlobalStore from '@/stores/globalStore';
import ButtonBase from '@/components/ui/ButtonBase';
import wrapBgAny from '@/images/banner-main-bg.png';
import wrapBgWebp from '@/images/banner-main-bg.png?webp';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String
  },
  oldPrice: {
    type: String
  },
  url: {
    type: String
  },
  image: {
    type: String,
    required: true
  },
  imageWebp: {
    type: String
  }
});

const { currencySymbol } = useGlobalStore();
const wrapBg = useImageFormat(wrapBgAny, wrapBgWebp);

</script>

<style lang="scss" scoped>
.banner-main {
  margin-bottom: 30px;
  
  &__wrap {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    background: $color-base;
    background-repeat: no-repeat;
    background-position: right bottom;

    @include media('min', $viewport-post-md) {
      border-radius: 24px;
      padding: 50px 70px;
    }
    
    @include media('max', $viewport-md) {
      border-radius: 14px;
      padding: 20px;
    }
  }

  &__content {
    @include media('min', $viewport-post-sm) {
      width: 70%;
      padding-right: 30px;
    }
  }

  &__media {
    @include media('min', $viewport-post-sm) {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      width: 30%;
    }
    
    @include media('max', $viewport-sm) {
      display: none;
    }
  }

  &__media-img {
    @include media('max', $viewport-md) {
      max-width: 150px;
    }
  }

  &__heading {
    font-weight: 600;
    line-height: 1.1;
    padding: 0;

    @include media('min', $viewport-post-md) {
      font-size: 48px;
      margin: 0 0 15px 0;
    }
    
    @include media('max', $viewport-md) {
      font-size: 25px;
      margin: 0 0 10px 0;
    }
  }

  &__description {
    font-weight: 300;
    line-height: 1.7;

    @include media('min', $viewport-post-md) {
      font-size: 16px;
      margin-bottom: 20px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
      margin-bottom: 15px;
    }
  }

  &__info {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    @include media('min', $viewport-post-md) {
      margin-bottom: 25px;
    }
    
    @include media('max', $viewport-md) {
      margin-bottom: 15px;
    }
  }

  &__icon-hot {
    fill: $color-danger;

    @include media('min', $viewport-post-md) {
      width: 46px;
      height: 46px;
      margin-right: 15px;
    }
    
    @include media('max', $viewport-md) {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
  }

  &__price {
    font-weight: 600;
    line-height: 1;

    @include media('min', $viewport-post-md) {
      font-size: 42px;
      margin-right: 20px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 24px;
      margin-right: 10px;
    }
  }

  &__old-price {
    font-style: normal;
    font-weight: 600;
    line-height: 1;
    color: $color-extra;
    text-decoration: line-through;
    padding-bottom: 2px;

    @include media('min', $viewport-post-md) {
      font-size: 22px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 15px;
    }
  }

  &__btn-view {
    min-width: 160px;
  }
}
</style>