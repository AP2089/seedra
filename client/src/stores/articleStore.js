import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from '@/axios';
import router from '@/router';
import useFeatchEvent from '@/hooks/useFeatchEvent';

const useArticleStore = defineStore('articleStore', () => {
  const { isLoading, error, loading, unload, loaded, setMeta } = useFeatchEvent();
  const title = ref('');
  const date = ref('');
  const content = ref('');

  const dataFeatch = async () => {
    try {
      loading();

      const { data } = await axios.get('/article', {
        params: {
          id: router.currentRoute.value.params.id
        }
      });

      setMeta(data.meta);
      title.value = data.title;
      date.value = data.date;
      content.value = data.content;
    } catch ({message}) {
      unload(message);
    } finally {
      loaded();
    }
  }

  return {
    title,
    date,
    content,
    isLoading,
    error,
    dataFeatch
  }
});

export default useArticleStore;