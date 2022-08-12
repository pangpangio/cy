<template>
 	<main>
 		<van-search shape="round" placeholder="寻找感兴趣的商品" />
 		<div class="tabs">
 			<div class="tabs-titles">
 				<div class="tab-base">推荐</div>
 				<div class="tab-base">ZTE中兴</div>
 				<div class="tab-base">nubia</div>
 				<div class="tab-base">红魔</div>
 				<div class="tab-base">智慧生活</div>
 			</div>
 		</div>

 		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
 			<van-swipe-item><img src="img/001.jpg" alt=""></van-swipe-item>
 			<van-swipe-item><img src="img/002.jpg" alt=""></van-swipe-item>
 			<van-swipe-item><img src="img/003.jpg" alt=""></van-swipe-item>
 			<van-swipe-item><img src="img/004.jpg" alt=""></van-swipe-item>
 		</van-swipe>
 		<div class="wgts-list-item">
 			<div class="wgt-nav-box">
 				<ul class="list">
 					<li v-for="(item,index) in list" :key="index">
 						<img :src="item.src" alt="">
 						<span>{{item.title}}</span>
 					</li>
 				</ul>
 			</div>
 		</div>

 		<div class="wgt-notile-lien">
 			<div class="wgt-notce">
 				<div class="notce-icon">
 					开头条
 				</div>
 				<div class="notce-slider">
					<van-notice-bar background="#fff" :scrollable="false">
					  <van-swipe
					    vertical
					    class="notice-swipe"
					    :autoplay="3000"
					    :show-indicators="false"
					  >
					    <van-swipe-item>全款只要9999 买不了吃亏，买不了上当</van-swipe-item>
					    <van-swipe-item>全款只要9999 买不了吃亏，买不了上当</van-swipe-item>
					    <van-swipe-item>全款只要9999 买不了吃亏，买不了上当</van-swipe-item>
					  </van-swipe>
					</van-notice-bar>
 				</div>
 				<div class="notce-more">
 					<span>更多></span>
 				</div>
 			</div>
 		</div>
 		<div class="wgts-list-item-a">
 			<div class="wap-ad-liem">
 				<img src="img/005.jpg" alt="">
 			</div>
 		</div>

 		<div class="wgts-list-img">
 			<div class="wgts-list-img-box">
 				<div class="wgts-list-img-box-a">
 					<img src="img/006.jpg" alt="">
 				</div>
 				<div class="wgts-list-img-box-b">
 					<div class="wgts-list-img-box-b1">
 						<img src="img/007.jpg" alt="">
 					</div>
 					<div class="wgts-list-img-box-b2">
 						<img src="img/008.jpg" alt="">
 					</div>
 				</div>

 			</div>
 		</div>

 		<div class="wgt-product-list__header">
 			<div class="wgt-product-list__title">
 				热卖推荐
 			</div>
 		</div>
		
		<div class="taro-img__mode-widthfix">
			<div class="taro-img__mode-widthfix-a">
				<img src="img/010.jpg" alt="">
			</div>
		</div>
		
		<div class="product-list-goods">
			<div class="product-list-goods-a">
				<router-link to="/Productdetails">
					<ul>	
					<li v-for="(phone,index) in list1" :key="index" class="list-goods-a" >
						<img :src="phone.src" alt="">
						<span class="list-goods-a1">{{phone.model}}</span>
						<br>
						<span class="list-goods-a2">{{phone.model_a}}</span>
						<br>
						<span class="list-goods-a5">{{phone.stages}}</span>
						<span class="list-goods-a3">{{phone.stages_a}}</span>
						<br>
						<span class="list-goods-a4">{{phone.Price}}</span>
					</li>
				</ul>
				</router-link>
			</div>
		</div>
		
		<div class="wgts-baseline">我是有底线的~</div>


 		<!-- <router-link to="/shop">京东超市</router-link> -->
 	</main>
 </template>
 <script>
 	export default {

 		data() {
 			return {
				list1:[
					{ 
						src:'img/011.jpg',
						model:'nubia 努比亚 Z40S',
						model_a:'S 级性能 pro级影像',
						stages:'赠',
						stages_a:'分期',
						Price:'￥ 9999'	
				},
				{
						src:'img/011.jpg',
						model:'nubia 努比亚 Z40S',
						model_a:'S 级性能 pro级影像',
						stages:'赠',
						stages_a:'分期',
						Price:'￥ 9999'	
				},
				{
						src:'img/011.jpg',
						model:'nubia 努比亚 Z40S',
						model_a:'S 级性能 pro级影像',
						stages:'赠',
						stages_a:'分期',
						Price:'￥ 9999'	
				},
				{
						src:'img/011.jpg',
						model:'nubia 努比亚 Z40S',
						model_a:'S 级性能 pro级影像',
						stages:'赠',
						stages_a:'分期',
						Price:'￥ 9999'	
				},
				{
						src:'img/011.jpg',
						model:'nubia 努比亚 Z40S',
						model_a:'S 级性能 pro级影像',
						stages:'赠',
						stages_a:'分期',
						Price:'￥ 9999'	
				},
				{
						src:'img/011.jpg',
						model:'nubia 努比亚 Z40S',
						model_a:'S 级性能 pro级影像',
						stages:'赠',
						stages_a:'分期',
						Price:'￥ 9999'	
				},
				{
						src:'img/011.jpg',
						model:'nubia 努比亚 Z40S',
						model_a:'S 级性能 pro级影像',
						stages:'赠',
						stages_a:'分期',
						Price:'￥ 9999'	
				},
				{
						src:'img/011.jpg',
						model:'nubia 努比亚 Z40S',
						model_a:'S 级性能 pro级影像',
						stages:'赠',
						stages_a:'分期',
						Price:'￥ 9999'	
				},
				{
						src:'img/011.jpg',
						model:'nubia 努比亚 Z40S',
						model_a:'S 级性能 pro级影像',
						stages:'赠',
						stages_a:'分期',
						Price:'￥ 9999'	
				},
				{
						src:'img/011.jpg',
						model:'nubia 努比亚 Z40S',
						model_a:'S 级性能 pro级影像',
						stages:'赠',
						stages_a:'分期',
						Price:'￥ 9999'	
				},
				],
				
				
				
 				list: [{
 						src: 'img/fl1.png',
 						title: '分类'
 					},
 					{
 						src: 'img/fl2.png',
 						title: '销售网点'
 					},
 					{
 						src: 'img/fl3.gif',
 						title: 'Z40S pro'
 					},
 					{
 						src: 'img/fl4.png',
 						title: '依旧换新'
 					},
 					{
 						src: 'img/fl5.png',
 						title: '邀请有礼'
 					}

 				]
 			}
 		}
 	}
 </script>
 
 <style>
 	main {
 		background-image: linear-gradient(160deg, #ffdae9 20%, #efe3f2 80%);
 	}

 	.list {
 		width: 100%;
 		overflow: hidden;
 	}

 	.list img {
 		width: 60%;
 	}

 	.list li {
 		width: 20%;
 		text-align: center;
 		float: left;
 		text-align: center;
 		margin-top: 12px;
 	}

 	.list span {
 		display: block;
 		font-size: 3vw;
 		margin-bottom: 3vw;

 	}


 	.tabs {
 		height: 40px;
 	}

 	.tabs-titles {
 		width: 95%;
 		height: 40px;
 		margin: 0px auto;
 		line-height: 40px;
 		display: flex;
 		flex-direction: row;
 		flex-wrap: nowrap;
 		justify-content: space-between
 	}

 	.tab-base {
 		width: 15%;
 		text-align: center;
 		font-size: .8rem;
 	}

 	.my-swipe .van-swipe-item {
 		/* color: #fff; */
 		font-size: 20px;
 		line-height: 150px;
 		text-align: center;
 		height: 160px;
 		width: 95%;
 		border-radius: 10px;
 	}

 	.my-swipe img {
 		height: 160px;
 		width: 95%;
 	}

 	.wgts-list-item {
 		margin-top: 3px;
 		background: #ffdae9;
 	}

 	.wgt-nav-box {
 		width: 95%;
 		margin: 0px auto;
 		background: #fff;
 		border-radius: 12px;
 	}

 	.wgt-notile-lien {
 		width: 100%;
 		margin-top: 2vw;
 		margin-bottom: 2vw;
 	}

 	.wgt-notce {
 		width: 95%;
 		height: 40px;
 		margin: 0px auto;
 		background: #fff;
		border-radius: 10px;
 		display: flex;
 		flex-direction: row;
 		flex-wrap: nowrap;
 		justify-content: space-around;
 	}

 	.notce-icon {
 	width: 15%;
 	font-weight: bold;
 	margin: 2.5vw;
 	text-align: center;
 	font-size: 4vw;
 	}
	
	.notice-swipe {
	    height: 40px;
	    line-height: 40px;
	  }

 	.notce-slider {
 		width: 60%;
 		height: 40px;
 	}

 	.notce-more {
 		width: 15%;
 		text-align: center;
 		font-size: 4vw;
 		margin: 2vw;
 	}

 	.wgts-list-item-a {
 		height: 259px;
 		width: 100%;
 	}

 	.wap-ad-liem {
 		width: 95%;
 		height: 259px;
 		margin: 0px auto;
 	}

 	.wap-ad-liem img {
 		width: 100%;
 		height: 259px;
 		border-radius: 10px;
 	}

 	.wgts-list-img {
 		width: 100%;
 		height: 253px;
 		margin-top: 10px;
 	}

 	.wgts-list-img-box {
 		height: 253px;
 		width: 95%;
 		margin: 0px auto;
 		display: flex;
 		flex-direction: row;
 		flex-wrap: nowrap;
 		justify-content: space-between;
 	}

 	.wgts-list-img-box-a {
 		width: 49%;
 		height: 100%;
 		float: left;
 		border-radius: 10px;
 	}

 	.wgts-list-img-box-a img {
 		width: 100%;
 		height: 100%;
 		border-radius: 10px;
 	}

 	.wgts-list-img-box-b {
 		width: 49%;
 		height: 100%;
 		float: left;
 		border-radius: 10px;
 		display: flex;
 		flex-direction: column;
 		flex-wrap: wrap;
 		justify-content: space-between;
 	}

 	.wgts-list-img-box-b1 {
 		height: 49%;
 		width: 100%;
 	}

 	.wgts-list-img-box-b1 img {
 		height: 100%;
 		width: 100%;
 		border-radius: 10px;
 	}

 	.wgts-list-img-box-b2 {
 		height: 49%;
 		width: 100%;
 	}

 	.wgts-list-img-box-b2 img {
 		height: 100%;
 		width: 100%;
 		border-radius: 10px;
 	}
	
	
.wgt-product-list__header{
	width: 100%;
	margin-top: 3vw;
	margin-bottom: 3vw;
}
.wgt-product-list__title{
	width: 95%;
	margin: 0px auto;
	font-size: 4vw;
	margin-top: 5vw;
}


.taro-img__mode-widthfix{
	width: 100%;
}
.taro-img__mode-widthfix-a{
	width: 95%;
	margin: 0px auto;
}
.taro-img__mode-widthfix-a img{
	width: 100%;
	border-radius: 15px;
}


.product-list-goods{
	width: 100%;
	margin-top: 2vw;
}
.product-list-goods-a{
	width: 95%;
	margin: 0px auto;
}
.product-list-goods-a ul{
	width:100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	}
.list-goods-a{
	width: 49%;
	background: #fff;
	margin-top: 2vw;
	border-radius: 10px;
}
.list-goods-a img{
	width: 50%;
	margin-left: 25%;
	margin-top: 8%;
	margin-bottom: 8%;
}
.list-goods-a1{
	margin-left: 9%;
	line-height: 7vw;
	font-size: 4vw;
	color: black;
}
.list-goods-a2{
	  margin-left: 9%;
	  font-size: 3vw;
	  color: #666666;
	  line-height: 5vw;
	}

.list-goods-a3{
	margin-left: 1vw;
	color: #2e7eee;
	font-size: 3vw;
	border: 0.5vw solid #2e7eee;
}
.list-goods-a5{
	margin-left: 9%;
	color: red;
	line-height: ;
	font-size: 3vw;
	border: 0.5vw solid red;
}
.list-goods-a4{
	margin-left: 9%;
	color: red;
	font-size: 4vw;
}
.wgts-baseline {
  height: 100px;
  width: 100%;
  text-align: center;
  line-height: 75px;
  color: #aaa;
}
 </style>
