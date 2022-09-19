import axios from 'axios'

// 创建一个实例
const instance = axios.create({
    baseURL:'http://m.mengxuegu.com/api/',
    timeout:8000,//超时时间
})
// 请求拦截
instance.interceptors.request.use((config)=>{
    console.log('拦截成功');
    return config
},(err)=>{
    return Promise.reject(err)
})


// 响应拦截
instance.interceptors.response.use((res)=>{
    // console.log(res);//后端响应的数据
    return res
},(err)=>{
    return Promise.reject(err)
})
export default instance