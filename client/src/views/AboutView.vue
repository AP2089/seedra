<template>
  <LayoutBase>
    <BannerPrimary
      :title="aboutStore.title"
      :description="aboutStore.description"
    />

    <Specification
      :title="aboutStore.specification.title"
      :description="aboutStore.specification.description"
      :image="aboutStore.specification.image"
      :imageWebp="aboutStore.specification.imageWebp"
    />

    <Story
      :title="aboutStore.story.title"
      :description="aboutStore.story.description"
      :image="aboutStore.story.image"
      :imageWebp="aboutStore.story.imageWebp"
    />

    <Team
      :title="aboutStore.team.title"
      :items="aboutStore.team.items"
    />
  </LayoutBase>
</template>

<script setup>
import { onMounted } from 'vue';
import LayoutBase from '@/components/LayoutBase';
import Specification from '@/components/Specification';
import BannerPrimary from '@/components/BannerPrimary';
import Story from '@/components/Story';
import Team from '@/components/Team';
import useAboutStore from '@/stores/aboutStore';

const aboutStore = useAboutStore();

onMounted(() => {
  aboutStore.dataFeatch();
});
</script>