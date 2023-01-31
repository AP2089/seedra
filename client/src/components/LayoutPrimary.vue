<template>
  <LayoutMain>
    <div class="center">
      <div class="layout-primary">
        <div class="layout-primary__sidebar">
          <ButtonHamburger
            :isActive="mobileFilterIsActive"
            class="layout-primary__sidebar-btn-menu"
            @change="mobileFilterChange"
          />

          <div
            :class="mobileFilterWrapClasses"
          >
            <slot name="sidebar"></slot>
          </div>
        </div>
        <div class="layout-primary__content">
          <slot></slot>
        </div>
      </div>
    </div>
  </LayoutMain>
</template>

<script setup>
import { ref, computed } from 'vue';
import LayoutMain from '@/components/LayoutMain';
import ButtonHamburger from '@/components/ui/ButtonHamburger';

const mobileFilterIsActive = ref(false);

const mobileFilterChange = (data) => {
  mobileFilterIsActive.value = data;
}

const mobileFilterWrapClasses = computed(() => ([
  'layout-primary__sidebar-wrap',
  { 'active': mobileFilterIsActive.value }
]));
</script>

<style lang="scss" scoped>
.layout-primary {
  @include media('min', $viewport-post-md) {
    display: grid; 
    grid-auto-rows: 1fr; 
    grid-template-columns: 220px 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 30px; 
    margin-bottom: 50px;
  }

  &__sidebar {
    margin-bottom: 15px;
  }

  &__sidebar-btn-menu {
    @include media('min', $viewport-post-md) {
      display: none;
    }
  }

  &__sidebar-wrap {
    @include media('max', $viewport-md) {
      display: none;

      &.active {
        display: block;
      }
    }
  }
}
</style>