<template>
  <div class="hidden md:block w-2/3 flex-shrink-0 px-8 relative">
    <Icon
      class="w-6 h-6 text-gray-500 absolute ml-3 translate-y-50 top-1/2"
      name="search"
    />
    <input
      type="text"
      class="c-input pl-12"
      placeholder="Поиск (Нажмите '/' чтобы сфокусироваться)"
    />
  </div>
</template>

<style lang="postcss">
.search-input:focus {
  outline: none;
}
</style>

<script>
import Icon from '~/components/Icon'
export default {
  components: { Icon }
}
</script>
