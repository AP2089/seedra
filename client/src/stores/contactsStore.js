import { ref } from 'vue';
import { defineStore } from 'pinia';
import { messageClearTimeout } from '@/config';
import axios from '@/axios';
import debounce from '@/helpers/debounce';
import useFeatchEvent from '@/hooks/useFeatchEvent';

const useContactsStore = defineStore('contactsStore', () => {
  const { isLoading, error, loading, unload, loaded, setMeta } = useFeatchEvent();
  const title = ref('');
  const description = ref('');
  const phone = ref('');
  const email = ref('');
  const message = ref('');

  const dataFeatch = async () => {
    try {
      loading();

      const { data } = await axios.get('/contacts');

      setMeta(data.meta);
      title.value = data.title;
      description.value = data.description;
      phone.value = data.phone;
      email.value = data.email;
    } catch ({message}) {
      unload();
    } finally {
      loaded();
    }
  }

  const formSubmit = async (formData) => {
    try {
      loading();

      const { data } = await axios.patch('/message', {
        data: formData
      });

      message.value = data.message;

      debounce(() => {
        message.value = '';
      }, messageClearTimeout);
    } catch ({message}) {
      unload(message);
    } finally {
      loaded();
    }
  }

  return {
    title,
    description,
    phone,
    email,
    isLoading,
    error,
    message,
    dataFeatch,
    formSubmit
  }
});

export default useContactsStore;