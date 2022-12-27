import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from '@/axios';
import debounce from '@/helpers/debounce';

const useMetaStore = defineStore('metaStore', () => {
  const isLoading = ref(false);
  const error = ref('');
  const menuMain = ref([]);
  const menuSocial = ref([]);
  const menuFootLeft = ref([]);
  const menuFootRight = ref([]);

  const itemsFeatch = async () => {
    try {
      isLoading.value = true;
      error.value = '';

      const {data} = await axios.get('/meta');

      menuMain.value = data.menuMain;
      menuSocial.value = data.menuSocial;
      menuFootLeft.value = data.menuFootLeft;
      menuFootRight.value = data.menuFootRight;
    } catch ({message}) {
      error.value = message;

      debounce(() => {
        error.value = '';
      }, 3000);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    menuMain,
    menuSocial,
    menuFootLeft,
    menuFootRight,
    isLoading,
    error,
    itemsFeatch
  }
});

export default useMetaStore;