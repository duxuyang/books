<template>
	<div>
		<top tname="登录"  @sendback="back"></top>
		<div class="main">
			<div class="tablist">
				<div v-for="(val,index) in tablist" :key="index" :class="{active:index==biao}" @click="tabfun(index)">{{val}}</div>
		  </div>
		  <div class="mlist">
		  	<div class="login1" v-show="biao==0">
		  		<div class="username">
		  			<label></label>
		  			<input placeholder="用户名/手机号/邮箱" v-model="name">
		  		</div>
		  		<div class="pass">
		  			<label></label>
		  			<input type="password"  placeholder="请输入密码" v-model="pass">
		  			<div>忘记密码?</div>
		  		</div>
		  		<div class="btnlogin" @click="login1">登录</div>
		  		<div class="btnregist">注册</div>
		  	</div>
		  	<div class="login2" v-show="biao==1">
		  		<div class="username">
		  			<label></label>
		  			<input type="text" name="" placeholder="请输入手机号">
		  		</div>
		  		<div class="ma">
		  			<label></label>
		  			<input type="text" name="" placeholder="请输入验证码">
		  			<div class="sentma">获取验证码</div>
		  		</div>
		  		<div class="btnlogin1">登录</div>
		  	</div>
		  </div>
		</div>
	</div>
</template>
<script>
	const top = () => import('@/components/top')
	import LoginData from '@/model/api/login.js';
	import axios from 'axios'
	export default {
  data () {
    return {
      tablist:["密码登录","快捷登录"],
      biao:'0',
      name:'',
      pass:''
    }
  },
  methods:{
  	tabfun(index){
  		this.biao=index;
  	},
  	back(msg){
			this.$router.go(-1);
		},
		async login1(){
			try {
				let {data}=await LoginData.login({uname:this.name,upass:this.pass});
				if(data.code){
					this.$store.state.userid=data.id;
					this.$store.state.isLogin=true;
					this.$router.push('/myinfo');
				}
			} catch (error) {
				console.log("登录失败");
			}
		}
  },
  components:{
  	'top':top
  }
}

</script>
<style scoped>

.main{
	padding-top:60px;
}
.tablist{
	display: flex;
	width:316px;
	height:42px;
	margin:0 auto;
	border-radius: 7px;
	border: 1px solid #FF6B56;/*no*/
}
.tablist>div{
	flex: 1;
	display: flex;
	align-items:center;
	justify-content:center;
	color: #FF6B56;
	height:100%;
	font-size: 15px;

}
.tablist>div:first-child{
	border-right: 0px;
	border-top-left-radius: 7px;
	border-bottom-left-radius: 7px;
}
.tablist>div:nth-child(2){
		border-left: 0px;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}
.tablist>div.active{
	background: #FF6B56;
	color: #fff;
}
.mlist{
	width:100%;
	box-sizing: border-box;
	padding: 0px 20px;
	margin-top: 50px;
}
.username,.pass,.ma{
	display: flex;
	align-items:center;
	border-bottom: 1px solid #d0d0d0;
  padding: 10px 0px;
  position: relative;
}
.username>label{
	background: url(../assets/images/user_icon.png) no-repeat center center;
	width: 19px;
	height: 22px;
	background-size: 19px 22px;
}
.ma>label{
	background: url(../assets/images/indentify.png) no-repeat center center;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

.username input,.pass input,.ma input{
	  border: none;
    height: 28px;
    line-height: 28px;
    color: #ACACAC;
    font-size: 16px;
    padding: 2px 0px;
    padding-left: 30px;
    background-color: #fff;
    -webkit-appearance: none;
}
.pass>label{
	background: url(../assets/images/pwd_icon.png) no-repeat center center;
    width: 19px;
    height: 22px;
    background-size: 19px 22px;
}
.pass>div{
	position: absolute;
	top:50%;
	right:0;
	transform:translateY(-50%);
  font-size: 12px;
  color: #FF6B56;
}
.ma>div{
	position: absolute;
	top:50%;
	right:0;
	transform:translateY(-50%);
	font-size: 12px;
	color: #faa200;
	background-color: #FF6B56;
	width: 98px;
	height: 32px ;
	border-radius: 2px;
	text-align: center;
	line-height: 32px;
	font-size: 13px;
	color:#fff;
}
.btnlogin,.btnlogin1{
	display: flex;
	align-items:center;
	justify-content:center;
	height: 46px;
	font-size: 18px;
	background: #FF6B56;
	width: 100%;
	margin-bottom: 10px;
	color: #fff;
	border: 1px solid #f0ad4e;/*no*/
	font-weight: 400;
	border-radius: 3px;/*no*/
	margin-top: 25px;
}
.btnregist{
	display: flex;
	align-items:center;
	justify-content:center;
	color: #FF6B56;
	background: none;
	height: 46px;
	font-size: 18px;
	width: 100%;
	margin-bottom: 10px;
	border: 1px solid #FF6B56;
	border-radius: 3px;/*no*/
}

</style>