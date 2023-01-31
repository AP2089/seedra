<template>
  <div class="team">
    <div class="team__title" v-if="title">{{ title }}</div>
    <div class="team__list">
      <div
        class="team__item"
        v-for="item in items"
        :key="item.id"
      >
        <Picture
          :src="item.image"
          :webp="item.imageWebp"
          :alt="item.title"
          class="team__img"
        />
        <div class="team__name">{{ item.name }}</div>
        <div class="team__caption">{{ item.caption }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String
  },
  items: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.team {
  @include media('min', $viewport-post-md) {
    margin-bottom: 50px;
  }
  
  @include media('max', $viewport-md) {
    margin-bottom: 30px;
  }

  &__title {
    font-weight: 600;
    line-height: 1.5;
    color: $color-global;
    text-align: center;

    @include media('min', $viewport-post-md) {
      font-size: 36px;
      margin-bottom: 50px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 20px;
      margin-bottom: 30px;
    }
  }

  &__list {
    display: grid; 
    gap: 20px 20px; 
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;

    @include media('min', $viewport-post-sm) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    
    @include media('max', $viewport-sm) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  &__img {
    display: block;
    margin-bottom: 15px;
    overflow: hidden;
    max-width: 200px;
    border-radius: 50%;
  }

  &__name {
    font-weight: 600;
    line-height: 1.5;

    @include media('min', $viewport-post-md) {
      font-size: 22px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 15px;
    }
  }
}
</style>