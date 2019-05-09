import { shallowMount } from '@vue/test-utils'
import Icon from '~/components/Icon.vue'

describe('Icon', () => {
  const wrapper = shallowMount(Icon, {
    propsData: {
      name: 'envelope',
      size: 10
    }
  })

  test('Является инстансом Vue', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Рендерит значок из SVG-спрайта с указанным параметром `name`', () => {
    expect(wrapper.find('use').attributes('href')).toBe(
      '/icons/icons.svg#envelope'
    )
  })

  test('Добавляет утилитарные классы высоты и ширины с указанным параметром `size`', () => {
    expect(wrapper.classes()).toContain('w-10')
    expect(wrapper.classes()).toContain('h-10')
  })

  test('Содержит утилитарный класс tailwindcss `fill-current`', () => {
    expect(wrapper.classes()).toContain('fill-current')
  })
})
