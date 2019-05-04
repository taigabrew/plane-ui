<template>
  <div class="p-10 flex">
    <div class="w-1/4 pr-12 leading-tight">
      <h2 class="mb-1 font-bold text-gray-700">{{ title }}</h2>
      <p class="text-gray-600">
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
