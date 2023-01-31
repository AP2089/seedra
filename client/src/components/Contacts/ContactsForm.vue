<template>
  <div class="contacts__control">
    <form
      class="contacts__form"
      @submit.prevent="formSubmit"
    >
      <InputboxBase
        :label="$t('name')"
        :placeholder="$t('your.name')"
        :validation="v$.name"
        v-model="form.name"
        class="contacts__form-row"
      />

      <InputboxBase
        :label="$t('email')"
        :placeholder="$t('your.email')"
        :validation="v$.email"
        v-model="form.email"
        class="contacts__form-row"
      />

      <TextareaBase
        :label="$t('message')"
        :placeholder="$t('your.message')"
        :validation="v$.message"
        v-model="form.message"
        class="contacts__form-row"
      />

      <div class="contacts__form-row contacts__form-row_panel">
        <ButtonBase
          type="submit"
          class="contacts__form-submit"
        >
          {{ $t('send.request') }}
        </ButtonBase>

        <div class="contacts__form-caption">{{ $t('by.sending') }}</div>
      </div>
    </form>
  </div>
</template>

<script setup>
import InputboxBase from '@/components/ui/InputboxBase';
import TextareaBase from '@/components/ui/TextareaBase';
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
  message: {
    required: true
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
.contacts {
  &__control {
    @include media('min', $viewport-post-sm) {
      width: 50%;
    }
  }

  &__form-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    &_panel {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }

  &__form-submit {
    @include media('min', $viewport-post-sm) {
      flex: 0 0 160px;
    }
  }

  &__form-caption {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: $color-extra;

    @include media('min', $viewport-post-md) {
      margin-left: 20px;
    }
    
    @include media('max', $viewport-md) {
      margin-left: 10px;
    }
  }
}
</style>
