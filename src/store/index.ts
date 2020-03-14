import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settingData: {
      bgImage: '',
      logoImage: '',
      title: '',
      subTitle: '',
      address: '',
      weixinImage: '',
      relationWay: '',
      weiboLink: ''
    },
    fullScreenData: []
  },
  mutations: {
    setting(state, params) {
      state.settingData = params;
    },
    setFullScreenData(state, params) {
      state.fullScreenData = params;
    }
  },
  actions: {
  },
  modules: {
  }
})
