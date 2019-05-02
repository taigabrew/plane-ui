<template>
  <div class="px-8 py-6 flex">
    <div class="w-1/4 pr-12">
      <h2 class="text-xl text-gray-500 mb-1">{{ title }}</h2>
      <p class="text-gray-400 leading-tight">
        {{ description }}
      </p>
    </div>
    <div class="w-3/4 border-l border-gray-200 pl-12">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      reqired: true,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
