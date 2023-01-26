import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from '@/axios';
import useFeatchItems from '@/hooks/useFeatchItems';

const useBlogStore = defineStore('blogStore', () => {
  const { isLoading, error, pageCount, loading, unload, loaded, setOptions, setUrlParams } = useFeatchItems();
  const title = ref('');
  const description = ref('');
  const items = ref([]);

  const dataFeatch = async (pageNumber = null) => {
    try {
      loading();

      const setParams = setUrlParams({
        _page: pageNumber
      });

      const { data, headers } = await axios.get('/blog', {
        params: setParams
      });

      setOptions(data.meta, headers['x-total-count']);
      title.value = data.title;
      description.value = data.description;
      items.value = data.items;
    } catch ({message}) {
      unload(message);
    } finally {
      loaded();
    }
  }

  return {
    title,
    description,
    items,
    pageCount,
    isLoading,
    error,
    dataFeatch
  }
});

export default useBlogStore;