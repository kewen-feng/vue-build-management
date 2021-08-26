/** 根据实际业务二次封装 axios */

import service from './interceptor';
import router from '@/router';

/**
 * 请求封装
 * @param {}
 */
const request = (ajaxParams) => {
  let url = ajaxParams.url;
  let method = ajaxParams.method;
  let data = ajaxParams.data || {};
  return service({
    url,
    method,
    data
  }).then(res => {
    if (res.data.code == "10000") return res.data.data;
    else return;
  }).catch(error => {
    if (error.data.code === '403') return router.replace('/login?redirect=' + encodeURIComponent(router.currentRoute.fullPath));
  })

}

export default request;

