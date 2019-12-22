import { shallowMount } from '@vue/test-utils'
import InputGroup from '~/components/editors/InputGroup'

describe('InputGroup', () => {
  const title = 'Заголовок группы редакторов'
  const description = 'Описание группы редакторов'
  const slotContent = '<div class="slot-stub">Контент для передачи в slot</div>'

  const wrapper = shallowMount(InputGroup, {
    propsData: { title, description },
    slots: {
      default: slotContent
    }
  })

  test(`Должен рендерить элемент заголовка`, () => {
    expect(wrapper.find('[data-test-id="title"]').exists()).toBe(true)
  })

  test(`
    У элемента заголовка есть текст со значением props.title
  `, () => {
    expect(wrapper.find('[data-test-id="title"]').text()).toBe(title)
  })

  test(`Должен рендерить элемент описания`, () => {
    expect(wrapper.find('[data-test-id="description"]').exists()).toBe(true)
  })

  test(`
    У элемента описания есть текст со значением props.description
  `, () => {
    expect(wrapper.find('[data-test-id="description"]').text()).toBe(
      description
    )
  })

  test('Должен выводить содержимое переданное в <slot />', () => {
    expect(wrapper.find('div.slot-stub').html()).toBe(slotContent)
  })
})
