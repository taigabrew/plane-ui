<template>
  <div class="flex flex-col c-input-wrap">
    <label
      v-test="{ id: 'label' }"
      :for="id"
      class="block text-gray-700 font-semibold leading-tight mb-1"
      >{{ label }}</label
    >
    <p
      v-if="hint"
      :id="`${id}hint`"
      v-test="{ id: 'hint' }"
      class="text-sm text-gray-500 mb-3 -mt-1"
    >
      {{ hint }}
    </p>
    <div class="relative max-w-sm">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null,
      required: true
    },
    label: {
      type: String,
      default: '',
      required: true
    },
    hint: {
      type: String,
      default: ''
    }
  }
}
</script>
