import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useHead } from 'unhead';
import { errorClearTimeout } from '@/config';
import axios from '@/axios';
import debounce from '@/helpers/debounce';
import usePaginationUrlParams from '@/hooks/usePaginationUrlParams';

const useCatalogStore = defineStore('catalogStore', () => {
  const items = ref([]);
  const filter = ref([]);
  const totalCount = ref(0);
  const limit = ref(9);
  const isLoading = ref(false);
  const error = ref('');

  const dataFeatch = async (pageNumber) => {
    try {
      isLoading.value = true;
      error.value = '';

      const params = usePaginationUrlParams({
        _page: pageNumber,
        _limit: limit.value
      });

      const { data, headers } = await axios.get('/catalog', {
        params
      });

      useHead(data.meta);
      items.value = data.items;
      filter.value = data.filter;
      totalCount.value =  Number(headers['x-total-count']);
    } catch ({message}) {
      error.value = message;

      debounce(() => {
        error.value = '';
      }, errorClearTimeout);
    } finally {
      isLoading.value = false;
    }
  }

  const pageCount = computed(() => {
    return Math.ceil(totalCount.value / limit.value);
  });

  return {
    items,
    filter,
    pageCount,
    isLoading,
    error,
    dataFeatch
  }
});

export default useCatalogStore;