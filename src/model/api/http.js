import axios from 'axios';

const config = {
	baseURL: 'http://localhost:5500',
	timeout: 10000,
};

const instance = axios.create(config);


instance.interceptors.request.use(function (config) {
  config.headers = {
    tokenId: '9999999'
	};
    return config;
  }, function (error) {

    return Promise.reject(error);
  });


  instance.interceptors.response.use(function (response) {
	// if(response.status==200){
	// 	return Promise.resolve(response.data);
	// }
    return Promise.resolve(response);
  }, function (error) {

    return Promise.reject(error);
  });


  export default instance;
