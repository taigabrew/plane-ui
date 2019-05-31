<template>
  <div class="p-10 md:flex">
    <div
      class="leading-tight mb-8 pb-8 border-b border-gray-200 md:border-none md:w-1/4 md:pr-12"
    >
      <h2
        v-test="{ id: 'title' }"
        class="mb-1 font-bold text-gray-700 text-xl md:text-base"
      >
        {{ title }}
      </h2>
      <p v-test="{ id: 'description' }" class="text-gray-600">
        {{ description }}
      </p>
    </div>
    <div
      v-test="{ id: 'slot' }"
      class="md:w-3/4 md:border-l border-gray-200 md:pl-12"
    >
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
