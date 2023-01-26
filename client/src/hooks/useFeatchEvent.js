import { ref } from 'vue';
import { useHead } from 'unhead';
import debounce from '@/helpers/debounce';
import { messageClearTimeout } from '@/config';

const useFeatchEvent = () => { 
  const isLoading = ref(false);
  const isLoadingSearch = ref(false);
  const error = ref('');

  const loading = () => {
    isLoading.value = true;
    isLoadingSearch.value = true;
    error.value = '';
  }

  const unload = (message) => {
    error.value = message;

    debounce(() => {
      error.value = '';
    }, messageClearTimeout);
  }

  const loaded = () => {
    isLoading.value = false;
    isLoadingSearch.value = false;
  }

  const setMeta = (meta) => {
    useHead(meta);
  }

  return {
    isLoading,
    isLoadingSearch,
    error,
    loading,
    unload,
    loaded,
    setMeta
  }
}

export default useFeatchEvent;