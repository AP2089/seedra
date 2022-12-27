<template>
  <div class="product">
    <ButtonLike
      class="product__btn-like"
      :isActive="globalStore.likeAdded.includes(id)"
      @change="globalStore.likeChange(id)"
    />

    <router-link
      :to="url"
      class="product__media"
    >
      <Picture
        :src="image"
        :webp="imageWebp"
        :alt="title"
        class="product__image"
      />
    </router-link>

    <Rating
      v-if="rating"
      :active="rating"
      :count="ratingCount"
      size="sm"
      class="product__rating"
    />

    <div class="product__title">
      <router-link
        :to="url"
        class="product__title-link"
      >
        {{ title }}
      </router-link>
    </div>

    <div class="product__panel">
      <div class="product__cost">
        <Sprite
          v-if="priceOld"
          name="hot"
          class="product__icon-hot"
        />
        <div class="product__price">{{ globalStore.currencySymbol }}{{ price }}</div>
        <div class="product__price-old" v-if="priceOld">{{ globalStore.currencySymbol }}{{ priceOld }}</div>
      </div>

      <ButtonCart
        class="product__btn-cart"
        :isActive="globalStore.cartAdded.includes(id)"
        @change="globalStore.cartChange(id)"
      />
    </div>
  </div>
</template>

<script setup>
import Rating from '@/components/Rating';
import ButtonCart from '@/components/ui/ButtonCart';
import ButtonLike from '@/components/ui/ButtonLike';
import useGlobalStore from '@/stores/globalStore';

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imageWebp: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  priceOld: {
    type: Number
  },
  rating: {
    type: Number
  },
  ratingCount: {
    type: Number
  }
});

const globalStore = useGlobalStore();
</script>

<style lang="scss" scoped>
.product {
  border: 2px solid $color-secondary;
  border-radius: 8px;
  padding: 28px;
  position: relative;

  &__btn-like {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 1;
  }

  &__media {
    display: block;
    text-decoration: none;
    opacity: 1;
    margin-bottom: 30px;
    transition: opacity .5s ease 0s;

    &:hover {
      text-decoration: none;
      opacity: .7;
    }
  }

  &__image {
    display: block;
  }

  &__rating {
    margin-bottom: 10px;
  }

  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 10px;
  }

  &__title-link {
    color: $color-global;
    text-decoration: none;
    transition: color .5s ease 0s;

    &:hover {
      color: $color-primary;
      text-decoration: none;
    }
  }

  &__panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__cost {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__icon-hot {
    width: 24px;
    height: 24px;
    fill: $color-danger;
    margin-right: 5px;
  }

  &__price {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 1;
    color: $color-global;
    margin-right: 10px;
  }

  &__price-old {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    color: $color-extra;
    text-decoration: line-through;
  }
}
</style>