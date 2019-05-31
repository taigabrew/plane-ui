<template>
  <div class="bg-gray-200 h-screen flex flex-col">
    <Header class="bg-white py-3 flex-shrink-0 shadow-shade relative z-10" />
    <div class="flex flex-grow overflow-hidden">
      <SideNav
        class="py-6 lg:w-1/6 absolute lg:static lg:block bg-gray-800 top-0 bottom-0 mt-16 lg:mt-0 left-0 lg:bg-transparent z-50 flex-shrink-0"
        :class="isOpenedSideNav ? '' : 'hidden'"
      />
      <nuxt class="p-4 md:p-8 flex-grow overflow-y-auto" />
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
    animation-duration: 0s !important;
    transition-duration: 0.1s !important;
  }
}
</style>
