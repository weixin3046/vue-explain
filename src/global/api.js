import axios from 'axios'
// import store from '@/store'
 // 创建axios实例
const service = axios.create({
  baseURL: 'https://www.vue-js.com/api/v1',
  timeout: 15000 // 请求超时时间
})
service.interceptors.request.use(
	config => {
  // store.state.isShow=true; //在请求发出之前进行一些操作
  console.log(config)
  console.log('请求成功');
  return config
},error => {
	// 请求错误则向store commit这个状态变化
	console.log('请求错误');
	console.log(error);
	return Promise.reject(error)
});
service.interceptors.response.use(
    function(response) {
      //请求正常则返回
      console.log('响应成功');
      return Promise.resolve(response)
    },
    function(error) {
      // 请求错误则向store commit这个状态变化
      const httpError= {
        hasError:true,
        status:error.response.status,
        statusText:error.response.statusText
      }
      console.log('响应错误');
      console.log(httpError)
      // store.commit('ON_HTTP_ERROR', httpError)
      return Promise.reject(error)
    }
  )

  export default service