<template>
	<div>
	<top :tname="detail.name"  @sendback="back"></top>
<div class="main">
	<div class="con">
		<img :src="detail.images" alt="">
		<div class="coninfo">
			<h3>{{detail.name}}</h3>
			<div class="author">
				{{detail.author}}
			</div>
			<div class="bookt">{{detail.type}} 140万字</div>
			<div class="price">{{detail.serialize}}</div>
		</div>
  </div>
  <div class="reader">
  	<router-link :to="'/reader/'+detail.id">
  		<span>开始阅读</span>
  	</router-link>
  	<span class="addcase" @click="addcase">加入书架</span>
  </div>
  <p>{{detail.info}}
  </p>
	<a href="javascript:void(0)" class="menu">
		<span></span>
		<span>目录</span>
		<span>已完结</span>
		<span></span>
	</a>
</div>
<div class="comment">
	<h4>看过这本书的人还在看</h4>
	<ul>
		<li>
			<a href="">
				<img src="../assets/images/11.jpg" alt="">
				<div class="title">是第三方都是对的多所士大夫</div>
				<div class="autor">豆芽</div>
			</a>
		</li>
		<li>
			<a href="">
				<img src="../assets/images/11.jpg" alt="">
				<div class="title">是第三方都是对的多所士大夫</div>
				<div class="autor">豆芽</div>
			</a>
		</li>
		<li>
			<a href="">
				<img src="../assets/images/11.jpg" alt="">
				<div class="title">是第三方都是对的多所士大夫</div>
				<div class="autor">豆芽</div>
			</a>
		</li>
		<li>
			<a href="">
				<img src="../assets/images/11.jpg" alt="">
				<div class="title">是第三方都是对的多所士大夫</div>
				<div class="autor">豆芽</div>
			</a>
		</li>	
		<li>
			<a href="">
				<img src="../assets/images/11.jpg" alt="">
				<div class="title">是第三方都是对的多所士大夫</div>
				<div class="autor">豆芽</div>
			</a>
		</li>	
		<li>
			<a href="">
				<img src="../assets/images/11.jpg" alt="">
				<div class="title">是第三方都是对的多所士大夫</div>
				<div class="autor">豆芽</div>
			</a>
		</li>	
		<li>
			<a href="">
				<img src="../assets/images/11.jpg" alt="">
				<div class="title">是第三方都是对的多所士大夫</div>
				<div class="autor">豆芽</div>
			</a>
		</li>			
		<li>
			<a href="">
				<img src="../assets/images/11.jpg" alt="">
				<div class="title">是第三方都是对的多所士大夫</div>
				<div class="autor">豆芽</div>
			</a>
		</li>	

	</ul>
	<div class="link">
		<span>换一换</span>
		<span ></span>
	</div>
</div>
	</div>
</template>
<script>
	import top from '@/components/top'
	export default {
		data(){
			return {
				detail:{}
			}
		},
		created(){
				this.list(this.$route.params.id)
		},
		methods:{
			back(msg){
				this.$router.go(-1);
			},
			list(id){
				this.axios.post('/bookdetail', {id:id}	, response => {
     				this.detail=response.data[0];
					});
/*				this.axios.post(process.env.API_HOST+'/bookdetail',this.qs.stringify({id:id})).then((res) => {
					this.detail=res.data[0];
				})*/

			},
			addcase(){

			}
		},
	  components:{
	  	'top':top
	  }
	}

</script>
<style scoped>
.main{
	width: 100%;
	padding: 0 15px;
}
.con {
	display: flex;
	padding: 20px 0 16px;
}
.con>img{
	width: 98px;
	height:130px;
	margin-right:16px;
}
.con .coninfo{
	flex: 1;
	display: flex;
	flex-direction: column;
justify-content: center;

}
.con .coninfo h3{
	font-size:18px;
	font-weight: bold;
	color: #333;
	line-height: 23px;
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	/*! autoprefixer: off */
  -webkit-box-orient:vertical;
  /* autoprefixer: on */
	-webkit-line-clamp: 2;
}
.con .coninfo .author{
	color: #999;
	font-size:14px;
	margin:12px 0 8px;
}
.con .coninfo .bookt{
	font-size:14px;
	color: #999;
	line-height:20px;
}
.con .coninfo .price{
	font-size:14px;
	color: #999;
	line-height:20px;
	margin-top:5px;
}
.reader {
	display: flex;
}
.reader span{
	display: inline-block;
  background: #00c98d;
  color: #fff;
  height: 35px;
  line-height: 35px;
  border: 1px solid #00c98d;
  border-radius:8px;
  font-size: 14px;
  padding: 0 10px;
  text-align: center;
}
.reader .addcase{
	background: #fff;
	color: #1a1a1a;
	margin-left:10px;
}
.main p{
	line-height:22px;
	font-size: 14px;
	color: #999;
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	/*! autoprefixer: off */
	-webkit-box-orient:vertical;
	/* autoprefixer: on */
	-webkit-line-clamp:5;
	margin-top:14px;
}
.main .menu{
	display: flex;
	height: 54px;
	padding: 0 16px;
	font-size: 14px;
	color: #999;
	align-items :center;
}
.main .menu>span{
	display: inline-block;
}
.main .menu>span:nth-child(1){
	height:18px;
	width: 18px;
	margin-right:8px;
	background: url(../assets/images/menu.png) no-repeat;
	background-size: 100% 100%;
	margin-right: 8px;
}
.main .menu>span:nth-child(2){
    color: #333;
}
.main .menu>span:nth-child(3){
	font-size:12px;
	flex: 1;
	padding: 0 16px;
}
.main .menu>span:nth-child(4){
	height: 15px;
	width: 7px;
	background: url(../assets/images/san.png) no-repeat;
	background-size:5px 9px;
	background-position: center;;
	margin-left:5px;
}
.comment{
	border-top:10px solid #f8f8f8;;
}
.comment h4{
	border-left:4px solid red;
	color: #333;
	height: 16px;
	line-height: 16px;
	font-size: 14px;
	font-weight: 400;
	padding-left: 10px;
}
.comment ul{
	box-sizing: border-box;
	width: 100%;
	padding:0 16px;
	display: flex;
	justify-content:space-between;
	flex-wrap:wrap;
}
.comment ul li{
	width: 22%;
	margin-top:15px;
}
.comment ul li img{
	width: 100%;
}
.comment ul li .title{
	color: #333;
	width: 100%;
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	/*! autoprefixer: off */
	-webkit-box-orient:vertical;
	/* autoprefixer: on */
	-webkit-line-clamp: 1;
	line-height: 16px;
	height: 16px;
	font-size:12px;
}
.comment ul li .autor{
	color: #999;
	line-height: 16px;
	height: 16px;
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	/*! autoprefixer: off */
	-webkit-box-orient:vertical;
	/* autoprefixer: on */
	-webkit-line-clamp: 1;
	font-size:12px;
}
.comment .link{
	border-top: 1px solid #f3f3f3;
	width: 100%;
	height:48px;
	color: #333;
	font-size: 14;
	display: flex;
	justify-content:center;
	align-items:center;
}
.comment .link span:nth-child(1){
	color: #333;
	font-size: 14px;
}
.comment .link span:nth-child(2){
	display: inline-block;
	width:12px;
	height: 12px;
	background: url(../assets/images/xun.png) no-repeat;
	background-size: 12px;
	margin-left: 4px;
	vertical-align: middle;
}
</style>