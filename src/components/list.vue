<template>
	<div>
		<top tname="分类"  @sendback="back"></top>
		<div class="typelist">
			<ul>
				<li>
					<div class="typeleft" @click="all">
						<span class="typename">{{name}}</span>
					  <span :class="[xiala,{shouqi:show}]"></span>
					</div>
				</li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<div class="listname" v-show="show">
			<ul>
				<li v-for="(val,key) in typename" @click="typefun(val,key)">
					<span :class="{active:key==index}">{{val}}</span>
				</li>
			</ul>
		</div>
		<div class="modal" v-show="show"></div>
		<div class="list">
			<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
				<li v-for="item in list" @click="toclick(item.id)">
					<img :src="item.images" alt="">
					<div class="book-detail">
						<h3>{{item.name}}</h3>
						<p class="book-desc">
							{{item.info}}
						</p>
						<div class="book-meta">
							<span class="author">{{item.author}}</span>
							<span class="type">{{item.type}}</span>
							<span class="ser">{{item.serialize}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import top from '@/components/top'
export default {
	data(){
		return {
			list:[],
			pi:1,
			index:0,
			xiala:"xiala",
			show:false,
			name:'全部',
			typename:['全部','玄幻','修真','都市','历史','网游','科幻','言情','其他']
		}
	},
	created(){
		//this.$route.meta.keepAlive=true;
		//this.type=this.$route.params.type;
		this.listdatas(1);
	},
	methods:{
		back(msg){
			this.$router.go(-1);
			//console.log(this.$route)
			//this.$route.meta.keepAlive=false;
			this.$destroy();
		},
		loadMore() {
			this.pi++;
		  this.loading = true;
		  var that=this;
		  this.axios.post('/type',{pno:that.pi,pageSize:8,type:that.name},response=>{
     				this.loading = false;
     		if(response.data.length){
					 for(let i of response.data){
							that.list.push(i);
					 }
				}
			});
/*			this.axios.post(process.env.API_HOST+'/type',this.qs.stringify({pno:that.pi,pageSize:8,type:that.type})).then((res) => {
				 this.loading = false;
				if(res.data.length){
					 for(let i of res.data){
							that.list.push(i);
					 }
				}
			})*/
		},
		listdatas(pno){
			var that=this;
			this.axios.post('/type', {pno:pno,pageSize:8,type:that.name},response => {
						that.list=response.data;
			});
/*			this.axios.post(process.env.API_HOST+'/type',this.qs.stringify({pno:pno,pageSize:8,type:that.type})).then((res) => {
				that.list=res.data;
			})*/
		},
		toclick(id){
			this.$router.push('/detail/'+id)
		},
		typefun(val,index){
			this.index=index;
			this.name=val;
			this.listdatas(1);
			this.show?this.show=false:this.show=true;
		},
		all(){
			this.show?this.show=false:this.show=true;
		}
	},
  components:{
  	'top':top
  },
/*   destroyed(){
  	console.log("销毁");
  }
 activated(){
  	console.log("keep-alive 组件激活");
  },
  deactivated(){
  	console.log("keep-alive 组件停用");
  }*/
}
</script>
<style scoped src="../assets/css/list.css"></style>
