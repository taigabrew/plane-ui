<template>
  <div class="flex-shrink-0 ml-8 relative">
    <img
      src="/userpic.jpg"
      alt="Ваше изображение пользователя"
      class="rounded-full w-10 h-10 bg-gray-300 shadow-inner"
      @click="isOpened = !isOpened"
    />
    <span
      class="absolute left-full top-full w-3 h-3 rounded-full online-status-indicator"
      :class="statuses[onlineStatus].className"
    />
    <!-- <span class="bg-green-400 bg-red-500 bg-yellow-500" /> -->
    <div
      class="absolute right-0 top-full bg-white rounded shadow-lg py-2 text-sm text-gray-700 flex-col"
      :class="isOpened ? 'flex' : 'hidden'"
    >
      <button
        class="flex items-center pl-5 pr-8 whitespace-no-wrap py-1 hover:bg-gray-200"
        v-for="(status, statusName) in statuses"
        :key="statusName"
        @click="onlineStatus = statusName"
      >
        <span
          class="w-3 h-3 rounded-full mr-3 flex-shrink-0 -mt-1"
          :class="status.className"
        />{{ status.name }}
      </button>
      <div class="h-px bg-gray-200 my-2" />
      <nuxt-link
        class="pl-4 pr-8 py-1 hover:bg-gray-200 flex items-center"
        v-for="(nav, navKey) in navs"
        :key="navKey"
        :to="nav.url"
      >
        <svg class="w-6 h-6 fill-current text-gray-500 mr-2">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            :xlink:href="`/icons.svg#${nav.icon}`"
          />
        </svg>
        {{ nav.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpened: false,
      /** @type {'online' | 'offline' | 'away'} */
      onlineStatus: 'away',
      statuses: {
        online: {
          name: 'В сети',
          className: 'bg-green-400'
        },
        offline: {
          name: 'Вне сети',
          className: 'bg-red-500'
        },
        away: {
          name: 'Отошел',
          className: 'bg-yellow-500'
        }
      },
      navs: {
        profile: {
          name: 'Профиль',
          icon: 'user-in-circle',
          url: '/profile'
        },
        help: {
          name: 'Помощь',
          icon: 'help',
          url: '/help'
        },
        logOut: {
          name: 'Выход',
          icon: 'log-out',
          url: '/'
        }
      }
    }
  }
}
</script>

<style>
.online-status-indicator {
  transform: translate(-95%, -95%);
}
</style>
