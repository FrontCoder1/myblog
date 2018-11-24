import axios from 'axios'
import server from '../server'
import utils from '../utils'
import router from 'Router/index'

const service = axios.create({
  baseURI: server['base'],
  timeout: 5000
})
service.interceptors.request.use(
  config => {
    if (utils.getStorage('token')) {
      config.headers['X-Token'] = utils.getStorage('token')
      config.headers['User-Type'] = utils.getStorage('userName')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log(error)
    if (error.response) {
      switch (error.response.status) {
        case 401:
        case 403:
          utils.removeItem('token')
          router.replace('/admin/login')
      }
    }

    return Promise.reject(error)
  }
)

export default service
