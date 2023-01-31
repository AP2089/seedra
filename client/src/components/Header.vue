<template>
  <header class="header">
    <div class="header__center center">
      <div class="header__wrap">
        <router-link to="/" class="header__logo">
          <img src="@/images/logo.svg" alt="Seedra" class="header__logo-img" />
        </router-link>
        <div
          :class="headerPanelClasses"
        >
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
            v-model="searchStore.phrase"
            :items="searchStore.items"
            :isLoading="searchStore.isLoadingSearch"
            @choos="searchStore.choos"
          />
        </div>

        <div class="header__services">
          <ButtonService
            url="/favorites"
            icon="like"
            :count="globalStore.likeAdded.length"
            class="header__service"
          />

          <ButtonService
            url="/cart"
            icon="cart"
            :count="globalStore.cartAdded.length"
            class="header__service"
          />
        </div>

        <ButtonHamburger
          :isActive="mobileMenuIsActive"
          class="header__btn-menu"
          @change="mobileMenuChange"
        />
      </div>
    </div>
  </header>

  <div 
    :class="mobileMenuBgClasses"
    @click="mobileMenuChange(false)"
  ></div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import useMetaStore from '@/stores/metaStore';
import MenuMain from '@/components/MenuMain';
import MenuSocial from '@/components/MenuSocial';
import SearchMain from '@/components/SearchMain';
import ButtonService from '@/components/ui/ButtonService';
import ButtonHamburger from '@/components/ui/ButtonHamburger';
import useGlobalStore from '@/stores/globalStore';
import useSearchStore from '@/stores/searchStore';

const metaStore = useMetaStore();
const globalStore = useGlobalStore();
const searchStore = useSearchStore();

const mobileMenuIsActive = ref(false);

const mobileMenuChange = (data) => {
  mobileMenuIsActive.value = data;

  if (data) {
    document.body.classList.add('body-mobile-fixed');
  } else {
    document.body.classList.remove('body-mobile-fixed');
  }
}

const headerPanelClasses = computed(() => ([
  'header__panel',
  { 'active': mobileMenuIsActive.value }
]));

const mobileMenuBgClasses = computed(() => ([
  'mobile-menu-bg',
  { 'active': mobileMenuIsActive.value }
]));

onMounted(() => {
  document.body.classList.remove('body-mobile-fixed');
});
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
    justify-content: flex-end;

    @include media('min', $viewport-post-md) {
      height: 72px;
    }
    
    @include media('max', $viewport-md) {
      height: 60px;
    }
  }

  &__logo {
    flex: 0 0 97px;
    text-decoration: none;
    opacity: 1;
    margin-right: auto;
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

    @include media('min', $viewport-post-md) {
      align-items: center;
      justify-content: flex-end;
      padding-left: 10px;

    }
    
    @include media('max', $viewport-md) {
      width: 0;
      height: 0;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      background-color: #FFFFFF;
      padding: 0 15px;
      position: fixed;
      top: 60px;
      right: 0;
      z-index: 1;
      opacity: 0;
      overflow: hidden;
      transition: opacity .5s ease 0s, width 0s ease .5s, height 0s ease .5s;

      &.active {
        width: 300px;
        height: 100%;
        opacity: 1;
        overflow-x: hidden;
        overflow-y: auto;
        transition: opacity .5s ease 0s, width 0s ease 0s, height 0s ease 0s;
      }
    }
  }

  &__menu-main {
    @include media('min', $viewport-post-md) {
      margin-right: 45px;
    }
    
    @include media('max', $viewport-md) {
      width: 100%;
      order: 3;
    }
  }

  &__menu-social {
    @include media('min', $viewport-post-md) {
      margin-right: 15px;
    }
    
    @include media('max', $viewport-md) {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      order: 2;
    }
  }

  &__search-main {
    @include media('min', $viewport-post-md) {
      width: 285px;
      margin-right: 15px;
    }
    
    @include media('max', $viewport-md) {
      width: 100%;
      order: 1;
      margin-bottom: 5px;
    }
  }

  &__services {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @include media('max', $viewport-md) {
      margin-right: 20px;
    }
  }

  &__service {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__btn-menu {
    @include media('min', $viewport-post-md) {
      display: none;
    }
  }
}

.mobile-menu-bg {
  @include media('min', $viewport-post-md) {
    display: none;
  }
  
  @include media('max', $viewport-md) {
    width: 0;
    height: 0;
    backdrop-filter: blur(3px);
    background-color: rgba(0,0,0,.2);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    opacity: 0;
    transition: opacity .5s ease 0s, width 0s ease .5s, height 0s ease .5s;

    &.active {
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: opacity .5s ease 0s, width 0s ease 0s, height 0s ease 0s;
    }
  }
}
</style>