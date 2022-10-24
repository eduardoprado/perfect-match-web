import axios from 'axios';

export default axios.create({
  withCredentials: true,
  baseURL: 'https://perfect-match-backend.herokuapp.com/',
});