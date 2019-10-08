
import http from './http.js';

export default {
	//详情
	userInfo(params) {
		return http.post('/users/myinfo',params);
	},
}

// export default User;