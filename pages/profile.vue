<template>
  <div>
    <div class="mb-6 flex justify-between">
      <h1 class="font-bold text-sm tracking-wide uppercase text-gray-600">
        Профиль
      </h1>
    </div>
    <section class="bg-white rounded shadow">
      <InputGroup title="Общие" description="Личные данные и контакты">
        <BaseInput id="name" v-model="profile.name" label="Имя и фамилия" />
        <RadioGroup
          id="gender"
          v-model="profile.gender"
          :items="{
            male: {
              label: 'Мужской'
            },
            female: {
              label: 'Женский'
            }
          }"
          label="Пол"
        />
        <BaseInput
          id="email"
          v-model="profile.email"
          label="Электронная почтка"
          type="email"
        />
        <BaseInput id="tel" v-model="profile.tel" label="Телефон" type="tel" />
      </InputGroup>
      <InputGroup
        title="Безопасность"
        description="Настройки приватности и параметры авторизации"
      >
        <BaseInput
          id="password"
          v-model="profile.password"
          label="Пароль"
          type="password"
          hint="Может содержать какие-то символы и все такое"
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
import RadioGroup from '~/components/editors/RadioGroup'

export default {
  components: { BaseInput, InputGroup, RadioGroup },
  data() {
    return {
      profile: {
        name: 'Вася Пупкин',
        password: '',
        email: '',
        tel: '',
        gender: ''
      }
    }
  }
}
</script>
