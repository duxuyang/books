<template>
	<div>
		<top tname="搜索中心"  @sendback="back"></top>
		<div class="smain">
			<div class="scon">
				<span class="iconfont icon-sousuo1"></span>
				<form action="" @submit.prevent="search">
					<input type="text" placeholder="盛世娇宠之名门闺香" v-model="bookval">
				</form>
			</div>
			<div class="search" @click="search">搜索</div>
		</div>
		<div clas="hotbooks">
			<div class="hotname">热门搜索</div>
			<div class="hotlist">
				<ul>
					<li v-for="(val,im) in hotlist" @click="hlist(val.id)"><span class="iconfont icon-shu"></span><span>{{val.name}}</span></li>
				</ul>
			</div>
		</div>
		<div class="box1" v-show="islist">
			<ul>
				<li v-for="(val,index) in list" @click="dlist(val.id)"><span class="iconfont icon-shu"></span><span>{{val.name}}</span></li>
			</ul>
		</div>
		
	</div>
</template>
<script>
const top = () => import('@/components/top')

	export default {
		data () {
			return {
				bookval:'',  //input value
				list:[],   //查询列表
				islist:false,
				hotlist:[]   //热门搜索
			}
		},
		created(){
				this.hotsearch();
/*				this.axios.post('/ceshi', {id:'124',name:'tom'}	, response => {
     				console.log(response.data)
					});*/
		},
		methods:{
			back(msg){
				this.$router.go(-1);
			},
			search(){//单击搜索
				if(this.bookval){
					this.common(this.bookval);
				}else{
					this.bookval="盛世娇宠之名门闺香";
					this.common("盛世娇宠之名门闺香");
				}
			},
			common(name){
				var that=this;
				this.axios.post('/search', {name:name},response => {
						this.islist=true;
						that.list=response.data;
					});
			},
			dlist(id){//单击列表跳转
				this.$router.push('/detail/'+id); 
			},
			hlist(id){//单击热门搜索列表跳转
					this.$router.push('/detail/'+id); 
			},
			hotsearch(){ //热门搜索
				var that=this;
				 this.axios.post('/hotsearch', {}	, response => {
						that.hotlist=response.data;
					});
			}
		},
		watch:{
			bookval(){
				this.bookval?this.common(this.bookval):this.islist=false;
			}
		},
	  components:{
	  	'top':top
	  }
	}
	
</script>
 <style scoped src="../assets/css/search.css"></style>