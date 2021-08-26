/** 拦截器封装 */

import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
  // 域名地址或者服务器的ip地址
  baseURL: 'https://www.fastmock.site/mock/a1b1e6abbb15c67c1e083712b3e874ec/manage/',
  // 请求超时时间
  timeout: 5000,
  // 统一的请求头
  headers: {'Content-Type': 'application/json'}
});

// 请求拦截
service.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截
service.interceptors.response.use(response => {
  if (response.data.code === "10000") return response;
  else if (response.data.code === "403") {
    return Promise.reject(response);
  }
}, error => {
  return Promise.reject(error);
});

export default service;