<template>
  <header class="flex justify-between">
    <div class="flex items-center w-1/6 pl-8">
      <button class="mr-2 md:hidden" @click="toggleSideNav">
        <svg class="w-10 h-10 fill-current text-black">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="/icons.svg#menu"
          />
        </svg>
      </button>
      <nuxt-link
        class="font-bold text-2xl md:text-lg text-blue-500 inline-flex items-center leading-wide whitespace-no-wrap"
        to="/"
      >
        Dash Demo
      </nuxt-link>
    </div>
    <Search />
    <div class="hidden md:inline-flex items-center pr-8">
      <FastActions />
      <UserArea />
    </div>
  </header>
</template>

<script>
import { mutations } from '~/store/'
import Search from './Search'
import FastActions from './FastActions'
import UserArea from './UserArea'

export default {
  components: { Search, FastActions, UserArea },
  methods: {
    toggleSideNav() {
      mutations.toggleSideNav()
    }
  }
}
</script>
