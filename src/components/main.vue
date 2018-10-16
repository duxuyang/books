<template>
	<div>
<div class="header">
	<ul>
		<li @click="user">
			<img src="../assets/images/user.png" alt="">
		</li>
		<li @click="booklist">
			<img src="../assets/images/bookslist.png" alt="">
		</li>
	</ul>
</div>
<div class="wiper">
	<mt-swipe :auto="4000">
	  <mt-swipe-item><img src="../assets/images/l1.jpg" alt=""></mt-swipe-item>
	  <mt-swipe-item><img src="../assets/images/l2.jpg" alt=""></mt-swipe-item>
	  <mt-swipe-item><img src="../assets/images/l3.jpg" alt=""></mt-swipe-item>
	  <mt-swipe-item><img src="../assets/images/l4.jpg" alt=""></mt-swipe-item>
	</mt-swipe>	
</div>
<div class="nav">
	<div class="nav-1">
		<div @click="type('玄幻')">
			<div class="icon"></div>
			<h4 class="guid">玄幻</h4>
		</div>
		<div>
			<div class="icon"></div>
			<h4 class="guid">修真</h4>
		</div>
		<div>
			<div class="icon"></div>
			<h4 class="guid">都市</h4>
		</div>
		<div>
			<div class="icon"></div>
			<h4 class="guid">历史</h4>
		</div>
		<div>
			<div class="icon"></div>
			<h4 class="guid">网游</h4>
		</div>
		<div>
			<div class="icon"></div>
			<h4 class="guid">科幻</h4>
		</div>
		<div>
			<div class="icon"></div>
			<h4 class="guid">言情</h4>
		</div>
		<div>
			<div class="icon"></div>
			<h4 class="guid">其他</h4>
		</div>
	</div>
	
</div>

<div class="booklist">
	<h2 class="title">热门小说</h2>
	<div class="list">
			<ul>
				<li v-for="item in hotlist">
					<router-link :to="'/detail/'+item.id">
					<a href="javascript:void(0)">
						<img :src="item.images" alt="">
						<div class="tname">{{item.name}}</div>
						<div class="tauthor">{{item.author}}</div>						
					</a>
					</router-link>
				</li>
			</ul>
	</div>
</div>
<div class="booklist">
	<div class="top">
		<h2 class="title">排行榜</h2>
		<div class="more">
			<span>更多</span>
			<span></span>
		</div>
	</div>
	
	<div class="list">
			<ul>
				<li>
					<a href="">
						<img src="../assets/images/150.jpg" alt="">
						<div class="tname">择天记</div>
						<div class="tauthor">丽丽</div>						
					</a>
				</li>
				<li>
					<a href="">
						<img src="../assets/images/150.jpg" alt="">
						<div class="tname">择天记</div>
						<div class="tauthor">丽丽</div>						
					</a>
				</li>
				<li>
					<a href="">
						<img src="../assets/images/150.jpg" alt="">
						<div class="tname">择天记</div>
						<div class="tauthor">丽丽</div>						
					</a>
				</li>
				<li>
					<a href="">
						<img src="../assets/images/150.jpg" alt="">
						<div class="tname">择天记</div>
						<div class="tauthor">丽丽</div>						
					</a>
				</li>
															
			</ul>
	</div>
</div>
<div class="booklist">
	<div class="top">
		<h2 class="title">免费读书</h2>
		<div class="more">
			<span>更多</span>
			<span></span>
		</div>
	</div>
	<div class="list">
			<ul>
				<li v-for="item in freelist">
					<router-link :to="'/detail/'+item.id">
					<a href="javascript:void(0)">
						<img :src="item.images" alt="">
						<div class="tname">{{item.name}}</div>
						<div class="tauthor">{{item.author}}</div>						
					</a>
				 </router-link>
				</li>				
			</ul>
	</div>
</div>		

	</div>
</template>

