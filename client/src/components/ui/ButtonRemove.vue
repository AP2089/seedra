<template>
  <router-link
    v-if="url"
    :to="url"
    class="btn-remove"
  >
    <Sprite
      name="close"
      class="btn-remove__icon"
    />
  </router-link>

  <button
    v-else
    :type="type"
    class="btn-remove"
  >
    <Sprite
      name="close"
      class="btn-remove__icon"
    />
  </button>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String
  },
  type: {
    type: String,
    default: 'button'
  }
});
</script>

<style lang="scss" scoped>
.btn-remove {
  display: block;
  width: 22px;
  height: 22px;
  background-color: $color-danger;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  padding: 0;
  margin: 0;
  transform: scale(1);
  transition: transform .5s ease 0s;

  &__icon {
    display: block;
    width: 7px;
    height: 7px;
    fill: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>