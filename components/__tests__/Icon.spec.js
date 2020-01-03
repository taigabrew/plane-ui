import { shallowMount } from '@vue/test-utils'
import Icon from '~/components/Icon.vue'

describe('Icon', () => {
  const wrapper = shallowMount(Icon, {
    propsData: {
      name: 'envelope'
    }
  })

  test('Рендерит значок из SVG-спрайта с указанным параметром `name`', () => {
    expect(wrapper.find('use').attributes('href')).toBe('/icons.svg#envelope')
  })

  test('Содержит атрибут aria-hidden со значением "true"', () => {
    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })

  test('Содержит атрибут focusable со значением "false"', () => {
    expect(wrapper.attributes('focusable')).toBe('false')
  })
})
