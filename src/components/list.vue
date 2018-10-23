<template>
	<div>
		<top :tname="type"  @sendback="back"></top>
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
			type:''
		}
	},
	created(){
		this.type=this.$route.params.type;
		this.listdatas(1);
	},
	methods:{
		back(msg){
			this.$router.go(-1);
		},
		loadMore() {
			this.pi++;
		  this.loading = true;
		  var that=this;
			this.axios.post(process.env.API_HOST+'/type',this.qs.stringify({pno:that.pi,pageSize:8,type:that.type})).then((res) => {
				 this.loading = false;
				if(res.data.length){
					 for(let i of res.data){
							that.list.push(i);
					 }
				}
			})	
		},
		listdatas(pno){
			var that=this;
			this.axios.post(process.env.API_HOST+'/type',this.qs.stringify({pno:pno,pageSize:8,type:that.type})).then((res) => {
				that.list=res.data;
			})
		},
		toclick(id){
			this.$router.push('/detail/'+id)
		}
	},
  components:{
  	'top':top
  }
}
</script>
<style scoped>
	.list{
	width: 100%;
	padding:0 15px;
}
.list ul li{
	display: flex;
	padding: 15px 0;
 border-bottom: 1px solid #f0f1f2;
}
.list ul li img{
	width: 66px;
	height: 90px;
}
.list ul li .book-detail{
	flex: 1;
	margin-left: 20px;
	position: relative;
}
.list ul li .book-detail h3{
	font-size: 16px;
}
.list ul li .book-desc{
	display: -webkit-box;
	/*! autoprefixer: off */
  -webkit-box-orient:vertical;
  /* autoprefixer: on */
  -webkit-line-clamp:2;
  overflow: hidden;
  font-size: 14px;
  margin-top:5px;
}
.list ul li .book-meta{
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	font-size: 0;
	line-height: 20px;
}
.list ul li .book-meta>span{
	display: inline-block;
}
.list ul li .book-meta .author{
	font-size: 14px;
	color: grey;
	float: left;

}
.list ul li .book-meta .type{
	font-size: 13px;
	color: #f16299;
	float: right;
	margin-left: 10px;
}
.list ul li .book-meta .ser{
  color: #f69a48;
  font-size: 13px;
  float: right;
	
}

</style>
