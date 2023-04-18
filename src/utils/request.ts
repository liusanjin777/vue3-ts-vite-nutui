import axios from 'axios'
// import { MessageBox, Message } from 'element-ui'
// import store from '@/store'
// import { getAdminToken,getToken } from '@/utils/auth'
import router from '@/router'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 60000 
})

// request interceptor
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers.common['token'] = getToken();
    //   config.headers.Authorization = `Bearer ${getToken()}`;
    //   if(store.getters.userInfo){
    //     config.headers.common['userName'] = store.getters.userInfo.account;
    //     config.headers.common['userId'] = store.getters.userInfo.id;
    //   }
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res =response.data
    if(res.message){
      // if (res.message.code !== 0) {
      //   if (res.message && (res.message.code === -2 || res.message.code === -20002 || res.message.code == 10133 || res.message.code == 10157)) {
      //     store.dispatch('user/logout');
      //     router.push({
      //       path: '/login'
      //     })
      //     // window.location.href = `${process.env.VUE_APP_ucUrl}/login?clientId=${process.env.VUE_APP_clientId}&redirectUrl=${window.location.origin}/#/`
      //   }
      //   return res
      // } else if (res.message.code === 'TOKEN_AUTH_ERROR') {
      //   store.dispatch('user/logout')
      //   router.push({
      //     path: '/login'
      //   })
      //   // window.location.href = `${process.env.VUE_APP_ucUrl}/login?clientId=${process.env.VUE_APP_clientId}&redirectUrl=${window.location.origin}/#/`
      // } else {
      //   return res
      // }
    }
    // if(response.config.isReturnNativeResponse){
      return response
    // }
  },
  error => {
    if (!error.response) {
      // Message({
      //   message: '请求失败，服务端无响应.',
      //   type: 'error',
      //   duration: 5 * 1000
      // });
      return Promise.reject(error)
    }
    if (error.response.status && error.response.status === 400 && error.response.data.message) {
      // Message({
      //   message: typeof error.response.data.message === 'object' ? error.response.data.message.message : error.response.data.message,
      //   type: 'error',
      //   duration: 5 * 1000
      // })
    } else if (error.response.status === 401) {
      // store.dispatch('user/logout')
      // location.href = `${envConfig.VUE_APP_ucUrl || process.env.VUE_APP_ucUrl}/login?clientId=${envConfig.VUE_APP_clientId || process.env.VUE_APP_clientId}&redirectUrl=${window.location.origin}/#/`
    } else {
      // Message({
      //   message: error.message,
      //   type: 'error',
      //   duration: 5 * 1000
      // })
    }
    return Promise.reject(error)
  }
)

export default service
