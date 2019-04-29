<template>
  <aside>
    <nuxt-link
      v-for="item in navlist"
      :key="item.id"
      :to="item.url"
      class="no-underline flex items-center hover:bg-white py-2 px-3 rounded-sm text-gray-600"
    >
      <svg class="w-5 h-5 mr-2 fill-current text-gray-500 flex-shrink-0">
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
