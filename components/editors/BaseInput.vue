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
    <div class="relative max-w-sm">
      <input
        :id="id"
        :aria-describedby="`${id}hint`"
        :aria-invalid="!!error"
        :aria-required="required"
        :required="required"
        :name="id"
        :type="type === 'password' ? passwordType : type"
        class="c-input px-4"
        :value="value"
        @input="input"
      />
      <button
        v-if="type === 'password'"
        name="showPassword"
        class="absolute py-2 px-3 bottom-0 right-0"
        @click="toggleVisiblePassword"
      >
        <svg class="w-6 h-6 fill-current text-blue-500">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            :xlink:href="
              `/icons.svg#${passwordType === 'password' ? 'eye' : 'eye-close'}`
            "
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { baseInput } from '~/assets/js/mixins.js'

export default {
  mixins: [baseInput],
  props: {
    type: {
      type: String,
      default: 'text'
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
  data() {
    return {
      passwordType: 'password'
    }
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.value)
    },
    toggleVisiblePassword() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    }
  }
}
</script>
