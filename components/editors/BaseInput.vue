<template>
  <div class="flex flex-col">
    <label :for="id" class="block text-sm text-gray-600 ml-3">{{
      label
    }}</label>
    <p :id="`${id}hint`">{{ hint }}</p>
    <input
      :id="id"
      :aria-describedby="`${id}hint`"
      :aria-invalid="!!error"
      :name="id"
      :type="type"
      class="c-input max-w-sm px-4"
      :value="value"
      @input="input"
    />
  </div>
</template>

<script>
export default {
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
    type: {
      type: String,
      default: 'text'
    },
    error: {
      type: String,
      default: ''
    }
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
