import axios from 'axios'
import {
	MessageBox,
	Message
} from 'element-ui'
//配置环境
// if (process.env.NODE_ENV == 'development') {    
//     axios.defaults.baseURL = '....';
// } else if (process.env.NODE_ENV == 'debug') {    
//     axios.defaults.baseURL = '....';
// } else if (process.env.NODE_ENV == 'production') {    
//     axios.defaults.baseURL = '....';
// }
axios.defaults.timeout = 10000;
//设置请求头，如果没有需要传递的参数就不传
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const service = axios.create({
	timeout: 5000 // request timeout
})
service.interceptors.request.use((config) => {
	//此处是请求之前需要的操作
	//例如获取token添加等
	config.headers['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbjQ1NiIsInVzZXJfbmFtZSI6ImFkbWluNDU2Iiwic2NvcGUiOlsidXNlcl9pbmZvIl0sImlzcyI6Imh0dHA6Ly9zZXJ2ZXIuc3NvLmNvbSIsImFjY291bnRPcGVuQ29kZSI6IjAwNzBkZWQ3LTUyN2QtNDBiMS05MDdiLTExZTMzOGMwMzc5ZSIsImV4cCI6MTU3NzM2NTg5OCwiZ3JhbnRUeXBlIjoicGFzc3dvcmQiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiYjlmNzY5MzktNTgxMS00MzZhLWExYjctZmE5OTcwYzM0MGMzIiwiY2xpZW50X2lkIjoidWx0cmEtanVkZ2VtZW50LXBsYXRmb3JtLWlkLTIwMSJ9.Q9Hr9SRGLWBOzfgJfmsj4Ueh_iIQGLmsU9zA9t4EdbL5LME0YJHby8Rb5LphHOG6InuZ7mYOrZCa0L7f1YikaIymvmZXDmIb43c0kEmb4vHKxjWA-UGwJHVPXntmRwwfZ1HNRpkf-l4JcVNceJZtdSt-mz411kgrTXh0NACG-xg'
	return config
}, (error) => {
	console.log(error) // for debug
  return Promise.reject(error)
})

service.interceptors.response.use((response) => {
		const res = response.data
		if(res.status != 200){
			Message({
				message: res.err,
				type: 'error',
				duration: 5 * 1000
			})
		}else{
			return res
		}
		//下面代码可以判断返回的状态码等做一些判断处理
		
	},
	error => {
		console.log('err' + error) // for debug
		Message({
			message: error.message,
			type: 'error',
			duration: 5 * 1000
		})
		return Promise.reject(error)
	})

export default service