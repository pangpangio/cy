<template>
	<main>
		<div class="at-nav-bar">
			分类
		</div>
		<div class="cate-main">
			<van-tree-select height="100%" :items="items" :main-active-index.sync="active">
				<template #content>
					
					<div class="aaa" v-if="active ===0">
						<ul>
							<li>
								<img src="img/011.jpg" alt="">
								<br>
								<span>nubiaZ40S</span>
							</li>
							<li>
								<img src="img/011.jpg" alt="">
								<br>
								<span>nubiaZ40S</span>
							</li>
							<li>
								<img src="img/011.jpg" alt="">
								<br>
								<span>nubiaZ40S</span>
							</li>
						</ul>
					</div>
					<div class="aaa" v-if="active ===1"></div>
				</template>
			</van-tree-select>
		</div>

	</main>
</template>

<script>
	
	export default {
	  data() {
	    return {
	      active: 0,
	      items: [{ text: '中兴'}, { text: 'nubia' }, { text: '红魔' } ,
		  , { text: '影音娱乐' }, { text: '智能穿戴' }, { text: '小黄人' }, 
		  { text: '数据线' }, { text: '保护壳' }, { text: '网络/路由' }],
	    };
	  },
	};
	
</script>


<style>
	.cate-main {
		width: 100%;
	}
	.aaa{
		width: 90%;
		margin: 0px auto;
		border-radius: 10px;
		margin-left: 20vw;
	}
	.aaa img{
		width: 30vw;
	}
	.aaa span{
		margin-left: 6vw;
		font-size: 4vw;
	}
</style>
