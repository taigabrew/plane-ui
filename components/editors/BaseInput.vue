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
        class="c-input px-3"
        :value="value"
        @input="input"
      />
      <button
        v-if="type === 'password'"
        name="showPassword"
        class="absolute py-2 px-3 bottom-0 right-0 transition text-blue-500 hover:text-blue-600 active:text-blue-500"
        :class="value ? 'opacity-100' : 'opacity-0'"
        :title="
          passwordType === 'password' ? 'Показать пароль' : 'Скрыть пароль'
        "
        @click="toggleVisiblePassword"
      >
        <Icon
          :name="
            `/icons.svg#${passwordType === 'password' ? 'eye' : 'eye-close'}`
          "
          :size="6"
        />
      </button>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/Icon'
import { baseInput } from '~/assets/js/mixins.js'

export default {
  components: { Icon },
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
