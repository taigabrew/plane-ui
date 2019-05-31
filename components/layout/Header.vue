<template>
  <header class="flex justify-between">
    <div class="flex items-center w-1/6 pl-4 text-blue-500">
      <button class="mr-2 lg:hidden" @click="toggleSideNav">
        <Icon class="w-10 h-10" name="menu" />
      </button>
      <nuxt-link
        class="font-bold text-2xl md:text-lg inline-flex items-center leading-wide whitespace-no-wrap"
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
import Icon from '~/components/Icon'

export default {
  components: { Search, FastActions, UserArea, Icon },
  methods: {
    toggleSideNav() {
      mutations.toggleSideNav()
    }
  }
}
</script>
