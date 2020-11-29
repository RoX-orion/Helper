import axios from 'axios'
import { Message } from 'element-ui'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code != 200) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000,
        showClose: true,
        center: true,
      })
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service