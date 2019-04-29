<template>
  <div class="inline-flex items-center">
    <nuxt-link to="/notifications" class="mr-4">
      <svg class="w-6 h-6 fill-current text-gray-400">
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="/icons.svg#bell"
        />
      </svg>
    </nuxt-link>
    <nuxt-link to="/mail" class="mr-4 relative">
      <svg class="w-6 h-6 fill-current text-gray-600">
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="/icons.svg#envelope"
        />
      </svg>
      <span
        class="absolute text-xs bg-red-500 rounded-full text-white px-2 leading-tight pb-px pt-1 left-full top-0 translate-xy-50"
        >15</span
      >
    </nuxt-link>
    <button>
      <svg class="w-6 h-6 fill-current text-gray-400">
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="/icons.svg#message"
        />
      </svg>
    </button>
  </div>
</template>
