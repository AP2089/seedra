import { ref } from 'vue';
import { defineStore } from 'pinia';
import { messageClearTimeout } from '@/config';
import axios from '@/axios';
import debounce from '@/helpers/debounce';
import useFeatchItems from '@/hooks/useFeatchItems';
import useGlobalStore from '@/stores/globalStore';

const useCartStore = defineStore('cartStore', () => {
  const { isLoading, error, pageCount, loading, unload, loaded, setOptions, setUrlParams } = useFeatchItems();
  const globalStore = useGlobalStore();
  const items = ref([]);
  const messageSuccess = ref('');

  const dataFeatch = async (pageNumber = null) => {
    try {
      if (globalStore.cartAdded.length === 0) return;
      
      loading();

      const setParams = setUrlParams({
        _page: pageNumber
      });
      
      const { data, headers } = await axios.get('/cart', {
        params: {
          ...setParams,
          id: globalStore.cartAdded
        }
      });

      setOptions(data.meta, headers['x-total-count']);

      items.value = data.items.map(element => {
        const cartAmountData = globalStore.cartAmount.filter(e => e.id === element.id);

        const result = {
          ...element,
          priceTotal: element.price,
          amount: 1
        }

        if (cartAmountData.length > 0) {
          const cartAmountVal = cartAmountData[0].value;

          result.priceTotal = element.price * cartAmountVal;
          result.amount = cartAmountVal;
        }

        return result;
      });
    } catch ({message}) {
      unload(message);
    } finally {
      loaded();
    }
  }

  const amountChange = (data) => {
    items.value.map(element => {
      if (element.id === data.id) {
        element.priceTotal = element.price * data.value;
      }

      return element;
    });

    globalStore.amountChange(data);
  }

  const remove = (id) => {
    items.value = items.value.filter(e => e.id !== id);
    globalStore.cartChange(id);
    globalStore.amountRemove(id);
  }

  const formSubmit = async (formData) => {
    try {
      loading();

      const params = {
        ...formData,
        items: items.value.reduce((acc, element) => {
          acc.push({
            id: element.id,
            amount: element.amount
          });

          return acc;
        }, [])
      }
      
      const { data } = await axios.get('/order', {
        params
      });

      messageSuccess.value = data.message;
      items.value = [];
      globalStore.cartOrder();

      debounce(() => {
        messageSuccess.value = '';
      }, messageClearTimeout);
    } catch ({message}) {
      unload(message);
    } finally {
      loaded();
    }
  }

  return {
    items,
    pageCount,
    messageSuccess,
    isLoading,
    error,
    dataFeatch,
    amountChange,
    remove,
    formSubmit
  }
});

export default useCartStore;