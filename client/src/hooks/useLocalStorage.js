const useLocalStorage = () => {
  const NAME = '$storage';

  const getStorage = () => {
    const localStores = JSON.parse(localStorage.getItem(NAME));

    if (localStores) {
      return localStores;
    } else {
      const data = {
        cartAdded: [],
        likeAdded: [],
        cartAmount: []
      }

      setStorage(data);
      return data;
    }
  }

  const setStorage = (value) => {
    localStorage.setItem(NAME, JSON.stringify(value));
  }

  const getCollection = (array, val) => {
    const filtered = array.filter(id => id !== val);
    const data = array.includes(val) ? filtered : [...filtered, val];

    return data;
  }

  const cartToggle = (id) => {
    const storage = getStorage();
    const collection = getCollection(storage.cartAdded, id);

    storage.cartAdded = collection;
    setStorage(storage);
  }

  const likeToggle = (id) => {
    const storage = getStorage();
    const collection = getCollection(storage.likeAdded, id);

    storage.likeAdded = collection;
    setStorage(storage);
  }

  const cartAmountSet = (data) => {
    const storage = getStorage();

    if (storage.cartAmount.filter(e => e.id === data.id).length > 0) {
      storage.cartAmount.forEach(e => e.id === data.id && (e.value = data.value));
    } else {
      storage.cartAmount.push(data);
    }

    setStorage(storage);
  }

  const cartAmountRemove = (id) => {
    const storage = getStorage();

    storage.cartAmount = storage.cartAmount.filter(e => e.id !== id);

    setStorage(storage);
  }

  const cartOrder = () => {
    const storage = getStorage();

    storage.cartAdded = [];
    storage.cartAmount = [];

    setStorage(storage);
  }

  return {
    getStorage,
    setStorage,
    cartToggle,
    likeToggle,
    cartAmountSet,
    cartAmountRemove,
    cartOrder
  }
}

export default useLocalStorage;