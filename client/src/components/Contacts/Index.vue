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
  border-radius: 24px;
  background-color: $color-base;
  background-position: left top;
  background-repeat: no-repeat;
  margin-bottom: 50px;

  &__inner {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    padding: 30px 40px;
    background-position: right top;
    background-repeat: no-repeat;
  }
}
</style>