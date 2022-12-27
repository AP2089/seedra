<template>
  <LayoutBase>
    <BannerPrimary
      :title="privacyStore.title"
    />

    <Content
      :html="privacyStore.content"
    />
  </LayoutBase>
</template>

<script setup>
import { onMounted } from 'vue';
import LayoutBase from '@/components/LayoutBase';
import Content from '@/components/Content';
import BannerPrimary from '@/components/BannerPrimary';
import usePrivacyStore from '@/stores/privacyStore';

const privacyStore = usePrivacyStore();

onMounted(() => {
  privacyStore.dataFeatch();
});
</script>