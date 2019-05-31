<template>
  <svg class="fill-current">
    <use
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :xlink:href="`/icons.svg#${name}`"
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
