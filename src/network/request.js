
import axios from 'axios'
export function request(config) {
  const instance=axios.create({
    baseURL :'http://152.136.185.210:8000/',
    timeout:5000
  })
  //axios拦截器
  /*instance.interceptors.request.use(conf=>{//conf返回参数随便取
    //console.log(conf);
    //这里对conf进行处理，如何处理看各位项目需求
    return conf//这一步要记住，拦截不是阻止，拦截后还要返回的
  }),err=>{
    console.log(err);
  }*/
  //响应拦截
  /*instance.interceptors.response.use(conf=>{
    //console.log(conf);
    return conf.data
  }),err=>{
    console.log(err);
  }*/
  return instance(config)

}
