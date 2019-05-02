<template>
  <div>
    <section class="bg-white rounded shadow">
      <InputGroup
        title="Профиль"
        description="Здесь вы можете редактировать данные вашего аккаунта"
      >
        <BaseInput
          id="userName"
          v-model="profile.userName"
          label="Имя пользователя"
        />
      </InputGroup>
      <footer
        class="bg-gray-100 flex justify-end items-center px-5 py-4 rounded-b"
      >
        <button class="btn btn--action">Сохранить</button>
      </footer>
    </section>
  </div>
</template>

<script>
import BaseInput from '~/components/editors/BaseInput'
import InputGroup from '~/components/editors/InputGroup'

export default {
  components: { BaseInput, InputGroup },
  data() {
    return {
      profile: {
        userName: 'Вася Пупкин'
      }
    }
  }
}
</script>
