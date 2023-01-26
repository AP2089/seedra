import { ref, computed } from 'vue';
import { defineStore, getActivePinia } from 'pinia';
import useLocalStorage from '@/hooks/useLocalStorage';

const useGlobalStore = defineStore('globalStore', () => {
  const storesActive = getActivePinia();
  const localStorage = useLocalStorage();
  const currencySymbol = ref('$');
  const cartAdded = ref(localStorage.getStorage().cartAdded);
  const likeAdded = ref(localStorage.getStorage().likeAdded);
  const cartAmount = ref(localStorage.getStorage().cartAmount);

  const isLoading = computed(() => {
    if (storesActive) {
      const data = storesActive.state.value;
      const values = [];

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          values.push(data[key].isLoading);
        }
      }
  
      return values.includes(true);
    }

    return false;
  });

  const errors = computed(() => {
    if (storesActive) {
      const data = storesActive.state.value;
      const values = [];

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          values.push(data[key].error);
        }
      }
  
      return values.filter(v => !!v);
    }

    return [];
  });

  const cartChange = (id) => {
    localStorage.cartToggle(id);
    cartAdded.value = localStorage.getStorage().cartAdded;
  }
  
  const likeChange = (id) => {
    localStorage.likeToggle(id);
    likeAdded.value = localStorage.getStorage().likeAdded;
  }

  const amountChange = (data) => {
    localStorage.cartAmountSet(data);
    cartAmount.value = localStorage.getStorage().cartAmount;
  }

  const amountRemove = (id) => {
    localStorage.cartAmountRemove(id);
    cartAmount.value = localStorage.getStorage().cartAmount;
  }

  const cartOrder = () => {
    localStorage.cartOrder();
    cartAdded.value = localStorage.getStorage().cartAdded;
    cartAmount.value = localStorage.getStorage().cartAmount;
  }

  return {
    cartAdded,
    likeAdded,
    cartAmount,
    currencySymbol,
    isLoading,
    errors,
    cartChange,
    likeChange,
    amountChange,
    amountRemove,
    cartOrder
  }
});

export default useGlobalStore;