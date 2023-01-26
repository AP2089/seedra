import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from '@/axios';
import useFeatchEvent from '@/hooks/useFeatchEvent';

const useMetaStore = defineStore('metaStore', () => {
  const { isLoading, error, loading, unload, loaded } = useFeatchEvent();
  const menuMain = ref([]);
  const menuSocial = ref([]);
  const menuFootLeft = ref([]);
  const menuFootRight = ref([]);

  const itemsFeatch = async () => {
    try {
      loading();

      const {data} = await axios.get('/meta');

      menuMain.value = data.menuMain;
      menuSocial.value = data.menuSocial;
      menuFootLeft.value = data.menuFootLeft;
      menuFootRight.value = data.menuFootRight;
    } catch ({message}) {
      unload(message);
    } finally {
      loaded();
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