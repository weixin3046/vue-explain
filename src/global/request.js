import request from '@/global/api'
export default function getTest(method, apiRoute, params) {
	if( method==('post'||'POST')) {
		return request({
	      url: apiRoute,
	      method: 'post',
	      data: params || ''
	    })
	} else {
		return request({
	      url: apiRoute,
	      method: 'get',
	      params: params || ''
	    })
	}
    
  }