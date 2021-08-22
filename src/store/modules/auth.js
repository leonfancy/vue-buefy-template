// import client from "@/api/client";

export default {
  namespaced: true,
  state: {
    isLoggedIn: !!localStorage.getItem('token'),
    user: {}
  },
  mutations: {
    setLoggedIn(state, token) {
      state.isLoggedIn = true
      localStorage.setItem('token', token)
    },
    logout(state) {
      state.isLoggedIn = false
      localStorage.removeItem('token')
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    login({commit}, data) {
      commit('setLoggedIn', data.email)
      // return new Promise((resolve, reject) => {
      //   client.post('/login', data)
      //     .then(resp => {
      //       commit('setLoggedIn', resp.data.accessToken)
      //       resolve(resp)
      //     })
      //     .catch(err => {
      //       localStorage.removeItem('token')
      //       reject(err)
      //     })
      // })
    },
    signup({commit}, data) {
      commit('setLoggedIn', data.email)
      // return new Promise((resolve, reject) => {
      //   client.post('/signup', data)
      //     .then(resp => {
      //       commit('setLoggedIn', resp.data.accessToken)
      //       resolve(resp)
      //     })
      //     .catch(err => {
      //       localStorage.removeItem('token')
      //       reject(err)
      //     })
      // })
    },
    logout({commit}) {
      commit('logout')
    },
    loadUser({commit}) {
      commit('setUser', {
        name: 'Liang',
        email: 'slimhigh@gmail.com'
      })
    }
  },
}
