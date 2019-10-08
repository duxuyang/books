import http from './http.js';

 let Login = {
	//热门小说
	login(params) {
		return http.post('/users/login',params);
	}
};
export default Login;


