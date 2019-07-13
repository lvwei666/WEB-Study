import axios from 'axios';

axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://localhost:3000'

axios.interceptors.response.use((res) => {
  if (res.status !== 200) {
    window.alert('网络异常');
    return Promise.reject(res);
  }
  return res;
}, (err) => {
  window.alert('网络异常');
  return Promise.reject(err)
})

export default function $axios () {
  return axios;
}