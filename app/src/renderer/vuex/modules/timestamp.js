import * as types from '../mutation-types'

const state = {
  current: new Date()
}

const mutations = {
  [types.UPDATE_TIMESTAMP] (state) {
    state.current = new Date()
  }
}

export default {
  state,
  mutations
}
