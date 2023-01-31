<template>
  <div class="blog">
    <div class="blog__center center">
      <BlogHead
        v-if="title || moreUrl"
        :title="title"
        :moreUrl="moreUrl"
      />

      <BlogList
        v-if="items.length"
        :items="items"
      />
      
      <Message
        v-else
        :text="$t('no.items')"
      />

      <Pagination
        v-if="paginationPageCount"
        :pageCount="paginationPageCount"
        @change="$emit('paginationChange', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import BlogHead from '@/components/Blog/BlogHead';
import BlogList from '@/components/Blog/BlogList';
import Pagination from '@/components/Pagination';
import Message from '@/components/ui/Message';

const props = defineProps({
  title: {
    type: String
  },
  moreUrl: {
    type: String
  },
  items: {
    type: Array,
    required: true
  },
  paginationPageCount: {
    type: Number
  }
});
</script>

<style lang="scss" scoped>
.blog {
  @include media('min', $viewport-post-md) {
    margin-bottom: 50px;
  }
  
  @include media('max', $viewport-md) {
    margin-bottom: 30px;
  }
}
</style>