<template>
	<div>
		<div class="icon-back" @click="tologin">
		     <van-icon size="25" name="arrow-left" />
			 <span>商品详情</span>
		 </div>
		 
		 <div class="gooa_warp">
			<div class="gooa_warp_img">
				<img src="img/014.png" alt="">
			</div>
			<div class="gooa_warp_ce">
				<span class="ce-a">nubia 努比亚Z40S Pro</span>
				<br>
				<span class="ce-b">￥ 3399</span>
				<br>
				<span class="ce-c">【S级性能】 新骁龙8+移动平台 5000mAh超长续航</span>
				<br>
				<span class="ce-c">【Pro 级影像】独家35mm定制光学 九大星空算法</span>
				<br>
				<span class="ce-c">【致敬经典】超窄直屏边框</span>
				<br>
				<span class="ce-d"> ①12期花呗免息，低至9.3元/日</span>
				<br>
				<span class="ce-d"> ②学生认证返100兴币</span>
			</div>
			
			<div class="selection-spec">
				<van-icon name="star-o" />
				<span>收藏</span>
			</div>
		 </div>
		 
		 <div class="selection-spec-a"> </div>
		 
		 
		 <div class="selection-spec-b">
			 <div class="selection-spec-b1">
				 <span>规格</span>
			 </div>
			 <div class="selection-spec-b2">
				<ul>
					<li>
						<img src="img/015.png" alt="">
						<br>
						<span>屏幕尺寸</span>
						<br>
						<span>6.67英寸</span>
					</li>
					<li>
						<img src="img/015.png" alt="">
						<br>
						<span>屏幕尺寸</span>
						<br>
						<span>6.67英寸</span>
					</li>
					<li>
						<img src="img/015.png" alt="">
						<br>
						<span>屏幕尺寸</span>
						<br>
						<span>6.67英寸</span>
					</li>
					<li>
						<img src="img/015.png" alt="">
						<br>
						<span>屏幕尺寸</span>
						<br>
						<span>6.67英寸</span>
					</li>
					<li>
						<img src="img/015.png" alt="">
						<br>
						<span>屏幕尺寸</span>
						<br>
						<span>6.67英寸</span>
					</li>
				</ul>
			 </div>
		 </div>
		 
		 <div class="selection-spec-c">
			 <div class="selection-spec-c1">
				 <span>服务</span>
			 </div>
			  <div class="selection-spec-c2">
				  <span>①七天无理由退货</span>
				  <br>
				  <span>②99元免费运</span>
			  </div>
		 </div>
		 
		  <div class="selection-spec-d">
			  <span>推荐商品</span>
			  </div>
		   <div class="selection-spec-e"> 
				<ul>
					<li>
						<img src="img/018.png" alt="">
						<br>
						<span class="spec-e-a">nubia Z40</span>
						<br>
						<span class="spec-e-b">￥3399</span>
					</li>
					<li>
						<img src="img/018.png" alt="">
						<br>
						<span class="spec-e-a">nubia Z40</span>
						<br>
						<span class="spec-e-b">￥3399</span>
					</li>
					<li>
						<img src="img/018.png" alt="">
						<br>
						<span class="spec-e-a">nubia Z40</span>
						<br>
						<span class="spec-e-b">￥3399</span>
					</li>
					
				</ul>
		   </div>
		   
		    <div class="selection-spec-f"> 
				<ul>
					<li><img src="img/019.jpg" alt=""></li>
					<li><img src="img/020.jpg" alt=""></li>
					<li><img src="img/021.jpg" alt=""></li>
					<li><img src="img/022.jpg" alt=""></li>
					<li><img src="img/023.jpg" alt=""></li>
				</ul>
			</div>
			
		 
		 <van-goods-action>
		   <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
		   <van-goods-action-icon icon="cart-o" text="购物车" />
		   <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
		   <van-goods-action-button type="warning" text="加入购物车" />
		   <van-goods-action-button type="danger" text="立即购买" />
		 </van-goods-action>
	</div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        data() {
            return {
               
            };
        },
        methods: {
            tologin(){
                this.$router.go(-1);
            }
    }
	}
</script>

<style>
	.icon-back span{
		margin-left: 36vw;
		font-size: 1.2rem;
	}
	
	.gooa_warp{
		width: 95%;
		margin: 0px auto;
		margin-top: 2vw;
	}
	.gooa_warp_img img{
		width: 100%;
	}
	
	.ce-a{
	font-size: 5vw;
	padding: 1vw 2vw;
	}
	.ce-b{
		color: red;
		font-size: 8vw;
	}
	.ce-c{
		font-size: 3vw;
		color: rgb(169, 76, 66);
	}
	.ce-d{
		font-size: 3vw;
		}
	.selection-spec{
		width: 95%;
		margin-top: 5vw;
	}
	.selection-spec i{
		font-size: 6vw;
		}
		.selection-spec span{
			margin-left: 2vw;
			color: #666666;
		}
	.selection-spec-a{
		width: 95%;
		margin: 0px auto ;
		height: 20vw;
		margin: 0px auto;
		}
		
		.selection-spec-b{
			width: 95%;
			margin: 0px auto;
			margin-top: 2vw;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: space-between
		}
		.selection-spec-b1{
			width: 10%;
		}
		.selection-spec-b1 span{
			margin-top: 50%;
			line-height: 15vw;
		}
		.selection-spec-b2{
			width: 90%;
		}
		.selection-spec-b2 img {
			width: 6vw;
			margin-left: 4vw;
		}
		.selection-spec-b2 span{
			font-size: 2.5vw;
			margin-left: 2vw;
		}
		.selection-spec-b2 li{
			float: left;
			margin-left: 4vw;
		}
		
		.selection-spec-c{
			width: 95%;
			margin: 0px auto;
			margin-top: 2vw;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: space-between	
		}
		.selection-spec-c1{
			width: 10%;
		}
		.selection-spec-c1 span{
			margin-top: 50%;
			line-height: 10vw;
		}
		.selection-spec-c2{
			width: 90%;
		}
		.selection-spec-c2 span{
			font-size: 3vw;
			line-height: 1vw;
			margin-left: 2vw;
		}
		
		.selection-spec-d{
			width: 95%;
			margin: 0px auto ;
			margin-top: 3vw;
			margin-bottom: 4vw;
		}
		.selection-spec-e{
			width: 95%;
			margin: 0px auto;
		}
		.selection-spec-e img {
			width: 30vw;
		}
		.selection-spec-e span{
		
			margin-left: 6vw;
		}
		.spec-e-a{
			font-size: 4vw;
		}
		.spec-e-b{
			font-size: 5vw;
			color: red;
		}
		.selection-spec-e li{
			float: left;
			margin-left: 1vw;
		}
		.selection-spec-f{
			width:95%;
			margin: 0px auto;
		}
		.selection-spec-f img {
			width: 95vw;
		}
</style>