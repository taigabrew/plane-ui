<template>
  <svg class="fill-current" :class="`w-${size} h-${size}`">
    <use
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :xlink:href="`/icons/icons.svg#${name}`"
    />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 4
    }
  }
}
</script>
