<template>
  <input
    v-bind="{ id, required, type, value }"
    :aria-describedby="hint ? `${id}hint` : null"
    :aria-invalid="!!error"
    :aria-required="required"
    :name="id"
    class="c-input px-3"
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
    hint: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    autocomplete: {
      type: String,
      default: null
    }
  },
  setup(props, { emit, attrs }) {
    const update = e => emit('update', e.target.value)
    return { update }
  }
}
</script>
