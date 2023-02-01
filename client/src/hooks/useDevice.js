import { ref, onMounted, onUnmounted } from 'vue';

const useDevice = (isFixed = false) => {
  const isActive = ref(false);
  const isDesktop = ref(false);
  const isMobile = ref(false);

  const fixedClass = 'body-mobile-fixed';

  const toggleIsActive = (value) => {
    isActive.value = value;

    if (isFixed) {
      if (value) {
        document.body.classList.add(fixedClass);
      } else {
        document.body.classList.remove(fixedClass);
      }
    }
  }

  const viewportResize = () => {
    if (window.innerWidth > 992) {
      isActive.value = true;
      isDesktop.value = true;
      isMobile.value = false;
      document.body.classList.remove(fixedClass);
    } else {
      if (isActive.value && isDesktop.value) {
        isActive.value = false;
      }

      isDesktop.value = false;
      isMobile.value = true;
    }
  }
  
  onMounted(() => {
    viewportResize();
    window.addEventListener('resize', viewportResize);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', viewportResize);
    document.body.classList.remove(fixedClass);
  });

  return {
    isActive,
    isDesktop,
    isMobile,
    toggleIsActive
  }
}

export default useDevice;