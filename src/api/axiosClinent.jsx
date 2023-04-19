//import axios.js
import axios from 'axios';
//import api config
import apiConfig from './apiConfig';


// make an 'instance' of it
const instance = axios.create({

    baseURL: apiConfig.baseUrl,
    method: 'get',
    params: {
        api_key: apiConfig.apikey,
      },

});


// Also add/ configure interceptors && all the other cool stuff

axios.interceptors.response.use(function (response) {
    if (response && response.data){
        return response.data
    }
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default instance;