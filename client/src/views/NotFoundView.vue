<template>
  <LayoutBase>
    <h2>{{ $t('not.found') }}</h2>
    <p>{{ $t('go.back') }}</p>
    <p>
      <ButtonBase
        url="/"
      >
        {{ $t('home') }}
      </ButtonBase>
    </p>
  </LayoutBase>
</template>

<script setup>
import LayoutBase from '@/components/LayoutBase';
import ButtonBase from '@/components/ui/ButtonBase';
</script>