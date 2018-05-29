/**
 * created by estella   2018/4/5
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const store = new Vuex.Store({
  state: {
    roles: sessionStorage.roles,
    username: sessionStorage.username
  },
  getter: {

  },
  mutations: {
    refreshUserInfo () {
      store.state.roles = sessionStorage.getItem('roles')
      store.state.username = sessionStorage.getItem('username')
    }
  },
  actions: {

  }
})

export default store;
