<template>
  <div class="details__panel">
    <div class="details__core">
      <h1 class="details__title">{{ title }}</h1>
      <div class="details__info-set">
        <div class="details__info-set-item details__info-set-item_available">
          <Sprite
            name="check"
            class="details__info-set-icon"
          />
          {{ $t('available') }}
        </div>
        <div class="details__info-set-item details__info-set-item_vegetables">
          <Sprite
            name="vegetables"
            class="details__info-set-icon"
          />
          {{ $t('vegetables') }}
        </div>
      </div>
      <div class="details__description" v-html="description"></div>
      <div class="details__set">
        <div class="details__price">
          <div class="details__price-old" v-if="priceOld">{{ globalStore.currencySymbol }}{{ priceOld }}</div>
          <div class="details__price-current">{{ globalStore.currencySymbol }}{{ price }}</div>
        </div>

        <div class="details__control">
          <ButtonLike
            class="details__control-btn"
            :isActive="globalStore.likeAdded.includes(id)"
            @change="globalStore.likeChange(id)"
          />

          <ButtonCart
            class="details__control-btn"
            :isActive="globalStore.cartAdded.includes(id)"
            @change="globalStore.cartChange(id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useGlobalStore from '@/stores/globalStore';
import ButtonCart from '@/components/ui/ButtonCart';
import ButtonLike from '@/components/ui/ButtonLike';

const props = defineProps([
  'id',
  'title',
  'description',
  'price',
  'priceOld'
]);

const globalStore = useGlobalStore();
</script>

<style lang="scss" scoped>
.details {
  &__panel {
    @include media('min', $viewport-post-md) {
      width: 60%;
      padding-left: 50px;
    }
    
    @include media('max', $viewport-md) {
      margin-bottom: 30px;
    }
  }

  &__core {
    @include media('min', $viewport-post-md) {
      max-width: 540px;
    }
  }

  &__title {
    font-style: normal;
    font-weight: 600;
    line-height: 1.4;
    margin: 0 0 15px 0;

    @include media('min', $viewport-post-md) {
      font-size: 24px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 18px;
    }
  }

  &__info-set {
    margin: 0 0 15px 0;

    @include media('min', $viewport-post-sm) {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }

  &__info-set-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 119px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    margin-right: 10px;
    text-transform: uppercase;
    padding: 7px 10px;

    @include media('min', $viewport-post-md) {
      width: 180px;
      font-size: 14px;
    }
    
    @include media('max', $viewport-md) {
      width: 150px;
      font-size: 12px;
      margin-bottom: 5px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &_available {
      border: 1px solid $color-secondary;
      background-color: $color-secondary;
    }

    &_vegetables {
      border: 1px solid $color-secondary;
      background-color: #FFFFFF;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__info-set-icon {
    flex: 0 0 24px;
    height: 24px;
    margin-right: 10px;
    fill: $color-primary;
  }

  &__description {
    font-style: normal;
    font-weight: 300;
    line-height: 1.7;
    margin: 0 0 15px 0;

    @include media('min', $viewport-post-md) {
      font-size: 16px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
    }
  }

  &__set {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__price {
    margin-right: 10px;
  }

  &__price-old {
    font-style: normal;
    font-weight: 500;
    line-height: 1;
    color: $color-extra;
    text-decoration: line-through;
    margin-bottom: 5px;

    @include media('min', $viewport-post-md) {
      font-size: 16px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
    }
  }

  &__price-current {
    font-style: normal;
    font-weight: 600;
    line-height: 1;

    @include media('min', $viewport-post-md) {
      font-size: 28px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 22px;
    }
  }

  &__control {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__control-btn {
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>