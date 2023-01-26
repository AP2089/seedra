<template>
  <div class="cart">
    <h1 class="cart__title heading-base">{{ $t('your.cart') }}</h1>

    <div class="cart__core">
      <div
        v-if="items.length > 0"
        class="cart__body"
      >
        <CartList
          :items="items"
          :paginationPageCount="paginationPageCount"
          @updateAmount="$emit('updateAmount', $event)"
          @paginationChange="$emit('paginationChange', $event)"
          @remove="$emit('remove', $event)"
        />

        <CartForm
          @formSubmit="$emit('formSubmit', $event)"
        />
      </div>

      <Message
        v-else
        :text="$t('no.items')"
      />
    </div>
    
    <Notification
      v-if="messageSuccess"
      :title="$t('success')"
      :text="messageSuccess"
      type="success"
    />
  </div>
</template>

<script setup>
import CartList from '@/components/Cart/CartList';
import CartForm from '@/components/Cart/CartForm';
import Message from '@/components/ui/Message';
import Notification from '@/components/ui/Notification';

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  paginationPageCount: {
    type: Number
  },
  messageSuccess: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.cart {
  margin-bottom: 50px;

  &__body {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
}
</style>