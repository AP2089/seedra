<template>
  <div class="cart__list">
    <div class="cart__list-core">
      <div class="cart__list-row">
        <div class="cart__list-cell">
          <div class="cart__list-heading">{{ $t('product.details') }}</div>
        </div>
        <div class="cart__list-cell">
          <div class="cart__list-heading">{{ $t('amount') }}</div>
        </div>
        <div class="cart__list-cell">
          <div class="cart__list-heading">{{ $t('price') }}</div>
        </div>
        <div class="cart__list-cell">
          <div class="cart__list-heading">{{ $t('total') }}</div>
        </div>
      </div>

      <div
        v-for="item in items"
        class="cart__list-row"
      >
        <div class="cart__list-cell">
          <div class="cart__list-wrap">
            <div class="cart__list-media">
              <ButtonRemove
                class="cart__list-btn-remove"
                @click="$emit('remove', item.id)"
              />

              <router-link
                :to="item.url"
                class="cart__list-link"
              >
                <Picture
                  :src="item.image"
                  :webp="item.imageWebp"
                  :alt="item.title"
                  class="cart__list-img"
                />
              </router-link>
            </div>

            <div class="cart__list-title">
              <router-link 
                :to="item.url"
                class="cart__list-link"
              >
                {{ item.title }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="cart__list-cell">
          <Amount
            :value="item.amount"
            @update="$emit('updateAmount', {
              id: item.id,
              value: $event
            })"
          />
        </div>
        <div class="cart__list-cell">
          <div class="cart__list-price">{{ globalStore.currencySymbol }}{{ item.price }}</div>
        </div>
        <div class="cart__list-cell">
          <div class="cart__list-price">{{ globalStore.currencySymbol }}{{ item.priceTotal }}</div>
        </div>
      </div>
    </div>

    <Pagination
      :pageCount="paginationPageCount"
      @change="$emit('paginationChange', $event)"
      class="cart__list-pagination"
    />
  </div>
</template>

<script setup>
import ButtonRemove from '@/components/ui/ButtonRemove';
import Amount from '@/components/Amount';
import Pagination from '@/components/Pagination';
import useGlobalStore from '@/stores/globalStore';

const props = defineProps([
  'items',
  'paginationPageCount'
]);

const globalStore = useGlobalStore();
</script>

<style lang="scss" scoped>
.cart {
  $rs: &;

  &__list {
    width: 70%;
  }

  &__list-heading {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: $color-extra;
    text-transform: uppercase;
  }

  &__list-row {
    display: grid; 
    grid-template-columns: 3fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr; 
    align-items: center;
    gap: 0px 30px;
    border-bottom: 1px solid $color-secondary;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  &__list-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__list-media {
    position: relative;
  }

  &__list-link {
    text-decoration: none;
    color: $color-global;
    transition: color .5s ease 0s;

    #{$rs}__list-img {
      opacity: 1;
      transition: opacity .5s ease 0s;
    }

    &:hover {
      color: $color-primary;
      text-decoration: none;

      #{$rs}__list-img {
        opacity: .8;
      }
    }
  }

  &__list-btn-remove {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }

  &__list-img {
    display: block;
    width: 64px;
    margin-right: 15px;
    overflow: hidden;
    border: 1px solid $color-secondary;
    border-radius: 15px;
  }

  &__list-title {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }

  &__list-price {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
  }

  &__list-pagination {
    padding-top: 10px;
  }
}
</style>