<template>
  <fieldset class="c-input-wrap">
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
        class="flex items-center"
        :class="{
          'mr-4': inline && !buttons,
          'mb-2': !inline && !buttons,
          'c-radio-inline-wrap': inline,
          'c-radio-wrap': !inline
        }"
      >
        <input
          :id="`radio${key}`"
          type="radio"
          :value="key"
          :name="`radio${id}`"
          :checked="modelValue === key"
          class="absolute opacity-0 radio-input"
          @change="$emit('change', key)"
        />
        <svg
          v-if="!buttons"
          class="w-6 h-6 fill-current text-blue-500 rounded-full transition mr-1"
        >
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            :xlink:href="
              `/icons.svg#${
                modelValue === key ? 'circle-with-bullet' : 'circle'
              }`
            "
          />
        </svg>
        <label
          :for="`radio${key}`"
          class="text-sm"
          :class="
            buttons
              ? 'text-white px-5 py-2 transition cursor-pointer hover:bg-blue-600 active:bg-blue-500 select-none font-light tracking-wide'
              : 'text-gray-700'
          "
          >{{ item.label }}</label
        >
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
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
.radio-input:focus {
  + svg {
    box-shadow: inset 0 0 0 3px theme('colors.blue.300');
  }
  + label {
    @apply shadow-outline;
  }
}

.radio-input + label {
  @apply bg-blue-500;
}

.radio-input:checked + label {
  @apply bg-blue-600 shadow-inner;
}
.radio-input:checked:focus + label {
  box-shadow: 0 0 0 3px theme('colors.blue.300'),
    inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}

.c-radio-inline-wrap:first-child label {
  @apply rounded-l;
}

.c-radio-inline-wrap:last-child label {
  @apply rounded-r;
}

.c-radio-wrap:first-child label {
  @apply rounded-t;
}

.c-radio-wrap:last-child label {
  @apply rounded-b;
}
</style>
