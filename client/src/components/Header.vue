<template>
  <header class="header">
    <div class="header__center center">
      <div class="header__wrap">
        <router-link to="/" class="header__logo">
          <img src="@/images/logo.svg" alt="Seedra" class="header__logo-img" />
        </router-link>
        <div class="header__panel">
          <MenuMain
            :items="metaStore.menuMain"
            class="header__menu-main"
          />

          <MenuSocial
            :items="metaStore.menuSocial"
            class="header__menu-social"
          />

          <SearchMain
            class="header__search-main"
            v-model="searchVal"
          />

          <div class="header__services">
            <ButtonService
              url="/favorites"
              icon="like"
              :count="globalStore.likeAdded.length"
              class="header__service"
            />

            <ButtonService
              url="/"
              icon="cart"
              :count="globalStore.cartAdded.length"
              class="header__service"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import useMetaStore from '@/stores/metaStore';
import MenuMain from '@/components/MenuMain';
import MenuSocial from '@/components/MenuSocial';
import SearchMain from '@/components/SearchMain';
import ButtonService from '@/components/ui/ButtonService';
import useGlobalStore from '@/stores/globalStore';

const searchVal = ref('');
const metaStore = useMetaStore();
const globalStore = useGlobalStore();
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(207, 207, 207, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
  }

  &__logo {
    flex: 0 0 97px;
    text-decoration: none;
    opacity: 1;
    transition: opacity .5s ease 0s;

    &:hover {
      text-decoration: none;
      opacity: .7;
    }
  }

  &__logo-img {
    display: block;
    width: 97px;
    height: 21px;
  }

  &__panel {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__menu-main {
    margin-right: 45px;
  }

  &__menu-social {
    margin-right: 15px;
  }

  &__search-main {
    width: 285px;
    margin-right: 15px;
  }

  &__services {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__service {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>