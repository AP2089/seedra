<template>
  <nav class="menu-social">
    <ul class="menu-social__list">
      <li
        v-for="item in items"
        class="menu-social__item"
      >
        <a
          :href="item.url"
          target="_blank"
          class="menu-social__link"
        >
          <Sprite 
            :name="item.name"
            class="menu-social__icon"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.menu-social {
  $rs: &;

  &__list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    margin: 0 8px 0 0;
    padding: 0;

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    display: block;
    text-decoration: none;
    transition: opacity .5s ease 0s;

    &:hover {
      text-decoration: none;
      
      #{$rs}__icon {
        fill: $color-primary;
      }
    }
  }

  &__icon {
    display: block;
    width: 24px;
    height: 24px;
    fill: $color-extra;
    transition: fill .5s ease 0s;
  }
}
</style>