import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useHead } from 'unhead';
import { errorClearTimeout } from '@/config';
import axios from '@/axios';
import debounce from '@/helpers/debounce';
import useGlobalStore from '@/stores/globalStore';

const useFavoritesStore = defineStore('favoritesStore', () => {
  const globalStore = useGlobalStore();
  const title = ref('');
  const initialItems = ref([]);
  const isLoading = ref(false);
  const error = ref('');

  const dataFeatch = async () => {
    try {
      isLoading.value = true;
      error.value = '';

      const { data } = await axios.get('/favorites', {
        params: {
          id: globalStore.likeAdded
        }
      });

      useHead(data.meta);
      title.value = data.title;
      initialItems.value = data.items;
    } catch ({message}) {
      error.value = message;

      debounce(() => {
        error.value = '';
      }, errorClearTimeout);
    } finally {
      isLoading.value = false;
    }
  }

  const items = computed(() => {
    return initialItems.value.filter(item => {
      return globalStore.likeAdded.includes(item.id);
    });
  });

  return {
    title,
    items,
    isLoading,
    error,
    dataFeatch
  }
});

export default useFavoritesStore;