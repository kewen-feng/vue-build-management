/** 根据实际业务二次封装 axios */

import service from './interceptor';

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
    if (res.data.code == 10000) return res.data.data;
    else return;
  }).catch(error => {
    console.log('service', error)
    if (error.response.status == 404) {
      alert(404)
    }
    return;
  })

}

export default request;

