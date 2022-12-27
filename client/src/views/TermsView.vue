<template>
  <LayoutBase>
    <BannerPrimary
      :title="termsStore.title"
    />

    <Content
      :html="termsStore.content"
    />
  </LayoutBase>
</template>

<script setup>
import { onMounted } from 'vue';
import LayoutBase from '@/components/LayoutBase';
import Content from '@/components/Content';
import BannerPrimary from '@/components/BannerPrimary';
import useTermsStore from '@/stores/termsStore';

const termsStore = useTermsStore();

onMounted(() => {
  termsStore.dataFeatch();
});
</script>