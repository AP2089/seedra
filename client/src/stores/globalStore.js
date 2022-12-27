import { computed, ref } from 'vue';
import { defineStore, mapStores, setMapStoreSuffix } from 'pinia';
import useLocalStorage from '@/hooks/useLocalStorage';
import useMetaStore from '@/stores/metaStore';
import useHomeStore from '@/stores/homeStore';
import useBlogStore from '@/stores/blogStore';
import useArticleStore from '@/stores/articleStore';
import useAboutStore from '@/stores/aboutStore';
import usePrivacyStore from '@/stores/privacyStore';
import useTermsStore from '@/stores/termsStore';
import useContactsStore from '@/stores/contactsStore';
import useFavoritesStore from '@/stores/contactsStore';
import useCatalogStore from '@/stores/catalogStore';

const useGlobalStore = defineStore('globalStore', () => {
  setMapStoreSuffix('');

  const localStorage = useLocalStorage();
  const currencySymbol = ref('$');
  const cartAdded = ref(localStorage.getStorage().cartAdded);
  const likeAdded = ref(localStorage.getStorage().likeAdded);

  const stores = computed(() => ({
    ...mapStores(
      useMetaStore,
      useHomeStore,
      useBlogStore,
      useArticleStore,
      useAboutStore,
      usePrivacyStore,
      useTermsStore,
      useContactsStore,
      useFavoritesStore,
      useCatalogStore
    )
  }));

  const isLoading = computed(() => {
    const data = stores.value;
    const values = [];

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        values.push(data[key]().$state.isLoading);
      }
    }

    return values.includes(true);
  });

  const errors = computed(() => {
    const data = stores.value;
    const values = [];

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        values.push(data[key]().$state.error);
      }
    }

    return values.filter(v => !!v);
  });

  const cartChange = (id) => {
    localStorage.cartToggle(id);
    cartAdded.value = localStorage.getStorage().cartAdded;
  }
  
  const likeChange = (id) => {
    localStorage.likeToggle(id);
    likeAdded.value = localStorage.getStorage().likeAdded;
  }

  return {
    cartAdded,
    likeAdded,
    currencySymbol,
    isLoading,
    errors,
    cartChange,
    likeChange
  }
});

export default useGlobalStore;