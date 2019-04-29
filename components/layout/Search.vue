<template>
  <div class="hidden md:block w-2/3 flex-shrink-0 px-8 relative">
    <svg
      class="w-6 h-6 fill-current text-gray-500 absolute ml-3 translate-y-50 top-1/2"
    >
      <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="/icons.svg#search"
      />
    </svg>
    <input
      type="text"
      class="h-10 w-full bg-gray-200 focus:bg-white rounded border border-transparent pl-12 focus:border-gray-300 search-input transition"
      placeholder="Поиск (Нажмите '/' чтобы фокусировки)"
    />
  </div>
</template>

<style lang="postcss">
.search-input:focus {
  outline: none;
}
</style>
