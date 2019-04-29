<template>
  <header class="flex justify-between">
    <div class="flex items-center">
      <button class="mr-2 md:hidden" @click="toggleSideNav">
        <svg class="w-10 h-10 fill-current text-black">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="/icons.svg#menu"
          />
        </svg>
      </button>
      <nuxt-link
        class="font-bold text-blue-500 inline-flex items-center leading-wide"
        to="/"
      >
        Dash Demo
      </nuxt-link>
    </div>
    <div class="inline-flex items-center">
      <span>быстрые действия</span>
      <span class="w-10 h-10 rounded-full bg-gray-300 ml-4" />
    </div>
  </header>
</template>

<script>
import { mutations } from '~/store/'

export default {
  methods: {
    toggleSideNav() {
      mutations.toggleSideNav()
    }
  }
}
</script>
