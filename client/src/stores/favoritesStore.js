import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from '@/axios';
import useFeatchItems from '@/hooks/useFeatchItems';
import useGlobalStore from '@/stores/globalStore';

const useFavoritesStore = defineStore('favoritesStore', () => {
  const { isLoading, error, pageCount, loading, unload, loaded, setOptions, setUrlParams } = useFeatchItems();
  const globalStore = useGlobalStore();
  const title = ref('');
  const initialItems = ref([]);

  const dataFeatch = async (pageNumber = null) => {
    try {
      if (globalStore.likeAdded.length === 0) return;

      loading();

      const setParams = setUrlParams({
        _page: pageNumber
      });

      const { data, headers } = await axios.get('/favorites', {
        params: {
          ...setParams,
          id: globalStore.likeAdded
        }
      });

      setOptions(data.meta, headers['x-total-count']);
      title.value = data.title;
      initialItems.value = data.items;
    } catch ({message}) {
      unload(message);
    } finally {
      loaded();
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
    pageCount,
    dataFeatch
  }
});

export default useFavoritesStore;