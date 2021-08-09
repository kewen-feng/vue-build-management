import axios from 'axios';

/** 创建 axios 实例 */
const service = axios.create({
  baseURL: process.env.BASE_API, // 当前 Node 环境下的配置地址
  timout: 5000 // 请求超时时间
})

/** requeset拦截器 */
service.interceptors.request.request(config => {
  // 发送前操作
  return congfig;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

/** respone 拦截器 */
service.interceptors.reponse.request( response => {
  // 响应数据进行操作
  return response;
}, error => {
   // 超出 2xx 范围的状态码都会触发该函数
  return Promise.reject(error);
});

export default service;