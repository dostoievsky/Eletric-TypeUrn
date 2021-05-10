import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-18-234-80-101.compute-1.amazonaws.com:3000/',
});

export default api;
