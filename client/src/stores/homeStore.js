import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from '@/axios';
import { errorClearTimeout } from '@/config';
import { useHead } from 'unhead';
import debounce from '@/helpers/debounce';

const useHomeStore = defineStore('homeStore', () => {
  const products = ref([]);
  const blog = ref([]);
  const isLoading = ref(false);
  const error = ref('');
  
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
      isLoading.value = true;
      error.value = '';

      const { data } = await axios.get('/home');

      useHead(data.meta);
      specification.value = data.specification;
      reviews.value = data.reviews;
      bannerMain.value = data.bannerMain;
      bannerExtra.value = data.bannerExtra;
      products.value = data.products;
      blog.value = data.blog;
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