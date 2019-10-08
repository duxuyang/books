<template>
	<div>
<div class="header">
	<ul>
		<li @click="user">
			<img src="../assets/images/user.png" alt="" v-if="userimg">
			<img src="../assets/images/userhead.jpg" alt="" v-else>
		</li>
		<li @click="booksm">
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
<div class="search">
	<div class="cen" @click="search">
		<span class="iconfont icon-sousuo1"></span>
		<span>盛世娇宠之名门闺香</span>
	</div>
</div>
<div class="nav">
	<div class="nav-1">
		<div @click="type(1)">
			<div class="icon"></div>
			<h4 class="guid">分类</h4>
		</div>
		<div @click="type(2)">
			<div class="icon"></div>
			<h4 class="guid">排行榜</h4>
		</div>
		<div @click="type(3)">
			<div class="icon"></div>
			<h4 class="guid">新书</h4>
		</div>
		<div @click="type(4)">
			<div class="icon"></div>
			<h4 class="guid">福利</h4>
		</div>
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
				<li v-for="(item,index) in freelist" :key="index">
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
	<h2 class="title">热门小说</h2>
	<div class="list">
			<ul>
				<li v-for="(item,index) in hotlist" :key="index">
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
	

	</div>
</template>

<script>
	import MainDatas  from '@/model/api/main.js'
	export default {
		name:'main',
		data () {
			return {
					hotlist:[],
					freelist:[],
					userimg:true
			}
		},
		created(){
			if(!this.$store.state.isLogin){
							this.userimg=true;
					}else{
						this.userimg=false;
					}
				this.hotred();
				this.free();
		},
		methods:{
			async hotred(){
				try {
					let {data}= await MainDatas.hotRead();
					this.hotlist=data;
				} catch (error) {
					console.log("热门小说请求失败");
				}
				},
			async free(){
				try {
					let {data} = await MainDatas.freeRead();
					this.freelist=data;
				} catch (error) {
					console.log("免费小说请求失败");
				}
			},
				type(msg){
					switch(msg){
						case 1://分类
						this.$router.push('/list');
						break;
						case 2:
						
						break;
						case 3:

						break;
						case 4:

						break;
						default:
						
					}
				//	this.$router.push('/list/'+msg)
				},
				user(){
					if(!this.$store.state.isLogin){
						this.$router.push('/login')
					}else{
						this.$router.push('/myinfo')
					}
				},
				booksm(){
					if(!this.$store.state.isLogin){
						this.$router.push('/login')
					}else{
					this.$router.push('/mylist')
					}
				},
				search(){
					this.$router.push('/search')
				}
		}
}

</script>
<style scoped src="../assets/css/main.css">
</style>