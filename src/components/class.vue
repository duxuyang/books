<template>
	<div >
		<top tname="分类"  @sendback="back"></top>
		<div class="classPage">
			<h3>推荐书单</h3>
			<ul class="ul">
				<li>
					<div class="bsort">
						<div class="title">情节超棒的言情小说~</div>
						<ul>
							<li><img src="../assets/images/m1.jpg" alt=""></li>
							<li><img src="../assets/images/m2.jpg" alt=""></li>
							<li><img src="../assets/images/m3.jpg" alt=""></li>
						</ul>
					</div>
				</li>
				<li>
					<div class="bsort">
						<div class="title">情节超棒的言情小说~</div>
						<ul>
							<li><img src="../assets/images/m1.jpg" alt=""></li>
							<li><img src="../assets/images/m2.jpg" alt=""></li>
							<li><img src="../assets/images/m3.jpg" alt=""></li>
						</ul>
					</div>
				</li>
				<li>
					<div class="bsort">
						<div class="title">情节超棒的言情小说~</div>
						<ul>
							<li><img src="../assets/images/m1.jpg" alt=""></li>
							<li><img src="../assets/images/m2.jpg" alt=""></li>
							<li><img src="../assets/images/m3.jpg" alt=""></li>
						</ul>
					</div>
				</li>
				<li>
					<div class="bsort">
						<div class="title">情节超棒的言情小说~</div>
						<ul>
							<li><img src="../assets/images/m1.jpg" alt=""></li>
							<li><img src="../assets/images/m2.jpg" alt=""></li>
							<li><img src="../assets/images/m3.jpg" alt=""></li>
						</ul>
					</div>
				</li>								
			</ul>


		</div>
	</div>
</template>
<script>
const top = () => import('@/components/top')
	export default {
		data () {
			return{

			}
		},
		methods:{
    back(msg){
			this.$router.go(-1);
		},


		},
	  components:{
	  	'top':top
	  },

	}

</script>
<style scoped src="../assets/css/class.css"></style>