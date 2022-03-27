import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 60000,
})

// 访问令牌
const accessToken = 'sweeney.chen'

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    if (accessToken) {
      // 将访问令牌添加到请求头中
      config.headers['AccessToken'] = accessToken
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  },
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log('err' + error)
    return Promise.reject(error)
  },
)

export default request
