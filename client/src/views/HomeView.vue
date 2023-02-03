<template>
  <LayoutMain>
    <BannerMain
      :title="homeStore.bannerMain.title"
      :description="homeStore.bannerMain.description"
      :price="homeStore.bannerMain.price"
      :oldPrice="homeStore.bannerMain.oldPrice"
      :image="homeStore.bannerMain.image"
      :imageWebp="homeStore.bannerMain.imageWebp"
      :url="homeStore.bannerMain.url"
    />

    <BannerExtra
      :title="homeStore.bannerExtra.title"
      :description="homeStore.bannerExtra.description"
    />

    <Products
      :title="$t('our.products')"
      moreUrl="/catalog"
      :items="homeStore.products"
    />

    <!-- <Blog
      :title="$t('our.blog')"
      :items="homeStore.blog"
      moreUrl="/blog"
    /> -->

    <SliderReviews
      :title="homeStore.reviews.title"
      :items="homeStore.reviews.items"
    />

    <Specification
      :title="homeStore.specification.title"
      :description="homeStore.specification.description"
      :image="homeStore.specification.image"
      :imageWebp="homeStore.specification.imageWebp"
    />
  </LayoutMain>
</template>

<script setup>
import { onMounted } from 'vue';
import LayoutMain from '@/components/LayoutMain';
import SliderReviews from '@/components/SliderReviews';
import Specification from '@/components/Specification';
import BannerMain from '@/components/BannerMain';
import BannerExtra from '@/components/BannerExtra';
// import Blog from '@/components/Blog';
import Products from '@/components/Products';
import useHomeStore from '@/stores/homeStore';

const homeStore = useHomeStore();

onMounted(() => {
  homeStore.dataFeatch();
});
</script>