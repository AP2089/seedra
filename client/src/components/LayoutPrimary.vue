<template>
  <LayoutMain>
    <div class="center">
      <div class="layout-primary">
        <div class="layout-primary__sidebar">
          <slot name="sidebar"></slot>
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
</script>

<style lang="scss" scoped>
.layout-primary {
  display: grid; 
  grid-auto-rows: 1fr; 
  grid-template-columns: 220px 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 30px; 
  margin-bottom: 50px;
}
</style>