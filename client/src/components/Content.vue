<template>
  <div class="center">
    <DateBase
      v-if="date"
      :date="date"
    />

    <div class="content" v-html="html"></div>
  </div>
</template>

<script setup>
import DateBase from '@/components/ui/DateBase';

const props = defineProps({
  date: {
    type: String
  },
  html: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss">
.content {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.6;
  color: $color-global;
  margin-bottom: 50px;
}

.img-center {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.img-left {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.img-right {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
</style>