<template>
  <form
    class="cart__form"
    @submit.prevent="formSubmit"
  >
    <InputboxBase
      :label="$t('name')"
      :placeholder="$t('your.name')"
      :validation="v$.name"
      v-model="form.name"
      class="cart__form-row"
    />

    <InputboxBase
      :label="$t('email')"
      :placeholder="$t('your.email')"
      :validation="v$.email"
      v-model="form.email"
      class="cart__form-row"
    />

    <InputboxBase
      :label="$t('phone')"
      :placeholder="$t('your.phone')"
      :validation="v$.phone"
      :mask="'+# (###) ###-##-##'"
      v-model="form.phone"
      class="cart__form-row"
    />

    <ButtonBase
      type="submit"
      class="cart__form-row cart__form-btn"
    >
      {{ $t('send') }}
    </ButtonBase>
  </form>
</template>

<script setup>
import InputboxBase from '@/components/ui/InputboxBase';
import ButtonBase from '@/components/ui/ButtonBase';
import useValidation from '@/hooks/useValidation';

const emit = defineEmits([
  'formSubmit'
]);

const {form, v$, fromClear} = useValidation({
  name: {
    required: true
  },
  email: {
    required: true,
    email: true
  },
  phone: {
    required: true,
    phone: true
  }
});

const formSubmit = () => {
  v$.value.$touch();

  if (!v$.value.$invalid) {
    emit('formSubmit', form);
    fromClear();
  }
}
</script>

<style lang="scss" scoped>
.cart {
  &__form {
    width: 30%;
    padding-left: 50px;
    position: sticky;
    top: 75px;
    left: 0;
  }

  &__form-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__form-btn {
    min-width: 150px;
  }
}
</style>