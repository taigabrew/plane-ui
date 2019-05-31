import { shallowMount } from '@vue/test-utils'
import BaseInput from '~/components/editors/BaseInput'

let wrapper = null
const id = 'input-id'
const label = 'Метка поля'
const hintText = 'Какая-то подсказка'

beforeEach(() => {
  wrapper = shallowMount(BaseInput, {
    propsData: { label, id }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('BaseInput', () => {
  test('Рендерит label', () => {
    expect(wrapper.find('[data-test-id="label"]').exists()).toBe(true)
  })

  test('У лэйбла есть аттрибут for со значением равным props.id', () => {
    expect(wrapper.find('[data-test-id="label"]').attributes('for')).toBe(id)
  })

  test('У лэйбла есть текст со значением равным props.label', () => {
    expect(wrapper.find('[data-test-id="label"]').text()).toBe(label)
  })

  test('По умолчанию рендерит поле ввода в виде <input>', () => {
    expect(wrapper.find('[data-test-id="field"]').is('input')).toBe(true)
  })

  test(`
    Рендерит поле ввода в виде <textarea>,
    если props.textarea === true
  `, () => {
    wrapper.setProps({
      textarea: true
    })

    expect(wrapper.find('[data-test-id="field"]').is('textarea')).toBe(true)
  })

  test(`
    По умолчанию у поля ввода аттрибут type === 'text'
  `, () => {
    expect(wrapper.find('[data-test-id="field"]').attributes('type')).toBe(
      'text'
    )
  })

  test(`
    У поля ввода аттрибут type равен props.type
  `, () => {
    const someType = 'email'
    wrapper.setProps({ type: someType })

    expect(wrapper.find('[data-test-id="field"]').attributes('type')).toBe(
      someType
    )
  })

  test(`
    У поля ввода нет аттрибута type,
    если props.textarea === true
  `, () => {
    wrapper.setProps({ textarea: true })

    expect(
      wrapper.find('[data-test-id="field"]').attributes('type')
    ).toBeFalsy()
  })

  test(`
    По умолчанию у поля ввода нет аттрибута aria-describedby
  `, () => {
    expect(
      wrapper.find('[data-test-id="field"]').attributes('aria-describedby')
    ).toBeFalsy()
  })

  test(`
    У поля ввода есть аттрибут id со значением равным props.id
  `, () => {
    expect(wrapper.find('[data-test-id="field"]').attributes('id')).toBe(id)
  })

  test(`
    У поля ввода есть аттрибут name со значением равным props.id
  `, () => {
    expect(wrapper.find('[data-test-id="field"]').attributes('name')).toBe(id)
  })

  test(`
    По умолчанию у поля ввода нет аттрибута required
  `, () => {
    expect(
      wrapper.find('[data-test-id="field"]').attributes('required')
    ).toBeFalsy()
  })

  test(`
    У поля ввода есть аттрибут required,
    если props.required === true
  `, () => {
    wrapper.setProps({ required: true })

    expect(wrapper.find('[data-test-id="field"]').attributes('required')).toBe(
      'required'
    )
  })

  test(`
    По умолчанию у поля ввода нет аттрибута aria-required
  `, () => {
    expect(
      wrapper.find('[data-test-id="field"]').attributes('aria-required')
    ).toBeFalsy()
  })

  test(`
    У поля ввода есть аттрибут aria-required,
    если props.required === true
  `, () => {
    wrapper.setProps({ required: true })

    expect(
      wrapper.find('[data-test-id="field"]').attributes('aria-required')
    ).toBe('true')
  })

  test(`
    В поле ввода аттрибут value привязан к props.value
  `, () => {
    const someValue = 'Какое-то значение'
    wrapper.setProps({ value: someValue })

    expect(wrapper.find('[data-test-id="field"]').attributes('value')).toBe(
      someValue
    )
  })

  test(`
    'update' является cобытием компонента для v-model
  `, () => {
    expect(typeof wrapper.vm.update).toBe('function')
  })

  test(`
    В поле ввода на событии input,
    компонент отправляет родетелю событие 'update' со значением value поля ввода
  `, () => {
    const field = wrapper.find('[data-test-id="field"]')
    const someValue = 'Какое-то значение'

    field.element.value = someValue
    field.trigger('input')

    expect(wrapper.emitted().update[0]).toEqual([someValue])
  })

  test(`
    По умолчанию элемент подсказки отсутствует
  `, () => {
    expect(wrapper.find('[data-test-id="hint"]').exists()).toBe(false)
  })

  test(`
    Отображает элемент подсказки,
    если есть props.hint
  `, () => {
    wrapper.setProps({
      hint: hintText
    })

    expect(wrapper.find('[data-test-id="hint"]').isVisible()).toBe(true)
  })

  test(`
    Выводит текст в элементе подсказки,
    который передали в props.hint
  `, () => {
    wrapper.setProps({
      hint: hintText
    })

    expect(wrapper.find('[data-test-id="hint"]').text()).toBe(hintText)
  })

  test(`
    У элемента подсказыки есть id равный props.id + 'hint',
    если есть props.hint
  `, () => {
    wrapper.setProps({
      hint: hintText
    })

    expect(wrapper.find('[data-test-id="hint"]').attributes('id')).toBe(
      `${id}hint`
    )
  })

  test(`
    По умолчанию кнопка переключения видимости пароля отсутствует
  `, () => {
    expect(
      wrapper.find('[data-test-id="togglePasswordVisibility"]').exists()
    ).toBe(false)
  })

  test(`
    Кнопка переключения видимости пароля видна,
    если props.type === 'password'
  `, () => {
    wrapper.setProps({ type: 'password' })

    expect(
      wrapper.find('[data-test-id="togglePasswordVisibility"]').exists()
    ).toBe(true)
  })

  test(`
    По умолчанию vm.passwordType === 'password'
  `, () => {
    expect(wrapper.vm.passwordType).toBe('password')
  })

  test(`
    При нажатии на кноку переключения видимости пароля,
    vm.passwordType меняется на 'text' если предыдущее значение 'password',
    или на 'passoword', если предыдущее значение 'text'.
  `, () => {
    wrapper.setProps({ type: 'password' })
    wrapper.vm.passwordType = 'password'

    wrapper.find('[data-test-id="togglePasswordVisibility"]').trigger('click')
    expect(wrapper.vm.passwordType).toBe('text')
    wrapper.find('[data-test-id="togglePasswordVisibility"]').trigger('click')
    expect(wrapper.vm.passwordType).toBe('password')
  })
})
