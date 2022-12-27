<template>
  <div class="date-base">
    <Sprite
      name="date"
      class="date-base__icon"
    />
    {{ date }}
  </div>
</template>

<script setup>
const props = defineProps({
  date: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.date-base {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 20px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: $color-extra;

  &__icon {
    flex: 0 0 24px;
    height: 24px;
    margin-right: 5px;
    fill: $color-extra;
  }
}
</style>