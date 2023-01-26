import { ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { searchFetchTimeout } from '@/config';
import debounce from '@/helpers/debounce';
import axios from '@/axios';
import useFeatchEvent from '@/hooks/useFeatchEvent';

const useSearchStore = defineStore('searchStore', () => {
  const { isLoadingSearch, error, loading, unload, loaded } = useFeatchEvent();
  const items = ref([]);
  const phrase = ref('');

  const dataFeatch = async () => {
    try {
      if (phrase.value.length <= 1) return;

      loading();

      const { data } = await axios.get('/search', {
        params: {
          q: phrase.value,
          _limit: 20
        }
      });

      items.value = data;
    } catch ({message}) {
      unload(message);
    } finally {
      loaded();
    }
  }

  watch(phrase, () => {
    debounce(() => {
      dataFeatch();
    }, searchFetchTimeout);
  });

  const choos = () => {
    phrase.value = '';
    items.value = [];
  }

  return {
    items,
    phrase,
    isLoadingSearch,
    error,
    dataFeatch,
    choos
  }
});

export default useSearchStore;