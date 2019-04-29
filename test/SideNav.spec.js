import { mount } from '@vue/test-utils'
import SideNav from '@/components/SideNav.vue'

describe('SideNav', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SideNav)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
