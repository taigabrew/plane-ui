<template>
  <aside>
    <nuxt-link
      v-for="item in navlist"
      :key="item.id"
      :to="item.url"
      class="no-underline flex items-center hover:bg-gray-100 py-2 px-5 rounded-sm text-gray-500 border-l-4 border-transparent active:bg-transparent transition side-nav-link"
    >
      <svg class="w-5 h-5 mr-3 fill-current flex-shrink-0">
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          :xlink:href="`/icons.svg#${item.icon}`"
        />
      </svg>
      {{ item.name }}
    </nuxt-link>
  </aside>
</template>

<script>
export default {
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
          id: 'editors',
          icon: 'pencil',
          name: 'Редакторы',
          url: 'inputs'
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
