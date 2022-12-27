import router from '@/router';

const usePaginationUrlParams = (params) => {
  const url = new URL(window.location.href);
  const urlParams = url.searchParams;
  const hasPageNumber = !!params._page;

  if (!hasPageNumber) {
    params._page = 1;
  }

  for (let key in params) {
    if (!hasPageNumber) {
      const value = urlParams.get(key);

      if (value) {
        params[key] = value;
        urlParams.set(key, value);
      } else {
        urlParams.set(key, params[key]);
      }
    } else {
      urlParams.set(key, params[key]);
    }
  }

  urlParams.delete('_limit');
  router.push(`${url.pathname}${url.search}`);

  return params;
}

export default usePaginationUrlParams;