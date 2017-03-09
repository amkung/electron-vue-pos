import * as types from '../mutation-types'

const state = {
  current: new Date(),
  isStart: false
}

const mutations = {
  [types.UPDATE_TIMESTAMP] (state) {
    state.current = new Date()
  },
  [types.START_UPDATE_TIMESTAMP] (state) {
    state.isStart = true
  }
}

export default {
  state,
  mutations
}
