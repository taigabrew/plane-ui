import Vue from 'vue'

export const store = Vue.observable({
  isOpenedSideNav: false
})

export const mutations = {
  toggleSideNav() {
    store.isOpenedSideNav = !store.isOpenedSideNav
  }
}
