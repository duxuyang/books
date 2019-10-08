<template>
	<div>
		<div class="header">
			<div class="back" @click="back"></div>
		</div>
		<div class="header-center">
			<img src="../assets/images/userhead.jpg" alt="">
			<div class="header-p"><span>{{uname}}</span></div>
		</div>
		<div class="nav">
			<ul>
				<li>
					<div class="nav-cen">
						<div>
							<span class="nav-icon"></span>
							<h3>会员中心</h3>
						</div>
						<span class="nav-more"></span>
					</div>
				</li>
				<li>
					<div class="nav-cen">
						<div>
							<span class="nav-icon"></span>
							<h3>会员中心</h3>
						</div>
						<span class="nav-more"></span>
					</div>
				</li>
				<li>
					<div class="nav-cen">
						<div>
							<span class="nav-icon"></span>
							<h3>会员中心</h3>
						</div>
						<span class="nav-more"></span>
					</div>
				</li>			
				<li>
					<div class="nav-cen">
						<div>
							<span class="nav-icon"></span>
							<h3>会员中心</h3>
						</div>
						<span class="nav-more"></span>
					</div>
				</li>					
			</ul>
		</div>
		<div class="logout" @click="logout">
			退出登录
		</div>
	</div>
</template>
<script>
import userDatas  from '@/model/api/user.js'
	export default {
			name:'myinfo',
		data(){
			return {
				uname:''
			}
		},
		created(){
			this.info();
		},
		methods:{
			logout(){

			},
			async info(){
				try {
					let {data}=await userDatas.userInfo({id:this.$store.state.userid});
					this.uname=data[0].uname;
				} catch (error) {
					Toast('失败');
				}
			},
			back(){
				this.$router.push('/main');
			}
		}
	}

</script>
<style scoped>
.header{
	position: fixed;
	top:0;
	left: 0;
	right: 0;
	height: 44px;
	display: flex;
	align-items:center;
}
.header .back{
		width:20px;
	height: 20px;
	background:url(../assets/images/back.png) no-repeat;
	background-size: 100% 100%;	
	margin-left:10px;
}
.header-center{
	width:100%;
	height: 150px;
	display: flex;
	flex-direction:column;
	align-items:center;
	background: url(../assets/images/usertop.jpg) no-repeat;
	background-size: 100% 100%;
}
.header-center img{
	width:60px;
	height: 60px;
	border-radius: 50%;
	margin-top:40px;
}
.header-center .header-p{
	font-size: 16px;
	color: #fff;
	margin-top:10px;
}
.nav ul li{
	width:100%;
	padding-left: 20px;
	height: 56px;
	box-sizing: border-box;
}
.nav ul li .nav-cen{
	height: 100%;
	padding-right: 20px;
	border-bottom: 1px solid #f0f1f2;
	display: flex;
	align-items:center;
}
.nav ul li .nav-cen>div{
	flex: 1;
	height: 100%;
	display: flex;
	align-items:center;
	
}
.nav li .nav-cen .nav-icon{
	width: 24px;
	height: 24px;
	background: url(../assets/images/usericon.png) no-repeat;
	background-position: 0 -86px;
	background-size: 146px 129px;
}
.nav li .nav-cen .nav-more{

	width:24px;
	height: 24px;
	background: url(../assets/images/more.png) no-repeat;
	background-size: 100% 100%;
}
.logout{
	height: 44px;
	line-height: 44px;
	text-align: center;
  background-color: #fff;
  font-size: 14px;
  color: #65c541;
}



</style>