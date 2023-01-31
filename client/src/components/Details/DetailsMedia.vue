<template>
  <div class="details__media">
    <div
      v-if="image.any || image.webp"
      class="details__media-main"
    >
      <Picture
        :src="image.any"
        :webp="image.webp"
        :alt="title"
        class="details__media-image"
        @click="() => showImg(0)"
      />
    </div>

    <swiper
      :modules="modules"
      :slides-per-view="6"
      :space-between="8"
      :scrollbar="{
        draggable: true
      }"
      navigation
      v-if="thumbnails.length > 0"
      class="details__media-list"
    >
      <swiper-slide
        v-for="(thumbnail, index) in thumbnails"
        :key="thumbnail"
        class="details__media-item"
      >
        <Picture
          :src="thumbnail.sm.any"
          :webp="thumbnail.sm.webp"
          :alt="title"
          class="details__media-thumbnail"
          @click="() => showImg(index + 1)"
        />
      </swiper-slide>
    </swiper>

    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="images"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import VueEasyLightbox from 'vue-easy-lightbox';
import useBrowserSupport from '@/hooks/useBrowserSupport';
import 'swiper/css';
import 'swiper/css/navigation';

const props = defineProps([
  'title',
  'gallery'
]);

const { hasWebp } = useBrowserSupport();
const visibleRef = ref(false);
const indexRef = ref(0);

const images = computed(() => {
  if (props.gallery.length > 0) {
    return props.gallery.reduce((a, e) => {
      a.push(hasWebp ? e.lg.webp : e.lg.any);

      return a;
    }, []);
  }

  return [];
});

const image = computed(() => {
  if (props.gallery.length > 0) {
    return props.gallery[0].md;
  }

  return { any: '', webp: '' };
});

const thumbnails = computed(() => {
  if (props.gallery.length > 1) {
    return props.gallery.slice(1);
  }

  return [];
});

const modules = computed(() => {
  return [Navigation]
});

const showImg = (index) => {
  indexRef.value = index;
  visibleRef.value = true;
}

const onHide = () => visibleRef.value = false;
</script>

<style lang="scss" scoped>
.details {
  &__media {
    @include media('min', $viewport-post-md) {
      width: 40%;
    }
    
    @include media('max', $viewport-md) {
      max-width: 250px;
      margin: 0 auto 30px;
      order: 1;
    }
  }

  &__media-main {
    display: inline-flex;
    margin-bottom: 20px;
  }

  &__media-image {
    display: block;
    overflow: hidden;
    border-radius: 12px;
    cursor: pointer;
    opacity: 1;
    transition: opacity .5s ease 0s;

    &:hover {
      opacity: .7;
    }
  }

  &__media-thumbnail {
    display: block;
    overflow: hidden;
    border-radius: 12px;
    cursor: pointer;
    opacity: 1;
    transition: opacity .5s ease 0s;

    &:hover {
      opacity: .7;
    }
  }

  .swiper {
    --swiper-navigation-size: 30px;
    --swiper-theme-color: #359740;
  }
}
</style>