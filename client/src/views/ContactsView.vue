<template>
  <LayoutBase>
    <Contacts
      :title="contactsStore.title"
      :description="contactsStore.description"
      :phone="contactsStore.phone"
      :email="contactsStore.email"
      :message="contactsStore.message"
      @formSubmit="contactsStore.formSubmit"
    />
  </LayoutBase>
</template>

<script setup>
import { onMounted } from 'vue';
import LayoutBase from '@/components/LayoutBase';
import Contacts from '@/components/Contacts';
import useContactsStore from '@/stores/contactsStore';

const contactsStore = useContactsStore();

onMounted(() => {
  contactsStore.dataFeatch();
});
</script>