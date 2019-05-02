<template>
  <div class="flex-shrink-0 ml-8 relative">
    <button class="block" @click="isOpened = !isOpened">
      <img
        src="/userpic.jpg"
        alt="Ваше изображение пользователя"
        class="rounded-full w-10 h-10 bg-gray-300 shadow-inner user-pic"
      />
    </button>
    <span
      class="absolute left-full top-full w-3 h-3 border border-white rounded-full online-status-indicator"
      :class="statuses[onlineStatus].className"
    />
    {{/*classes for PurgeCSS*/}}
    <!-- <span class="bg-green-400 bg-red-500 bg-yellow-500" /> -->
    <CollapseTransition>
      <div
        v-if="isOpened"
        class="absolute right-0 top-full bg-white rounded shadow-lg py-2 text-sm text-gray-700 flex-col flex transition user-area-dropdown"
        ref="userActionsDropdown"
      >
        <button
          v-for="(status, statusName) in statuses"
          :key="statusName"
          class="flex items-center pl-5 pr-8 whitespace-no-wrap py-1 hover:bg-gray-200 transition"
          @click="
            onlineStatus = statusName
            isOpened = false
          "
        >
          <span
            class="w-3 h-3 rounded-full mr-3 flex-shrink-0 -mt-1"
            :class="status.className"
          />{{ status.name }}
        </button>
        <div class="h-px bg-gray-200 my-2" />
        <nuxt-link
          v-for="(nav, navKey) in navs"
          :key="navKey"
          class="pl-4 pr-8 py-1 hover:bg-gray-200 flex items-center user-nav-link text-gray-600 transition"
          :to="nav.url"
        >
          <svg class="w-6 h-6 fill-current mr-2">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              :xlink:href="`/icons.svg#${nav.icon}`"
            />
          </svg>
          {{ nav.name }}
        </nuxt-link>
      </div>
    </CollapseTransition>
  </div>
</template>

<script>
import CollapseTransition from '~/components/animations/CollapseTransition'

export default {
  components: { CollapseTransition },
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
  },
  watch: {
    $route() {
      this.isOpened = false
    }
  },
  created() {
    if (process.browser) document.addEventListener('click', this.documentClick)
  },
  destroyed() {
    if (process.browser)
      document.removeEventListener('click', this.documentClick)
  },
  methods: {
    documentClick(e) {
      if (
        !e.target.matches(
          '.user-area-dropdown, .user-area-dropdown *, .user-pic'
        )
      ) {
        this.isOpened = false
      }
    }
  }
}
</script>

<style lang="postcss">
.online-status-indicator {
  transform: translate(-95%, -95%);
}

.user-nav-link.nuxt-link-exact-active {
  @apply cursor-default bg-blue-100 text-blue-500;

  &:hover {
    @apply bg-blue-100;
  }
}

/* .user-area-dropdown {
  transform-origin: top center;
  transition-duration: 0.3s;

  &.is-opened {
    transform: scaleY(1);
    opacity: 1;
  }

  &.is-collapsed {
    transform: scaleY(0.01);
    opacity: 0.01;
  }
} */
</style>
