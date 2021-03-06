
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state: () => ({
    boardForVerif: {},
    boards: [],
    boardsByCoordinate: [],
    candidates: {
      mayors: [],
      councilors: [],
      presidents: [],
      legislators: []
    },
    candidatesForVerif: {
      legislators: [],
      presidents: []
    },
    elections: {},
    userID: undefined,
    politiContribs: [],
    loadingStatus: ''
  }),
  getters,
  actions,
  mutations,
}