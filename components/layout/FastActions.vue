<template>
  <div class="inline-flex items-center">
    <!-- eslint-disable-next-line vue/require-component-is -->
    <component
      :is="actionName === 'chat' ? 'button' : 'NuxtLink'"
      v-for="(action, actionName, index) in actions"
      :key="actionName"
      :to="actionName !== 'chat' ? action.src : null"
      :aria-label="action.label"
      :class="{ 'mr-4': index < Object.keys(actions).length - 1 }"
      class="relative"
    >
      <Icon
        :name="action.icon"
        class="w-6 h-6 text-gray-400 hover:text-gray-600 transition-325 transition-out-cubic transition-text"
      />
      <span
        v-if="action.unreadItems"
        class="absolute text-xs bg-blue-100 rounded text-blue-600 border border-blue-600 px-1 leading-tight left-full top-0 translate-xy-50 "
        >{{ action.unreadItems }}</span
      >
    </component>
  </div>
</template>

<script>
import Icon from '~/components/Icon'

export default {
  components: { Icon },
  data() {
    return {
      actions: {
        notifications: {
          unreadItems: 0,
          src: '/notifications',
          label: 'Уведомления',
          icon: 'bell'
        },
        mail: {
          unreadItems: 15,
          src: '/mail',
          label: 'Письма',
          icon: 'envelope'
        },
        chat: {
          unreadItems: 0,
          label: 'Сообщения',
          icon: 'message'
        }
      }
    }
  }
}
</script>
