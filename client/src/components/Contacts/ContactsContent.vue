<template>
  <div class="contacts__content">
    <div class="contacts__head">
      <div class="contacts__title">{{ title }}</div>
      <div class="contacts__description" v-if="description">{{ description }}</div>
    </div>
    <div class="contacts__foot">
      <a
        :href="`tel:${phone}`"
        class="contacts__link"
        v-if="phone"
      >
        <div class="contacts__box">
          <Sprite 
            name="phone"
            class="contacts__icon"
          />
        </div>
        {{ phone }}
      </a>

      <a
        :href="`mailto:${email}`"
        class="contacts__link"
        v-if="email"
      >
        <div class="contacts__box">
          <Sprite 
            name="email"
            class="contacts__icon"
          />
        </div>
        {{ email }}
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  'title',
  'description',
  'phone',
  'email'
]);
</script>

<style lang="scss" scoped>
.contacts {
  &__content {
    @include media('min', $viewport-post-sm) {
      display: flex;
      align-items: stretch;
      justify-content: flex-start;
      flex-direction: column;
      padding-right: 30px;
      width: 50%;
    }
    
    @include media('max', $viewport-sm) {
      margin-bottom: 30px;
    }
  }

  &__title {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 15px;

    @include media('min', $viewport-post-md) {
      font-size: 48px;
      max-width: 300px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 20px;
    }
  }

  &__description {
    font-weight: 300;
    margin-bottom: 15px;

    @include media('min', $viewport-post-md) {
      font-size: 16px;
      max-width: 300px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
    }
  }

  &__foot {
    @include media('min', $viewport-post-md) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      margin-top: auto;
    }
  }

  &__link {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    color: $color-extra;
    font-weight: 600;
    line-height: 1.4;
    transition: color .5s ease 0s;

    @include media('min', $viewport-post-md) {
      font-size: 24px;
      margin-bottom: 20px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
      margin: 0 10px 10px 0;
    }

    &:hover {
      text-decoration: none;
      color: $color-primary;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 15px;

    @include media('min', $viewport-post-md) {
      margin-right: 20px;
      width: 56px;
      height: 56px;
    }
    
    @include media('max', $viewport-md) {
      margin-right: 10px;
      width: 25px;
      height: 25px;
    }
  }

  &__icon {
    fill: $color-primary;

    @include media('min', $viewport-post-md) {
      width: 24px;
      height: 24px;
    }
    
    @include media('max', $viewport-md) {
      width: 15px;
      height: 15px;
    }
  }
}
</style>
