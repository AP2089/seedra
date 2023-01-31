<template>
  <div class="story">
    <div class="story__media">
      <Picture
        :src="image"
        :webp="imageWebp"
        :alt="title"
        class="story__img"
      />
    </div>
    <div class="story__content">
      <div class="story__title">{{ title }}</div>
      <div class="story__description" v-html="description"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imageWebp: {
    type: String
  }
});
</script>

<style lang="scss" scoped>
.story {
  @include media('min', $viewport-post-md) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 50px;
  }
  
  @include media('max', $viewport-md) {
    margin-bottom: 30px;
  }

  &__media {
    @include media('min', $viewport-post-md) {
      flex: 0 0 49%;
    }
    
    @include media('max', $viewport-md) {
      margin-bottom: 15px;
    }
  }

  &__content {
    @include media('min', $viewport-post-md) {
      flex: 1 0 0;
      padding: 65px 0 0 65px;
    }
  }

  &__img {
    display: block;
    overflow: hidden;

    @include media('min', $viewport-post-md) {
      border-radius: 28px;
      max-width: 540px;
    }
    
    @include media('max', $viewport-md) {
      border-radius: 18px;
      max-width: 300px;
      margin: 0 auto;
    }
  }

  &__title {
    font-weight: 600;
    line-height: 1.5;
    color: $color-global;
    margin-bottom: 10px;

    @include media('min', $viewport-post-md) {
      font-size: 36px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 20px;
    }
  }

  &__description {
    font-style: normal;
    font-weight: 300;
    line-height: 1.7;
    color: $color-global;

    @include media('min', $viewport-post-md) {
      font-size: 16px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
    }
  }
}
</style>