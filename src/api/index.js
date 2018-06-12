import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000'; //设置默认的请求路径
axios.interceptors.response.use((res)=>{
  return res.data;       //拦截器，返回原来的结果的data属性
}); 
// 获取轮播图数据 , 返回的是一个promise对象
export let getSliders = () => {
  return axios.get('/sliders');
};
export let getHotBook = () => {
  return axios.get('/hot');
};
export let getBooks=()=>{     //获取所有图书
  return axios.get('/book');
};
export let removeBook=(id)=>{
  axios.delete(`/book?id=${id}`);  //删除返回空对象
  //更新前台数据
};
export let findOneBook=(id)=>{
  return axios.get(`/book?id=${id}`);
};