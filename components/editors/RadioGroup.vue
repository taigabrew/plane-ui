<template>
  <fieldset class="c-input-wrap c-radio">
    <legend>
      <span class="block text-gray-700 font-semibold leading-tight mb-1">{{
        label
      }}</span>
      <span
        v-if="hint"
        :id="`${id}hint`"
        class="text-sm text-gray-500 mb-3 -mt-1 block"
        >{{ hint }}</span
      >
    </legend>
    <div :class="{ flex: inline, rounded: buttons }">
      <div
        v-for="(item, key) in items"
        :key="key"
        :class="{
          'mr-4': inline && !buttons,
          'mb-2': !inline && !buttons,
          'c-radio__inline-wrap': inline,
          'c-radio__wrap': !inline
        }"
      >
        <input
          :id="`radio${key}`"
          :value="key"
          :name="`radio${id}`"
          :checked="modelValue === key"
          @change="$emit('change', key)"
          type="radio"
          class="absolute opacity-0 c-radio__input"
        />
        <label
          :for="`radio${key}`"
          :class="
            buttons
              ? 'text-white px-5 py-2 transition-bg transition-250 transition-out-sine hover:bg-blue-600 active:bg-blue-500 select-none font-light tracking-wide c-radio__btn-label'
              : 'text-gray-700'
          "
          class="text-sm cursor-pointer flex items-center"
        >
          <Icon
            :name="modelValue === key ? 'circle-with-bullet' : 'circle'"
            class="w-6 h-6 text-blue-500 rounded-full transition-325 transition-out-quart transition-shadow mr-1 c-radio__bullet"
          />
          {{ item.label }}
        </label>
      </div>
    </div>
  </fieldset>
</template>

<script>
import Icon from '~/components/Icon'

export default {
  components: { Icon },
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    hint: {
      type: String,
      default: ''
    },
    inline: {
      type: Boolean,
      default: false
    },
    buttons: {
      type: Boolean,
      default: false
    },
    items: {
      type: Object,
      default() {
        return {}
      }
    },
    modelValue: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss">
.c-radio__btn-label {
  .c-radio__input + & {
    @apply bg-blue-500;
  }

  .c-radio__wrap:first-child & {
    @apply rounded-t;
  }

  .c-radio__wrap:last-child & {
    @apply rounded-b;
  }

  .c-radio__inline-wrap:first-child & {
    @apply rounded-l;
  }

  .c-radio__inline-wrap:last-child & {
    @apply rounded-r;
  }

  .c-radio__input:checked + & {
    @apply bg-blue-600 shadow-inner;
  }

  .c-radio__input:focus + & {
    @apply shadow-outline;
  }

  .c-radio__input:checked:focus + & {
    box-shadow: 0 0 0 3px theme('colors.blue.300'),
      inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  }
}

.c-radio__input:focus + label .c-radio__bullet {
  box-shadow: inset 0 0 0 3px theme('colors.blue.300');
}
</style>
