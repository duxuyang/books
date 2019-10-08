
import http from './http.js';

let MainDatas = {
	//热门小说
	hotRead() {
		return http.post('/hotbook');
	},
	//免费读书
	freeRead() {
		return http.post('/freeread');
	}
}

export default MainDatas;

