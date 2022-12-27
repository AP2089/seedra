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
    border-radius: 24px;
    padding: 50px 70px;
    background-repeat: no-repeat;
    background-position: right bottom;
  }

  &__content {
    width: 70%;
    padding-right: 30px;
  }

  &__media {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 30%;
  }

  &__heading {
    font-weight: 600;
    font-size: 48px;
    line-height: 1.1;
    margin: 0 0 15px 0;
    padding: 0;
  }

  &__description {
    font-weight: 300;
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 20px;
  }

  &__info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 25px;
  }

  &__icon-hot {
    width: 46px;
    height: 46px;
    fill: $color-danger;
    margin-right: 15px;
  }

  &__price {
    font-weight: 600;
    font-size: 42px;
    line-height: 1;
    margin-right: 20px;
  }

  &__old-price {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 1;
    color: $color-extra;
    text-decoration: line-through;
  }

  &__btn-view {
    min-width: 160px;
  }
}
</style>