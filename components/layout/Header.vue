<template>
  <header class="flex justify-between">
    <div class="flex items-center w-1/6 pl-8">
      <button class="mr-2 md:hidden" @click="toggleSideNav">
        <Icon class="text-black" name="menu" :size="10" />
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
