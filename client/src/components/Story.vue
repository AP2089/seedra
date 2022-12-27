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
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 50px;

  &__media {
    flex: 0 0 49%;
  }

  &__content {
    flex: 1 0 0;
    padding: 65px 0 0 65px;
  }

  &__img {
    display: block;
    overflow: hidden;
    border-radius: 28px;
    max-width: 540px;
  }

  &__title {
    font-weight: 600;
    font-size: 36px;
    line-height: 1.5;
    color: $color-global;
    margin-bottom: 10px;
  }

  &__description {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.7;
    color: $color-global;
  }
}
</style>