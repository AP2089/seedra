<template>
  <LayoutBase>
    <BannerPrimary
      :title="blogStore.title"
      :description="blogStore.description"
    />

    <Blog
      :items="blogStore.items"
      :paginationPageCount="blogStore.pageCount"
      @paginationChange="blogStore.dataFeatch"
    />
  </LayoutBase>
</template>

<script setup>
import { onMounted } from 'vue';
import LayoutBase from '@/components/LayoutBase';
import Blog from '@/components/Blog';
import BannerPrimary from '@/components/BannerPrimary';
import useBlogStore from '@/stores/blogStore';

const blogStore = useBlogStore();

onMounted(() => {
  blogStore.dataFeatch();
});
</script>