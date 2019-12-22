<template>
  <InputWrap v-bind="{ id, label, hint }">
    <BaseInput v-bind="{ id, hint, required, type, value }" @update="update" />
  </InputWrap>
</template>

<script>
import InputWrap from './InputWrap'
import BaseInput from './BaseInput'

export default {
  components: { InputWrap, BaseInput },
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
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'email', 'tel', 'search'].includes(value)
      }
    }
  },
  setup(props, { emit }) {
    const update = data => {
      emit('update', data)
    }

    return { update }
  }
}
</script>
