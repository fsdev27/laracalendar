/**
 * Import neccessary api/libraries
 */
import { listOfDaysOfMonth, updateListOfDaysOfMonth } from '@/utilities/my-dates'
import { postEvent } from '@/api/events'

// https://vuex.vuejs.org/guide/state.html
// Single state tree
const state = {
  items: null,
  saved: false
}

// https://vuex.vuejs.org/guide/getters.html
// Compute devired state based on state
const getters = {
  isSaved: state => state.saved,
  listOfAvailableDay: state => state.items ? state.items : listOfDaysOfMonth()
}

// https://vuex.vuejs.org/guide/mutations.html
// The handler function is where we perform actual state modifications
const mutations = {
  CHANGE_SAVED_STATUS: state => state.saved = !state.saved,
  UPDATE_ITEMS: (state, payload) => state.items = updateListOfDaysOfMonth(payload)
}

/**
 * Actions are similar to mutations, the differences being that:
 * Instead of mutating the state, actions commit mutations.
 * Actions can contain arbitrary asynchronous operations.
 * https://vuex.vuejs.org/guide/actions.html
 */
const actions = {
  onCreateEvent: ({ commit }, payload) => {
    postEvent(payload).then((response) => {
      commit('UPDATE_ITEMS', response)
    })
  },
  onUpdateSaved: ({ commit }) => commit('CHANGE_SAVED_STATUS')
}

// Export object
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
