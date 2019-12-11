const state = {
  active: true
}

const getters = {
  isActive: state => state.active
}

const mutations = {
  ON_CHANGE_ACTIVE_STATUS: state => state.active = !state.active
}

const actions = {
  onToggle: ({ commit }) => commit('ON_CHANGE_ACTIVE_STATUS')
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
