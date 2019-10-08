import http from './http.js';

let Reader = {
	//目录
	list(params) {
		return http.post('/title',params);
	},
	readbook(params){
		return http.post('/reader',params);
	}
}

export default Reader;