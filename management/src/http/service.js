/** 全局请求封装 */

import axios from 'axios';
// import router from '@/router';

// 实例化 axios
const service = axios.create({
  // 域名地址或者服务器的ip地址
  baseURL: 'https://www.fastmock.site/mock/a1b1e6abbb15c67c1e083712b3e874ec/manage/',
  // 请求超时时间
  timeout: 3000,
  // 默认请求头
  header: {'Content-Type': 'application/json'}
})

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

// 请求拦截
service.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截
service.interceptors.response.use(response => {
  if (response.data.code === '10000') return response.data;
  else if (response.data.code === '403') {
    source.cancel('Operation canceled by the user.');
    // return Promise.resolve(router.replace(`/login?redirect=${encodeURIComponent(router.currentRoute.fullPath)}`));
  }
}, error => {
  return Promise.reject(error);
});

export default service;

