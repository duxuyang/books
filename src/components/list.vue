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
				<li v-for="(val,key) in typename" :key="key" @click="typefun(val,key)">
					<span :class="{active:key==index}">{{val}}</span>
				</li>
			</ul>
		</div>
		<div class="modal" v-show="show"></div>
		<div class="list">
			<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
				<li v-for="(item,index) in list" :key="index" @click="toclick(item.id)">
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
const top = () => import('@/components/top');
import ListDatas  from '@/model/api/list.js'
export default {
		name:'list',
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
		this.listdatas(1);
	},
	methods:{
		back(msg){
			this.$router.go(-1);
			this.$destroy();
		},
		async loadMore() {
			try {
				this.pi++;
				this.loading = true;
				let {data}= await ListDatas.list({pno:this.pi,pageSize:8,type:this.name});
				this.loading = false;
				if(data.length){
					for(let i of data){
						this.list.push(i);
					}
				}
			} catch (error) {
				Toast('失败');
			}
		},
	    async listdatas(pno){
			try {
				let {data}=await ListDatas.list({pno:pno,pageSize:8,type:this.name});
				this.list=data;
			} catch (error) {
				Toast('失败');
			}
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
}
</script>
<style scoped src="../assets/css/list.css"></style>
