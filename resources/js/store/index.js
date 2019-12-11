import Vue from 'vue'
import Vuex from 'vuex'
import UINavbar from './modules/UI/navbar'
import calendar from './modules/calendar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UINavbar,
    calendar
  },
  strict: true
})
