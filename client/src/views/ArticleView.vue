<template>
  <LayoutBase>
    <BannerPrimary
      :title="articleStore.title"
    />

    <Content
      :date="articleStore.date"
      :html="articleStore.content"
    />
  </LayoutBase>
</template>

<script setup>
import { onMounted } from 'vue';
import LayoutBase from '@/components/LayoutBase';
import Content from '@/components/Content';
import BannerPrimary from '@/components/BannerPrimary';
import useArticleStore from '@/stores/articleStore';

const articleStore = useArticleStore();

onMounted(() => {
  articleStore.dataFeatch();
});
</script>