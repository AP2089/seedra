import { ref } from 'vue';

const webpBrowserSupport = () => {
  const elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  } else {
    return false;
  }
}

const useBrowserSupport = () => {
  const hasWebp = ref(webpBrowserSupport());

  return {
    hasWebp: hasWebp.value
  }
}

export default useBrowserSupport;