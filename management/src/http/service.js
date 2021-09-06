/** 全局请求封装 */

import axios from 'axios';
import router from '@/router';
import element from 'element-ui';

// 实例化 axios
const service = axios.create({
  // 域名地址或者服务器的ip地址
  baseURL: 'http://localhost:3000',
  // 请求超时时间
  timeout: 3000,
  // 默认请求头
  headers: {'Content-Type': 'application/json'}
})

// 请求拦截
service.interceptors.request.use(config => {
  if (sessionStorage.getItem('token')) {
    let token = sessionStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截
service.interceptors.response.use(response => {
  if (response.data.code === 10000) return response.data;
}, error => {
    console.dir(error)
    console.log(error.config.timeout)
    // console.log(error.code === 'ECONNABORTED')
  if (!error) return Promise.reject(error);
  if (!error.response) {
    switch (error.message) {
      case 'Network Error':
        error.message = '链接服务器错误!';
        break;
      case `timeout of ${error.config.timeout}ms exceeded`:
        error.message = `持续${error.config.timeout / 1000}s无响应!`;
        break;
    }
    element.Message.error(error.message);
    return Promise.reject(error.message);
  }
  if (error.response) {
    switch (error.response.status) {
      case 200:
        error.message = '错误响应也会有状态码为200的情况'
        break
      case 400:
        error.message = '请求错误(400)'
        break
      case 403:
        error.message = '没有登录或登录已失效(403)'
        router.replace(`/login?redirect=${encodeURIComponent(router.currentRoute.fullPath)}`)
        break
      case 404:
        error.message = '请求出错(404)'
        break
      case 405:
        error.message = '请求方法错误(405)'
        break
      case 500:
        error.message = '服务器错误(500)'
        break
      case 504:
        error.message = '网络超时(504)'
        break
      default:
        error.message = `连接出错，状态码：(${error.response.status})!`
    }
  }
  return Promise.reject(error);
});

export default service;

