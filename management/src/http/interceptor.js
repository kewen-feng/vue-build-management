/** 拦截器封装 */

import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
  // 域名地址或者服务器的ip地址
  baseURL: 'http://127.0.0.1:4523/mock/409106',
  // 请求超时时间
  timeout: 5000,
});

// 请求拦截
service.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截
service.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
});

export default service;