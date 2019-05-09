<template>
  <div class="flex flex-col c-input-wrap">
    <label
      :for="id"
      class="block text-gray-700 font-semibold leading-tight mb-1"
      >{{ label }}</label
    >
    <p v-if="hint" :id="`${id}hint`" class="text-sm text-gray-500 mb-3 -mt-1">
      {{ hint }}
    </p>
    <textarea
      :id="id"
      :aria-describedby="`${id}hint`"
      :aria-invalid="!!error"
      :aria-required="required"
      :required="required"
      :name="id"
      class="c-text-area px-3 py-2 h-32 max-w-sm"
      :value="value"
      @input="input"
    />
  </div>
</template>

<script>
import { baseInput } from '~/assets/js/mixins.js'

export default {
  mixins: [baseInput],
  props: {
    error: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
