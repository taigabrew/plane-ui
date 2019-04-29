<template>
  <div class="bg-gray-200 h-screen border-t-8 border-blue-500">
    <Header class="bg-white border-b border-gray-300 py-3" />
    <div class="flex">
      <SideNav
        class="pt-6 md:w-1/6 absolute md:static md:block bg-black top-0 bottom-0 mt-20 md:mt-0 left-0 px-6 md:px-0 md:bg-transparent"
        :class="isOpenedSideNav ? '' : 'hidden'"
      />
      <nuxt class="px-8 pt-8 flex-grow" />
    </div>
  </div>
</template>

<script>
import Header from '~/components/layout/Header'
import SideNav from '~/components/layout/SideNav'
import { store } from '~/store/'

export default {
  components: { Header, SideNav },
  computed: {
    isOpenedSideNav() {
      return store.isOpenedSideNav
    }
  }
}
</script>

<style lang="postcss">
html {
  @apply font-sans;
}

html,
body,
#__nuxt,
#__layout {
  @apply relative min-h-screen;
}

/* ::-moz-selection {
  @apply bg-black text-white;
}
::selection {
  @apply bg-black text-white;
} */

.container {
  @apply mx-auto;
}

@media screen and (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.1s !important;
    transition-duration: 0.1s !important;
  }
}
</style>
