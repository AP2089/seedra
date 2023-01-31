<template>
  <div class="slider-reviews">
    <div class="slider-reviews__canter center" v-if="title">
      <h3 class="slider-reviews__heading heading-base">{{title}}</h3>
    </div>

    <swiper
      :modules="modules"
      :space-between="30"
      :centeredSlides="true"
      :pagination="{
        clickable: true
      }"
      :scrollbar="{
        draggable: true
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      :breakpoints="{
        800: {
          slidesPerView: 3
        }
      }"
    >
      <swiper-slide
        v-for="item in items"
        :key="item.id"
      >
        <div class="slider-reviews__wrap">
          <div class="slider-reviews__head">
            <Picture
              :src="item.image"
              :webp="item.imageWebp"
              :alt="item.title"
              class="slider-reviews__image"
            />
            <div class="slider-reviews__info">
              <div class="slider-reviews__title">{{item.title}}</div>
              <div class="slider-reviews__date">{{item.date}}</div>
            </div>
          </div>
          <Rating
            :active="item.rating"
            class="slider-reviews__rating"
          />
          <div class="slider-reviews__description">{{item.description}}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper';
import Rating from '@/components/Rating';
import 'swiper/css';

const props = defineProps({
  title: {
    type: String
  },
  items: {
    type: Array,
    required: true,
  },
});

const modules = computed(() => {
  return [Pagination, Autoplay]
});
</script>

<style lang="scss" scoped>
.slider-reviews {
  @include media('min', $viewport-post-md) {
    margin-bottom: 50px;
  }
  
  @include media('max', $viewport-md) {
    margin-bottom: 30px;
  }

  &__heading {
    text-align: center;
  }

  &__wrap {
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
    box-shadow: 0px 4px 21px rgba(209, 209, 209, 0.25);
    border-radius: 12px;

    @include media('min', $viewport-post-md) {
      padding: 35px;
    }
    
    @include media('max', $viewport-md) {
      padding: 15px;
    }
  }

  &__head {
    @include media('min', $viewport-post-md) {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 20px;
    }
    
    @include media('max', $viewport-md) {
      margin-bottom: 15px;
    }
  }

  &__image {
    overflow: hidden;
    border-radius: 50%;

    @include media('min', $viewport-post-md) {
      flex: 0 0 64px;
    }

    @include media('max', $viewport-md) {
      display: block;
      width: 64px;
      margin-bottom: 5px;
    }
  }

  &__info {
    @include media('min', $viewport-post-md) {
      flex: 1;
      padding-left: 24px;
    }
  }

  &__title {
    font-weight: 500;
    line-height: 1.4;
    margin-right: 10px;

    @include media('min', $viewport-post-md) {
      font-size: 18px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 16px;
    }
  }

  &__date {
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
    color: $color-extra;
  }

  &__rating {
    margin-bottom: 15px;
  }

  &__description {
    font-weight: 300;
    line-height: 1.7;

    @include media('min', $viewport-post-md) {
      font-size: 16px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
    }
  }

  :deep(.swiper) {
    padding-bottom: 50px;
  }

  .swiper-slide {
    opacity: .5;
    transition: opacity .5s ease 0s;

    &.swiper-slide-active {
      opacity: 1;
    }
  }

  :deep(.swiper-pagination) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    width: 100%;
    position: absolute;
    bottom: 20px;
    left: 0;
    z-index: 100;
  }

  :deep(.swiper-pagination-bullet) {
    width: 35px;
    height: 6px;
    border-radius: 5px;
    background-color: $color-primary;
    cursor: pointer;
    opacity: .2;
    margin-right: 5px;
    transition: opacity .5s ease 0s;

    &:hover,
    &.swiper-pagination-bullet-active {
      opacity: 1;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>