import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { filterFetchTimeout } from '@/config';
import axios from '@/axios';
import debounce from '@/helpers/debounce';
import useFeatchItems from '@/hooks/useFeatchItems';

const useCatalogStore = defineStore('catalogStore', () => {
  const { isLoading, error, pageCount, loading, unload, loaded, setOptions, setUrlParams } = useFeatchItems();
  const items = ref([]);
  const filter = ref([]);
  const priceTo = ref(null);

  const params = ref({
    _page: null,
    category: [],
    seedType: [],
    price_lte: null
  });

  const dataFeatch = async (pageNumber = null) => {
    try {
      loading();
      params.value._page = pageNumber;

      if (priceTo.value === params.value.price_lte) {
        params.value.price_lte = null;
      }

      const setParams = setUrlParams(params.value);

      filterSetCheck(setParams);

      const { data, headers } = await axios.get('/catalog', {
        params: setParams
      });

      items.value = data.items;
      setOptions(data.meta, headers['x-total-count']);

      if (!params.value._page) {
        filter.value = data.filter;
        priceTo.value = filter.value.reduce((a, e) => e.group === 'price_lte' && (e.to), null);
        filterSetCheck(setParams);
        filterSetInitialOptions(setParams);
      }
    } catch ({message}) {
      unload(message);
    } finally {
      loaded();
    }
  }
  
  const filterSetCheck = (data) => {
    filter.value.forEach(e => {
      return data.hasOwnProperty(e.group) ? e.selected = true : e.selected = false;
    });
  }

  const filterSetInitialOptions = (data) => {
    filter.value.forEach(element => {
      const queryParam = data[element.group];

      if (queryParam) {
        params.value[element.group] = queryParam;

        if (element.type === 'checkbox') {
          element.options.forEach(e => queryParam.includes(e.id) && (e.checked = true));
        } else if (element.type === 'range') {
          element.to = queryParam;
        }
      }
    });
  }

  const filterChange = (data) => {
    if (data.type === 'checkbox') {
      const array = params.value[data.group];
      const value = Number(data.value);

      params.value[data.group] = array.includes(value) ? array.filter(i => i !== value) : [...array, value];
    } else if (data.type === 'range') {
      params.value[data.group] = Number(data.value);
    }

    debounce(() => {
      dataFeatch(1);
    }, filterFetchTimeout);
  }

  return {
    items,
    filter,
    pageCount,
    isLoading,
    error,
    dataFeatch,
    filterChange
  }
});

export default useCatalogStore;