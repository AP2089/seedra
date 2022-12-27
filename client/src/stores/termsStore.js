import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useHead } from 'unhead';
import { errorClearTimeout } from '@/config';
import axios from '@/axios';
import debounce from '@/helpers/debounce';

const useTermsStore = defineStore('termsStore', () => {
  const title = ref('');
  const content = ref('');
  const isLoading = ref(false);
  const error = ref('');

  const dataFeatch = async () => {
    try {
      isLoading.value = true;
      error.value = '';

      const { data } = await axios.get('/terms');

      useHead(data.meta);
      title.value = data.title;
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
    content,
    isLoading,
    error,
    dataFeatch
  }
});

export default useTermsStore;