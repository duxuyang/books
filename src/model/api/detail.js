
import http from './http.js';

let DetailDatas = {
	//详情
	detail(params) {
		return http.post('/bookdetail',params);
	},
}

export default DetailDatas;