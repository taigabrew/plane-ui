<template>
  <div class="inline-flex items-center">
    <nuxt-link to="/notifications" class="mr-4">
      <svg
        class="w-6 h-6 fill-current text-gray-400 hover:text-gray-600 transition"
      >
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="/icons.svg#bell"
        />
      </svg>
    </nuxt-link>
    <nuxt-link to="/mail" class="mr-4 relative">
      <svg
        class="w-6 h-6 fill-current text-gray-400 hover:text-gray-600 transition"
      >
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="/icons.svg#envelope"
        />
      </svg>
      <span
        class="absolute text-xs bg-blue-100 rounded text-blue-600 border border-blue-600 px-1 leading-tight left-full top-0 translate-xy-50 "
        >15</span
      >
    </nuxt-link>
    <button>
      <svg
        class="w-6 h-6 fill-current text-gray-400 hover:text-gray-600 transition"
      >
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="/icons.svg#message"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actions: {
        notifications: {
          unreadItems: 0,
          icon: 'bell'
        },
        mail: {
          unreadItems: 15,
          icon: 'envelope'
        },
        chat: {
          unreadItems: 0,
          icon: 'message'
        }
      }
    }
  }
}
</script>
