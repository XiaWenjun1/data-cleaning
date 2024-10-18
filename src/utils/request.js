//axios
import axios from 'axios'

const request = axios.create({
    baseUrl: 'https://jsonplaceholder.typicode.com/todos/1',
    timeout: 5000
})

//Request Interceptor
request.interceptors.request.use(
    config => {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      console.log('Request Sent:', config);
      return config;
    },
    error => {
      return Promise.reject(error);
    }
);

//Response Interceptor
request.interceptors.response.use(
    response => {
      console.log('Response Received:', response);
      return response;
    },
    error => {
      if (error.response.status === 401) {
        console.error('Unauthorized, redirecting to login...');
      } else if (error.response.status === 500) {
        console.error('Server Error');
      }
      return Promise.reject(error);
    }
);
  
export {request}