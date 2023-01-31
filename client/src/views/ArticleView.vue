<template>
  <LayoutMain>
    <BannerPrimary
      :title="articleStore.title"
    />

    <Content
      :date="articleStore.date"
      :html="articleStore.content"
    />
  </LayoutMain>
</template>

<script setup>
import { onMounted } from 'vue';
import LayoutMain from '@/components/LayoutMain';
import Content from '@/components/Content';
import BannerPrimary from '@/components/BannerPrimary';
import useArticleStore from '@/stores/articleStore';

const articleStore = useArticleStore();

onMounted(() => {
  articleStore.dataFeatch();
});
</script>