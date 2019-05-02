<template>
  <section class="bg-white rounded shadow">
    <header v-if="title" class="flex justify-between px-24 pt-24">
      <h3>{{ title }}</h3>
    </header>
    <slot />
    <footer
      class="bg-gray-100 flex justify-end items-center px-5 py-4 rounded-b"
    >
      <button class="btn btn--empty">Отмена</button>
      <button class="btn btn--action">Принять</button>
    </footer>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
