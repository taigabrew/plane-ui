<template>
  <div class="hidden md:block w-2/3 flex-shrink-0 px-12 relative">
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
      class="h-10 w-full bg-gray-200 focus:bg-gray-100 rounded border pl-12 border-none"
      placeholder="Поиск (Нажмите '/' чтобы фокусировки)"
    />
  </div>
</template>
