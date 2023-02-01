import { ref, onMounted, onUnmounted } from 'vue';

const useDevice = () => {
  const isActive = ref(false);
  const isDesktop = ref(false);
  const isMobile = ref(false);

  const toggleIsActive = (value) => {
    isActive.value = value;
  }

  const viewportResize = () => {
    if (window.innerWidth > 992) {
      isActive.value = true;
      isDesktop.value = true;
      isMobile.value = false;
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
  });

  return {
    isActive,
    isDesktop,
    isMobile,
    toggleIsActive
  }
}

export default useDevice;