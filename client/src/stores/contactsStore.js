import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useHead } from 'unhead';
import { errorClearTimeout } from '@/config';
import axios from '@/axios';
import debounce from '@/helpers/debounce';

const useContactsStore = defineStore('contactsStore', () => {
  const title = ref('');
  const description = ref('');
  const phone = ref('');
  const email = ref('');
  const isLoading = ref(false);
  const error = ref('');
  const message = ref('');

  const dataFeatch = async () => {
    try {
      isLoading.value = true;
      error.value = '';

      const { data } = await axios.get('/contacts');

      useHead(data.meta);
      title.value = data.title;
      description.value = data.description;
      phone.value = data.phone;
      email.value = data.email;
    } catch ({message}) {
      error.value = message;

      debounce(() => {
        error.value = '';
      }, errorClearTimeout);
    } finally {
      isLoading.value = false;
    }
  }

  const formSubmit = async (formData) => {
    try {
      isLoading.value = true;
      error.value = '';

      const { data } = await axios.patch('/message', {
        data: formData
      });

      message.value = data.message;

      debounce(() => {
        message.value = '';
      }, errorClearTimeout);
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