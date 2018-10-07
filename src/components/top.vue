<template>
	<div>
		<div class="header">
	<div class="backbox" @click="tback">
		<div class="back"></div>
	</div>
	<div class="tname">{{tname}}</div>
</div>

	</div>
</template>
<script>
	export default {
		props:['tname'],
		data(){
			return {

			}
		},
		methods:{
			tback(){
				this.$emit('sendback',1);
			}

		}
	}

	
</script>
<style scoped>
	
	.header{
	width: 100%;
	height: 44px;
	display: flex;
	align-items:center;
	background: #fc0e50 url(../assets/images/header.png) no-repeat;
	background-size: 100% 100%;
}
.header div{
	font-size: 16px;
	color:#fff;
}
.header .backbox{
width:43px;
	height: 100%;
	display: flex;
	align-items:center;	
}
.header .back{
	width:20px;
	height: 20px;
	background: #fc0e50 url(../assets/images/back.png) no-repeat;
	background-size: 100% 100%;	
	margin-left:10px;
}
.header .tname{
	line-height:22px;
}

</style>
