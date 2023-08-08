import axios from 'axios'
// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL, // url = base url + request url
  baseURL: '', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    config.url = config.url.replace('/app/ctm01antifraud', '/ctm01antifraud')
    config.headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('hsja_X_token_base')}`,
    }
    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res instanceof Blob) {
      return response
    }

    if (res.code !== 0 && res.code !== '0' && res.code !== 200) {
      console.log(res.msg || res.message)
      return Promise.reject(new Error(res.msg || res.message || 'Error'))
    } else {
      return res.data
    }
  },
  (error) => {
    console.warn(error.message)
    return Promise.reject(error)
  }
)

export default service
