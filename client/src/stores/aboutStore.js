import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from '@/axios';
import useFeatchEvent from '@/hooks/useFeatchEvent';

const useAboutStore = defineStore('aboutStore', () => {
  const { isLoading, error, loading, unload, loaded, setMeta } = useFeatchEvent();
  const title = ref('');
  const description = ref('');

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
      loading();

      const { data } = await axios.get('/about');

      setMeta(data.meta);
      title.value = data.title;
      description.value = data.description;
      specification.value = data.specification;
      story.value = data.story;
      team.value = data.team;
    } catch ({message}) {
      unload(message);
    } finally {
      loaded();
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