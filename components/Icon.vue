<template>
  <svg class="fill-current" focusable="false" aria-hidden="true">
    <use
      :xlink:href="`/icons.svg#${name}`"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
