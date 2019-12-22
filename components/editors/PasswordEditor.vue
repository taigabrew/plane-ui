<template>
  <InputWrap v-bind="{ id, label, hint }">
    <BaseInput v-bind="{ id, hint, required, type, value }" @update="update" />
    <button
      v-test="{ id: 'togglePasswordVisibility' }"
      :class="
        value
          ? 'text-blue-500 hover:text-blue-600 active:text-blue-500'
          : 'text-gray-400'
      "
      :title="type === 'password' ? 'Показать пароль' : 'Скрыть пароль'"
      :aria-label="type === 'password' ? 'Показать пароль' : 'Скрыть пароль'"
      @click="toggleVisiblePassword"
      name="showPassword"
      class="absolute py-2 px-3 bottom-0 right-0 transition-text transition-out-cubic transition-250"
      type="button"
    >
      <Icon :name="type === 'password' ? 'eye' : 'eye-close'" class="w-6 h-6" />
    </button>
  </InputWrap>
</template>

<script>
import { ref } from '@vue/composition-api'

import InputWrap from './InputWrap'
import BaseInput from './BaseInput'

import Icon from '~/components/Icon'

export default {
  components: { Icon, InputWrap, BaseInput },
  inheritAttrs: false,
  model: {
    event: 'update'
  },
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    hint: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const type = ref('password')

    const update = data => {
      emit('update', data)
    }

    const toggleVisiblePassword = () => {
      type.value = type.value === 'password' ? 'text' : 'password'
    }

    return {
      type,
      update,
      toggleVisiblePassword
    }
  }
}
</script>
