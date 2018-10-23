<template>
	<div>
	 <top tname="书架"  @sendback="back"></top>			
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
				list:[]
			}
		},
		methods:{
			back(msg){
				this.$router.go(-1);
			},
			loadmore(){
				
			},
			toclick(id){
				this.$router.push('/detail/'+id)
			},
			listdatas(pno){
				var that=this;
				this.axios.post(process.env.API_HOST+'/id',querystring.stringify({pno:pno,pageSize:8,type:that.type})).then((res) => {
					that.list=res.data;
				})
			}
		},
	  components:{
	  	'top':top
	  }
	}

</script>
<style scoped>
	

</style>