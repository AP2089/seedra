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
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    padding-right: 30px;
    width: 50%;
  }

  &__title {
    font-weight: 600;
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 15px;
    max-width: 300px;
  }

  &__description {
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 15px;
    max-width: 300px;
  }

  &__foot {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    margin-top: auto;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    color: $color-extra;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.4;
    margin-bottom: 20px;
    transition: color .5s ease 0s;

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
    margin-right: 20px;
    width: 56px;
    height: 56px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: $color-primary;
  }
}
</style>
