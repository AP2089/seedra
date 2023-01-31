<template>
  <LayoutMain>
    <BannerPrimary
      :title="blogStore.title"
      :description="blogStore.description"
    />

    <Blog
      :items="blogStore.items"
      :paginationPageCount="blogStore.pageCount"
      @paginationChange="blogStore.dataFeatch"
    />
  </LayoutMain>
</template>

<script setup>
import { onMounted } from 'vue';
import LayoutMain from '@/components/LayoutMain';
import Blog from '@/components/Blog';
import BannerPrimary from '@/components/BannerPrimary';
import useBlogStore from '@/stores/blogStore';

const blogStore = useBlogStore();

onMounted(() => {
  blogStore.dataFeatch();
});
</script>