<script>
	 import axios from 'axios'
	export default {
  data () {
    return {
			hotlist:[],
			freelist:[]
    }
  },
  created(){
		this.hotred();
		this.free();
  },
  methods:{
		hotred:function(){
			axios.post(process.env.API_HOST+'/hotbook').then((res) => {
				this.hotlist=res.data;
			})
		},
		free(){
			axios.post(process.env.API_HOST+'/freeread').then((res) => {
				this.freelist=res.data;
			})
		},
		type(msg){
			this.$router.push('/list/'+msg)
		},
		user(){
			if(!this.$store.state.isLogin){
				this.$router.push('/login')
			}else{
				this.$router.push('/myinfo')
			}
			
		},
		booklist(){

		},
		islogin(){
			axios.post(process.env.API_HOST+'/users/login').then((res) =>{
				
			})
		}
  }
}

</script>
<style scoped>
	
body{
	background: #f8f8f8;
}
.header{
	width: 100%;
	height: 44px;
	border-bottom: 1px solid #f3f3f3;
}
.header ul{
	height: 100%;
	float: right;
	display: flex;
	align-items:center;
	margin-right: 15px;
}
.header ul li{
	width:24px;
	height: 24px;
	margin-right: 15px;
}
.header ul li img{
	width: 100%;
	height: 100%;
}
.wiper{
	width: 100%;
	height: 170px;
	overflow: hidden;
}
.mint-swipe-items-wrap>div>img{
	width: 100%;
	height: 100%;
}
.nav{
	background: #fff;
	padding:15px 0;
}
.nav-1{
	width:100%;
	display: flex;
	flex-wrap:wrap;
}

.nav-1>div{
	width: 25%;
	height: 55px;
	display: flex;
	flex-direction:column;
	justify-content:center;
	align-items :center;
	margin-top: 10px;
}
.nav-1 .icon{
	width: 36px;
	height: 40px;
}
.nav-1>div:nth-child(1) .icon{
	background: url(../assets/images/download.png) no-repeat;
  background-position: 0 -243px;/* //48.5 */
	background-size:100%;
}
.nav-1>div:nth-child(2) .icon{
	background: url(../assets/images/download.png) no-repeat;
  background-position: 0 -243px;
	background-size:100%;
}
.nav-1>div:nth-child(3) .icon{
	background: url(../assets/images/download.png) no-repeat;
  background-position: 0 -194.5px;
	background-size:100%;
}
.nav-1>div:nth-child(4) .icon{
	background: url(../assets/images/download.png) no-repeat;
  background-position: 0 -388.5px;
	background-size:100%;
}
.nav-1>div:nth-child(5) .icon{
	background: url(../assets/images/download.png) no-repeat;
  background-position: 0 -437px;
	background-size:100%;
}
.nav-1>div:nth-child(6) .icon{
	background: url(../assets/images/download.png) no-repeat;
  background-position: 0 -485.5px;
	background-size:100%;
}
.nav-1>div:nth-child(7) .icon{
	background: url(../assets/images/download.png) no-repeat;
  background-position: 0 -631px;
	background-size:100%;
}
.nav-1>div:nth-child(8) .icon{
	background: url(../assets/images/download.png) no-repeat;
  background-position: 0 -679.5px;
	background-size:100%;
}
.booklist{
	width:100%;
	padding:15px 15px;
	background-color: #fff;
	margin-top:10px;
}
.booklist .top{
	height: 20px;
	line-height: 20px;
}
.booklist .top .title{
	float: left;
}
.booklist .top .more{
	float: right;
	display: flex;
	align-items :center;
	justify-content:flex-end;
	height: 100%;
	width:60px;
	color: grey;
  font-size:14px;
}
.booklist .top .more span{
	display: inline-block;
}
.booklist .top .more span:nth-child(2){
	
	width: 16px;
	height: 16px;
	background: url(../assets/images/more.png) no-repeat;
	background-size: 100% 100%;
}
.booklist .title{
    border-left: 2px solid #ed424b;
    text-indent: 5px;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 10px;
}
.booklist .list ul{
	width:100%;
	display: flex;
	/*justify-content: space-between;*/
}
.booklist .list ul li{
	flex: 1;
	display: flex;
	flex-direction:column;
}
.booklist .list ul li a{
	display: block;
	width:88%;
}
.booklist .list ul li img{
	width:100%;
}
.booklist .list ul li a>div{
	width:100%;
	line-height: 20px;
	overflow: hidden;
	text-overflow: ellipsis;
}

</style>