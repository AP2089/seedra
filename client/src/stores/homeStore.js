import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from '@/axios';
import useFeatchEvent from '@/hooks/useFeatchEvent';

const useHomeStore = defineStore('homeStore', () => {
  const { isLoading, error, loading, unload, loaded, setMeta } = useFeatchEvent();
  const products = ref([]);
  const blog = ref([]);
  
  const bannerMain = ref({
    title: '',
    description: '',
    price: '',
    oldPrice: '',
    image: '',
    imageWebp: '',
    url: ''
  });

  const bannerExtra = ref({
    title: '',
    description: ''
  });

  const reviews = ref({
    title: '',
    items: []
  });

  const specification = ref({
    title: '',
    image: '',
    imageWebp: '',
    description: ''
  });

  const dataFeatch = async () => {
    try {
      loading();

      const { data } = await axios.get('/home');

      setMeta(data.meta);
      specification.value = data.specification;
      reviews.value = data.reviews;
      bannerMain.value = data.bannerMain;
      bannerExtra.value = data.bannerExtra;
      products.value = data.products;
      blog.value = data.blog;
    } catch ({message}) {
      unload(message);
    } finally {
      loaded();
    }
  }

  return {
    specification,
    reviews,
    bannerMain,
    bannerExtra,
    products,
    blog,
    isLoading,
    error,
    dataFeatch
  }
});

export default useHomeStore;