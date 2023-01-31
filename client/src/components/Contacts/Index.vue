<template>
  <div
    class="contacts"
    :style="{'background-image': `url(${leftBg})`}"
  >
    <div
      class="contacts__inner"
      :style="{'background-image': `url(${rightBg})`}"
    >
      <ContactsContent
        :title="title"
        :description="description"
        :phone="phone"
        :email="email"
      />
      
      <ContactsForm
        @formSubmit="$emit('formSubmit', $event)"
      />
    </div>

    <Notification
      v-if="message"
      :title="$t('success')"
      :text="message"
      type="success"
    />
  </div>
</template>

<script setup>
import Notification from '@/components/ui/Notification';
import ContactsContent from '@/components/Contacts/ContactsContent';
import ContactsForm from '@/components/Contacts/ContactsForm';
import useImageFormat from '@/hooks/useImageFormat';
import leftBgAny from '@/images/contacts-left-bg.png';
import leftBgWebp from '@/images/contacts-left-bg.png?webp';
import rightBgAny from '@/images/contacts-right-bg.png';
import rightBgWebp from '@/images/contacts-right-bg.png?webp';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  message: {
    type: String
  }
});

const leftBg = useImageFormat(leftBgAny, leftBgWebp);
const rightBg = useImageFormat(rightBgAny, rightBgWebp);
</script>

<style lang="scss" scoped>
.contacts {
  background-color: $color-base;
  background-position: left top;
  background-repeat: no-repeat;

  @include media('min', $viewport-post-md) {
    border-radius: 24px;
    margin-bottom: 50px;
  }
  
  @include media('max', $viewport-md) {
    border-radius: 18px;
    margin-bottom: 30px;
  }

  &__inner {
    background-position: right top;
    background-repeat: no-repeat;

    @include media('min', $viewport-post-sm) {
      display: flex;
      align-items: stretch;
      justify-content: flex-start;
      padding: 30px 40px;
    }
    
    @include media('max', $viewport-sm) {
      padding: 15px;
    }
  }
}
</style>