
import http from './http.js';

let Search = {
	//搜索
   search(params) {
	   return http.post('/hotsearch',params);
   }
};
export default Search;

