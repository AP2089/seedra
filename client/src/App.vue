<template>
  <router-view></router-view>

  <Loader
    :isLoading="globalStore.isLoading"
  />

  <Notification
    v-for="error in globalStore.errors"
    :title="$t('error')"
    :text="error"
    type="error"
  />
</template>

<script setup>
import { onBeforeMount } from 'vue';
import useGlobalState from '@/stores/globalStore';
import Notification from '@/components/ui/Notification';
import useLocalStorage from '@/hooks/useLocalStorage';

const globalStore = useGlobalState();
const localStorage = useLocalStorage();

onBeforeMount(() => {
  localStorage.storageCreate();
});
</script>

<style lang="scss">
@import '@/styles/main.scss';
</style>
