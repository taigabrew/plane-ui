<template>
  <component
    :is="isTextArea ? 'textarea' : 'input'"
    :id="id"
    :aria-describedby="hint ? `${id}hint` : null"
    :aria-invalid="!!error"
    :aria-required="required"
    :required="required"
    :name="id"
    :type="isTextArea ? null : type"
    class="px-3"
    :class="isTextArea ? 'py-2 h-32 c-text-area' : 'c-input'"
    :value="value"
    @input="update"
  />
</template>

<script>
export default {
  model: {
    event: 'update'
  },
  props: {
    id: {
      type: String,
      default: null,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: null
    },
    isTextArea: {
      type: Boolean,
      default: false
    },
    hint: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const update = e => emit('update', e.target.value)
    return { update }
  }
}
</script>
