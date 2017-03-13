import * as types from './mutation-types'

export const decrementMain = ({ commit }) => {
  commit(types.DECREMENT_MAIN_COUNTER)
}

export const incrementMain = ({ commit }) => {
  commit(types.INCREMENT_MAIN_COUNTER)
}

export const updateTimestamp = ({ commit }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      commit(types.UPDATE_TIMESTAMP)
      resolve()
    }, 200)
  })
}
