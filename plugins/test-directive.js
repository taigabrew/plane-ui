import Vue from 'vue'

Vue.directive('test', {
  inserted(el, binding) {
    if (process.env.NODE_ENV === 'test') {
      Object.keys(binding.value).forEach(key => {
        el.setAttribute(`data-test-${key}`, binding.value[key])
      })
    }
  }
})
