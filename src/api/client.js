import axios from 'axios'
import store from '@/store'
import router from '@/router'

const client = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const authInterceptor = (config) => {
  let token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }
  return config
}

client.interceptors.request.use(authInterceptor)

const errorInterceptor = (err) => {
  if (err.response && err.response.status === 401) {
    store.dispatch('auth/logout')
    router.push('/login')
  }
  return Promise.reject(err)
}

client.interceptors.response.use(undefined, errorInterceptor)

export default client
