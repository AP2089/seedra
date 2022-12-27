import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useHead } from 'unhead';
import { errorClearTimeout } from '@/config';
import axios from '@/axios';
import router from '@/router';
import debounce from '@/helpers/debounce';

const useArticleStore = defineStore('articleStore', () => {
  const title = ref('');
  const date = ref('');
  const content = ref('');
  const isLoading = ref(false);
  const error = ref('');

  const dataFeatch = async () => {
    try {
      isLoading.value = true;
      error.value = '';

      const { data } = await axios.get('/article', {
        params: {
          id: router.currentRoute.value.params.id
        }
      });

      useHead(data.meta);
      title.value = data.title;
      date.value = data.date;
      content.value = data.content;
    } catch ({message}) {
      error.value = message;

      debounce(() => {
        error.value = '';
      }, errorClearTimeout);
    } finally {
      isLoading.value = false;
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