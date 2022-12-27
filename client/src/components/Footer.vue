<template>
  <footer class="footer">
    <div class="footer__center center">
      <div class="footer__main">
        <MenuMain
          :items="metaStore.menuFootLeft"
          class="footer__menu-main"
        />

        <router-link to="/" class="footer__logo">
          <img src="@/images/logo.svg" alt="Seedra" class="footer__logo-img">
        </router-link>

        <MenuMain
          :items="metaStore.menuFootRight"
          class="footer__menu-main"
        />
      </div>

      <div class="footer__extra">
        <MenuSocial
          :items="metaStore.menuSocial"
          class="footer__social"
        />

        <div class="footer__copyright">{{$t('copyright')}}</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import MenuMain from '@/components/MenuMain';
import MenuSocial from '@/components/MenuSocial';
import useMetaStore from '@/stores/metaStore';

const metaStore = useMetaStore();
</script>

<style lang="scss" scoped>
.footer {
  padding: 40px 0 28px 0;
  box-shadow: 0px -20px 30px 0px rgb(207 207 207 / 25%);

  &__main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(53, 151, 64, .3);
  }

  &__logo {
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
    width: 125px;
    height: 27px;
  }

  &__extra {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__copyright {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: $color-extra;
  }
}
</style>