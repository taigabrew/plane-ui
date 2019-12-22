<template>
  <div>
    <div class="mb-6 flex justify-between">
      <h1 class="font-bold text-sm tracking-wide uppercase text-gray-600">
        Профиль
      </h1>
    </div>
    <form @submit.prevent="handleSubmit" class="bg-white rounded shadow">
      <InputGroup title="Общие" description="Личные данные и контакты">
        <TextEditor id="name" v-model="profile.name" label="Имя и фамилия" />
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
        <TextEditor
          id="email"
          v-model="profile.email"
          label="Электронная почта"
          type="email"
        />
        <TextEditor id="tel" v-model="profile.tel" label="Телефон" type="tel" />
        <TextAreaEditor id="about" v-model="profile.about" label="Обо мне" />
      </InputGroup>
      <InputGroup
        title="Безопасность"
        description="Настройки приватности и параметры авторизации"
      >
        <PasswordEditor
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
        <button class="btn btn--action" type="submit">Сохранить</button>
      </footer>
    </form>
  </div>
</template>

<script>
import TextEditor from '~/components/editors/TextEditor'
import TextAreaEditor from '~/components/editors/TextAreaEditor'
import InputGroup from '~/components/editors/InputGroup'
import RadioGroup from '~/components/editors/RadioGroup'
import PasswordEditor from '~/components/editors/PasswordEditor'

export default {
  components: {
    TextEditor,
    TextAreaEditor,
    InputGroup,
    RadioGroup,
    PasswordEditor
  },
  data() {
    return {
      profile: {
        name: 'Вася Пупкин',
        password: '',
        email: '',
        tel: '',
        gender: '',
        about: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log('Нажали на «Сохранить»')
    }
  }
}
</script>
