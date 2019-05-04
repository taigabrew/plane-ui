<template>
  <div class="rounded" :class="{ 'shadow-outline': tabsFocused }">
    <ul role="tablist" class="flex">
      <li v-for="(item, key, index) in list" :key="key" role="presentation">
        <a
          :id="`tab${key}`"
          role="tab"
          :ref="`tab${key}`"
          :href="`#section${key}`"
          :aria-selected="index === selectedIndex"
          :tabindex="index === 0 ? null : '-1'"
          class="px-4 pt-2 pb-3 border-t-4 rounded-t transition block outline-none"
          :class="
            index === selectedIndex
              ? 'bg-white border-blue-500 text-blue-800'
              : 'bg-transparent border-transparent text-gray-700'
          "
          @click.prevent="$refs[`tab${key}`][0].focus"
          @blur="tabsFocused = false"
          @focus="selectTab(index)"
          @keyup.left="switchTab('left')"
          @keyup.right="switchTab('right')"
        >
          {{ item }}
        </a>
      </li>
    </ul>
    <section
      v-for="(item, key, index) in $slots"
      :id="`section${key}`"
      :key="key"
      role="tabpanel"
      :aria-labelledby="`tab${key}`"
      :hidden="index !== selectedIndex"
      class="bg-white shadow rounded-b"
    >
      <slot :name="key" />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      selectedIndex: 0,
      tabsFocused: false
    }
  },
  methods: {
    selectTab(index) {
      this.tabsFocused = true
      this.selectedIndex = index
    },
    switchTab(direction) {
      const maxIndex = Object.keys(this.$slots).length - 1

      switch (true) {
        case direction === 'right' && this.selectedIndex === maxIndex:
          return (this.selectedIndex = 0)
        case direction === 'right':
          return (this.selectedIndex += 1)
        case direction === 'left' && this.selectedIndex === 0:
          return (this.selectedIndex = maxIndex)
        case direction === 'left':
          return (this.selectedIndex -= 1)
        default:
          break
      }
    }
  }
}
</script>
