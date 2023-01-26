import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from '@/axios';
import useFeatchEvent from '@/hooks/useFeatchEvent';

const useTermsStore = defineStore('termsStore', () => {
  const { isLoading, error, loading, unload, loaded, setMeta } = useFeatchEvent();
  const title = ref('');
  const content = ref('');

  const dataFeatch = async () => {
    try {
      loading();

      const { data } = await axios.get('/terms');

      setMeta(data.meta);
      title.value = data.title;
      content.value = data.content;
    } catch ({message}) {
      unload(message);
    } finally {
      loaded();
    }
  }

  return {
    title,
    content,
    isLoading,
    error,
    dataFeatch
  }
});

export default useTermsStore;