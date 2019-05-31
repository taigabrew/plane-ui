import { shallowMount } from '@vue/test-utils'
import Icon from '~/components/Icon.vue'

describe('Icon', () => {
  const wrapper = shallowMount(Icon, {
    propsData: {
      name: 'envelope'
    }
  })

  test('Является инстансом Vue', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Рендерит значок из SVG-спрайта с указанным параметром `name`', () => {
    expect(wrapper.find('use').attributes('href')).toBe('/icons.svg#envelope')
  })
})
