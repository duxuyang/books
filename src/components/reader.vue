<template>
<div>
<div class="header" v-show="panel">
	<div class="back" @click="back">
		<div class="back-icon"></div>
	</div>
</div>
<div class="mask" @click="showBar"></div>
<div class="footer" v-show="panel">
	<div @click="showis">
		<div class="ficon"></div>
		<div class="fnav">目录</div>
	</div>
	<div @click="fsize">
		<div class="ficon"></div>
		<div class="fnav">字体</div>		
	</div>
	<div @click="night">
		<div class="ficon"></div>
		<div class="fnav">夜间</div>		
	</div>
</div>
<div class="set" v-show="setpan">
	<div class="setfont">
		<div class="setf">字号</div>
		<div class="setr">
			<div class="setcon">小</div>
			<div class="setcon">中</div>
			<div class="setcon">大</div>	
		</div>
	</div>
	<div class="setbg">
		<div class="setf">背景</div>
		<div class="setr">
			<div class="setbg1" @click="setbg(1)"></div>
			<div class="setbg1" @click="setbg(2)"></div>
			<div class="setbg1" @click="setbg(3)"></div>
			<div class="setbg1" @click="setbg(4)"></div>
		</div>

	</div>
</div>
<div :class="{ashow:apanel,asside}">
	<div class="asside-over" @click="showis"></div>
	<div class="list">
		<div class="list-top" >
			目录
		</div>
		<div class="listmain">
			<ul v-for="(val,index) in titlelist" :key="index">
				<li @click="clicktitle(index)">{{val.title}}</li>
			</ul>
		</div>
	</div>
</div>

<div class="content" :bg="bgcolor" :night="bg_night">
	<div class="title">{{title}}</div>
	<div class="con">
 		<p v-for="(item,index) in content" :key="index">{{item}}</p>
	</div>
 	<div class="foot">
	<ul>
		<li @click="prev">上一章</li>
		<li @click="next">下一章</li>
	</ul>
</div> 
</div>	
</div>
</template>
<script>
	import axios from 'axios'
	import ReaderDatas  from '@/model/api/reader.js'
export default{
		name:'reader',
	data(){
		return{
			bgcolor:'1',
			bg_night:false,
			panel:false,
			apanel:false,
			setpan:false,//设置字体框弹出
			asside:'asside',
			titlelist:[],//章节列表
			content:[],//内容
			title:'',   //标题
			pid:'',  //id
			curChapter:'', //当前章节
			maxChapter:'',//总章数
			info:{}
		}
	},
	created(){
		this.pid=this.$route.params.id;
		if(localStorage.getItem("readinfo")){//有
			 this.info=JSON.parse(localStorage.getItem("readinfo"));
			let man=false;
			for(let p in this.info){
					if(this.info[p].id==this.pid){
						man=true;
						this.curChapter=this.info[p].num;
						this.pcon(this.info[p].id,this.info[p].num)
					}
			}
			if(man==false){
				this.curChapter=1;
				this.pcon(this.pid,1);
				this.saveinfo(1);
			}
		}else{//没有
			this.curChapter=1;
			this.pcon(this.pid,1);
			this.saveinfo(1);
		}
		this.tlist(this.pid);
	},
	methods:{
		saveinfo(num){//本地存储章节
			this.info[this.pid]={id:this.pid,num:num};
     		localStorage.setItem("readinfo",JSON.stringify(this.info));
		},
		showBar(){//头部和尾部
			this.setpan=false;
			this.panel=!this.panel;
		},
		showis(){//目录
			this.apanel=!this.apanel;
		},
		async tlist(id){//目录列表
			try {
				let {data} =await ReaderDatas.list({id:id});
				this.titlelist=data;
				this.maxChapter=data.length;
			} catch (error) {
				Toast('失败');
			}
		},
		async pcon(id,num){//内容
			try {
				let {data} =await ReaderDatas.readbook({id:id,number:num});
				this.title=data[0].title;
				this.content=data[0].content.split("-");
			} catch (error) {
				Toast('失败');
			}
		},
		clicktitle(index){//点击章列表
			this.showis();
			this.pcon(this.pid,index+1);
			this.curChapter=index+1;
			this.saveinfo(index+1);//保存章节
		},
		night(){//夜间切换
			this.bg_night=!this.bg_night;
		},
		fsize(){//字体框
			this.setpan=!this.setpan;
		},
		setbg(i){//设置阅读背景
			this.bgcolor=i;
		},
		next(){//下一章
			if(this.curChapter<this.maxChapter){
				this.curChapter++;
				this.pcon(this.pid,this.curChapter);
				this.saveinfo(this.curChapter);
			}
		},
		prev(){//上一章
			if(this.curChapter>1){
				this.curChapter--;
				this.pcon(this.pid,this.curChapter);
				this.saveinfo(this.curChapter);		
			}
		},
		back(){//返回
			this.$router.go(-1);
		}
	}
}

