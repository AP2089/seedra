import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from '@/axios';
import router from '@/router';
import useFeatchEvent from '@/hooks/useFeatchEvent';

const useProductStore = defineStore('productStore', () => {
  const { isLoading, error, loading, unload, loaded, setMeta } = useFeatchEvent();
  const id = ref(null);
  const title = ref('');
  const price = ref(null);
  const priceOld = ref(null);
  const description = ref('');
  const report = ref('');
  const options = ref({});
  const gallery = ref([]);
  const related = ref([]);

  const dataFeatch = async () => {
    try {
      loading();

      const { data } = await axios.get('/product', {
        params: {
          id: router.currentRoute.value.params.id
        }
      });

      setMeta(data.meta);
      id.value = data.id;
      title.value = data.title;
      price.value = data.price;
      priceOld.value = data.priceOld;
      description.value = data.description;
      report.value = data.report;
      options.value = data.options;
      gallery.value = data.gallery;
      related.value = data.related;
    } catch ({message}) {
      unload(message);
    } finally {
      loaded();
    }
  }

  return {
    id,
    title,
    price,
    priceOld,
    description,
    report,
    options,
    gallery,
    related,
    isLoading,
    error,
    dataFeatch
  }
});

export default useProductStore;