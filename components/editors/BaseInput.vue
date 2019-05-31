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
      <component
        :is="textarea ? 'textarea' : 'input'"
        :id="id"
        :aria-describedby="`${id}hint`"
        :aria-invalid="!!error"
        :aria-required="required"
        :required="required"
        :name="id"
        :type="textarea ? null : type === 'password' ? passwordType : type"
        class="px-3"
        :class="textarea ? 'py-2 h-32 c-text-area' : 'c-input'"
        :value="value"
        @input="update"
      />
      <button
        v-if="type === 'password'"
        name="showPassword"
        class="absolute py-2 px-3 bottom-0 right-0 transition-text transition-out-cubic transition-250"
        :class="
          value
            ? 'text-blue-500 hover:text-blue-600 active:text-blue-500'
            : 'text-gray-400'
        "
        :title="
          passwordType === 'password' ? 'Показать пароль' : 'Скрыть пароль'
        "
        @click="toggleVisiblePassword"
      >
        <Icon
          :name="passwordType === 'password' ? 'eye' : 'eye-close'"
          class="w-6 h-6"
        />
      </button>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/Icon'

export default {
  components: { Icon },
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
    },
    textarea: {
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
    update(event) {
      this.$emit('update', event.target.value)
    },
    toggleVisiblePassword() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    }
  }
}
</script>
