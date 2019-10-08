import http from './http.js';

 let List = {
	//列表
	list(params) {
		return http.post('/type',params);
	}
};
export default List;
