<template>
  <aside>
    <nuxt-link
      v-for="item in navlist"
      :key="item.id"
      :to="item.url"
      class="no-underline flex items-center hover:bg-black lg:hover:bg-gray-100 py-2 pl-5 pr-10 lg:px-5 lg:rounded-sm text-gray-500 border-l-4 border-transparent active:bg-transparent transition-colors transition-out-sine transition-250 side-nav-link"
    >
      <Icon :name="item.icon" class="w-5 h-5 mr-3 flex-shrink-0" />
      {{ item.name }}
    </nuxt-link>
  </aside>
</template>

<script>
import Icon from '~/components/Icon'

export default {
  components: { Icon },
  data() {
    return {
      navlist: [
        {
          id: 'home',
          icon: 'home',
          name: 'Главная',
          url: '/'
        },
        {
          id: 'components',
          icon: 'layout',
          name: 'Компоненты',
          url: 'components'
        },
        {
          id: 'lists',
          icon: 'align-justify',
          name: 'Списки',
          url: 'lists'
        },
        {
          id: 'settings',
          icon: 'cogs',
          name: 'Настройки',
          url: 'settings'
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
.side-nav-link.nuxt-link-exact-active {
  @apply bg-gray-700 border-blue-500 text-white cursor-default;

  @media (min-width: theme('screens.lg')) {
    @apply bg-gray-100 text-blue-500;
  }
}
</style>
