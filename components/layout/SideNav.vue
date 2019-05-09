<template>
  <aside>
    <nuxt-link
      v-for="item in navlist"
      :key="item.id"
      :to="item.url"
      class="no-underline flex items-center hover:bg-gray-100 py-2 px-5 rounded-sm text-gray-500 border-l-4 border-transparent active:bg-transparent transition side-nav-link"
    >
      <Icon class="mr-3 flex-shrink-0" :name="item.icon" :size="5" />
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
  @apply bg-gray-100 border-blue-500 text-blue-500 cursor-default;
}
</style>
