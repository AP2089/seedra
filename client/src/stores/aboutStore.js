import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useHead } from 'unhead';
import { errorClearTimeout } from '@/config';
import axios from '@/axios';
import debounce from '@/helpers/debounce';

const useAboutStore = defineStore('aboutStore', () => {
  const title = ref('');
  const description = ref('');
  const isLoading = ref(false);
  const error = ref('');

  const specification = ref({
    title: '',
    image: '',
    imageWebp: '',
    description: ''
  });

  const story = ref({
    title: '',
    description: '',
    image: '',
    imageWebp: ''
  });

  const team = ref({
    title: '',
    items: []
  });

  const dataFeatch = async () => {
    try {
      isLoading.value = true;
      error.value = '';

      const { data } = await axios.get('/about');

      useHead(data.meta);
      title.value = data.title;
      description.value = data.description;
      specification.value = data.specification;
      story.value = data.story;
      team.value = data.team;
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
    title,
    description,
    specification,
    story,
    team,
    isLoading,
    error,
    dataFeatch
  }
});

export default useAboutStore;