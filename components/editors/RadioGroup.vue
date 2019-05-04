<template>
  <fieldset>
    <legend>
      <span>{{ label }}</span>
      <span>{{ hint }}</span>
    </legend>
    <div v-for="(item, key) in items" :key="key">
      <input
        type="radio"
        :value="key"
        :id="`radio${key}`"
        :name="`radio${id}`"
        :checked="modelValue === key"
        @change="$emit('change', key)"
      />
      <label :for="`radio${key}`">{{ item.label }}</label>
    </div>
  </fieldset>
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change'
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
    items: {
      type: Object,
      default() {
        return {}
      }
    },
    modelValue: {
      type: String,
      default: ''
    }
  }
}
</script>
