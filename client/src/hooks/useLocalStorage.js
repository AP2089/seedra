const useLocalStorage = () => {
  const NAME = '$storage';

  const getStorage = () => {
    return JSON.parse(localStorage.getItem(NAME)); 
  }

  const setStorage = (value) => {
    localStorage.setItem(NAME, JSON.stringify(value));
  }

  const storageCreate = () => {
    if (!getStorage()) {
      setStorage({
        cartAdded: [],
        likeAdded: [],
        cartCalcs: []
      });
    }
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

  return {
    getStorage,
    setStorage,
    storageCreate,
    cartToggle,
    likeToggle,
  }
}

export default useLocalStorage;