</script>
<style scoped>
.header{
	position: fixed;
	top: 0;
	height: 50px;
	background: #000;
	width: 100%;
	opacity: 1;
	z-index: 9;
}
.back{
	height: 100%;
	width: 44px;
	display: flex;
	align-items :center;
	justify-content:center;
}
.back-icon{
	width:23px;
	height: 23px;
	background: url(../assets/images/backd.png) no-repeat;
	background-size:100% 100%;
}

.footer{
	position: fixed;
	bottom: 0;
	height: 60px;
	background: #000;
	width: 100%;
	opacity: 1;
	z-index: 9;
	display: flex;
}
.footer>div{
	flex: 1;
	color:#fff;
	display: flex;
	flex-direction:column;
	align-items :center;
	justify-content:center;
}
.footer>div:nth-child(1) .ficon{
	width: 18px;
	height: 13px;
	background: url(../assets/images/mu.png) no-repeat;
	background-size:100% 100%;
}
.footer>div:nth-child(2) .ficon{
	width: 20px;
	height: 13px;	
	background: url(../assets/images/font.png) no-repeat;
	background-size:100% 100%;
}
.footer>div:nth-child(3) .ficon{
	width: 16px;
	height: 16px;		
	background: url(../assets/images/day.png) no-repeat;
	background-size:100% 100%;
}
.footer .fnav{
	margin-top:5px;
}
.mask{
	position: fixed;
	top: 35%;
	width: 100%;
	height: 30%;  
}
.asside{
	position: fixed;
	top:0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
 transform: translateX(-100%);
 transition: all .3s;
}
.ashow{
	transform: translateX(0);
}
.asside-over{
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	opacity: 1;
 background-color: rgba(0,0,0,.5);		
z-index: 10;
}
.asside .list{
	position: absolute;
	top: 0;
	right: 60px;
	left: 0;
	bottom: 0;
	overflow: auto;
	background-color: #fff;
	opacity: 1;
	z-index:15;
}
.asside .list-top{
	position: fixed;
	top: 0;
	left: 0;
	right:60px;
	color: #f01742;
	font-size: 16px;
	font-weight: bold;
	line-height: 50px;
	text-align: center;
	border-bottom: 1px solid #f01742;
	background: #fff;
}
.asside .listmain{
	margin-top:50px;
}
.asside .listmain ul{
	width:100%;
  padding-left:15px; 
  box-sizing: border-box;
}
.asside .listmain ul li{
	color: #333;
	height: 50px;
	line-height: 50px;
	border-bottom: 1px solid #ccc;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 14px;
}
.set{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 60px;
	opacity: 1;
	background-color: rgba(0,0,0,.9);
	color: #fff;
	padding: 0 20px 15px;
}
.setfont,.setbg{
	color: #fff;
	font-size: 14px;
	display: flex;
	align-items :center;
	margin-top: 15px;
}
.set .setr{
	flex: 1;
	display: flex;
	justify-content:space-around;
}
.setfont .setcon{
	border: 1px solid #8c8c8c;
	padding: 5px 30px;
	color: #fff;
	border-radius: 16px;
}
.setbg .setbg1{
	width:50px;
	height: 30px;
	border-radius: 5px;
}
.setbg .setr>div:nth-child(1){
	background: #c4b395;
}
.setbg .setr>div:nth-child(2){
	background: #cad9e8;
}
.setbg .setr>div:nth-child(3){
 background: #d1edd1;
}
.setbg .setr>div:nth-child(4){
	background: #e6e6e6;
}
.content{
	width: 100%;
	min-height: 600px;
	padding:40px 15px 15px;
}
.content[bg='1']{
background-color: #e9dfc7;
}
.content[bg='2']{
background-color:#cad9e8;
}
.content[bg='3']{
background-color:#d1edd1;
}
.content[bg='4']{
background-color:#e6e6e6;
}
.content[night=true]{
	background-color: #0f1410;
}
.content .title{
  position: fixed;
  top: 0;
  left: 15px;
  right: 15px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: #736357;
  font-weight: bold;
}
.content[bg='1'] .title{
background-color: #e9dfc7;
}
.content[bg='2'] .title{
background-color: #cad9e8;
}
.content[bg='3'] .title{
background-color: #d1edd1;
}
.content[bg='4'] .title{
background-color: #e6e6e6;
}
.content[night=true] .title{
	background-color: #0f1410;
}
.content .con p{
	  text-indent:34px;
	  font-size: 16px;
	  color: #555;
    margin: 10px 0;
    text-align: justify;
    letter-spacing: 0;
    line-height:1.5;
}
.content .foot{
	z-index: 80;
	width: 80%;
	margin: 20px auto 0;
	max-width: 800px;
}
.content .foot ul{
	display: flex;
	border-radius: 8px;
	border: 1px solid #858382;
	height: 34px;
	line-height: 34px;
	background-color: #000;	
}
.content .foot ul li{
	font-size: 14px;
	opacity: .9;
	width: 49%;
	text-align: center;
	color: #fff;   
}
.content .foot ul li:nth-child(1){
	border-right: 1px solid #858382;
}







	


</style>