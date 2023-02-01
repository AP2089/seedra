<template>
  <LayoutMain>
    <div class="center">
      <div class="layout-primary">
        <div class="layout-primary__sidebar">
          <ButtonHamburger
            v-if="isMobile"
            :isActive="isActive"
            @change="toggleIsActive"
          />

          <Transition name="sidebar">
            <div
              v-if="isActive"
              class="layout-primary__sidebar-wrap"
            >
              <slot name="sidebar"></slot>
            </div>
          </Transition>
        </div>
        <div class="layout-primary__content">
          <slot></slot>
        </div>
      </div>
    </div>
  </LayoutMain>
</template>

<script setup>
import LayoutMain from '@/components/LayoutMain';
import ButtonHamburger from '@/components/ui/ButtonHamburger';
import useDevice from '@/hooks/useDevice';

const { isActive, isMobile, toggleIsActive } = useDevice();
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
    @include media('max', $viewport-md) {
      margin-bottom: 15px;
    }
  }

  &__sidebar-wrap {
    @include media('max', $viewport-md) {
      overflow: hidden;
    }
  }
}

@include media('max', $viewport-md) {
  .sidebar-enter-active,
  .sidebar-leave-active {
    transition: opacity 0.5s ease;
  }

  .sidebar-enter-from,
  .sidebar-leave-to {
    opacity: 0;
  }
}
</style>