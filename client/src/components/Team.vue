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
  margin-bottom: 50px;

  &__title {
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    color: $color-global;
    text-align: center;
    margin-bottom: 50px;
  }

  &__list {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
  }

  &__item {
    display: flex;
    align-items: center;
    width: 25%;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 15px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
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
    font-size: 22px;
    line-height: 1.5;
  }

  &__caption {

  }
}
</style>