import useBrowserSupport from '@/hooks/useBrowserSupport';

const useImageFormat = (imageAny, imageWebp) => {
  const { hasWebp } = useBrowserSupport();

  return hasWebp ? imageWebp : imageAny;
}

export default useImageFormat;