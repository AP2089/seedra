<template>
  <div class="wrap">
    <Header />

    <div class="middle">
      <slot></slot>
    </div>
    
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import useMetaStore from '@/stores/metaStore';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const metaStore = useMetaStore();

onMounted(() => {
  metaStore.itemsFeatch();
});
</script>