<template>
	<main>
		<div class="at-nav-bar">
			会员中心
		</div>
		<div class="member-header-user">
			<div class="member-header-user-a">
				<van-icon name="setting-o" />
			</div>
		</div>
		<div class="member-header-noUserName">
			<div class="member-header-name">
				<van-icon name="user-circle-o" />
			</div>
			<div class="member-header-up">
				<span><router-link to="/Login">登录</router-link></span>
			</div>
			</div>
			
			<div class="sp-cell">
				<div class="sp-cell-a">
					<span class="sp-cell-a1">我的订单</span>
					<span class="sp-cell-a2">全部订单>></span>
				</div>
				<div class="sp-cell-b">
					<ul>
						<li>
							<van-icon name="balance-list" />
							<br>
							<span>待付款</span>
						</li>
						<li>
							<van-icon name="todo-list-o" />
							<br>
							<span>待发货</span>
						</li>
						<li>
							<van-icon name="logistics" />
							<br>
							<span>待收货</span>
						</li>
						<li>
							<van-icon name="chat-o" />
							<br>
							<span>待评价</span>
						</li>
					</ul>
				</div>
			</div>
			
			<div class="sp-cel">
				<div class="sp-cel-a">
					<img src="img/010.jpg" alt="">
				</div>
				<div class="sp-cel-b">
					<div class="sp-cell-b">
						<ul>
							<li>
								<van-icon name="coupon-o" />
								<br>
								<span>我的优惠券</span>
							</li>
							<li>
								<van-icon name="location-o" />
								<br>
								<span>我的地址</span>
							</li>
							<li>
								<van-icon name="refund-o" />
								<br>
								<span>我的售后</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="button-a"></div>
	</main>
</template>

<style>
	.at-nav-bar{
		width: 100%;
		text-align: center;
		font-size: 1.2rem;
		padding: 1vh;
		box-sizing: border-box;
		background: #fff;
	}
	.member-header-user{
		width: 100%;	
	}
	.member-header-user i{
		font-size: 6vw;
	}
	.member-header-user-a{
		text-align: right;
		margin-right: 5vw;
		margin-top: 5vw;
	}
	
	
	.member-header-noUserName{
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between
	}
	.member-header-name{
		width: 50%;
		margin-left: 10vw;
	}
	.member-header-name i{
		font-size: 15vw;
	}
	.member-header-name span{
		line-height: 2vw;
	}
	.member-header-up{
		width: 50%;
	}
	.member-header-up span{
		border: 0.5vw solid #fff;
		color: #fff;
		font-size: 5vw;
		border-radius: 10px;
		padding: 2vw 2vw;
		line-height: 15vw;
		margin-left: 25vw;
	}
	
	.sp-cell{
		width: 95%;
		margin: 0px auto;
		margin-top: 20vw;
		background: #fff;
		border-radius: 10px;
	}
	
	.sp-cell-a2{
		margin-left: 55vw;
	}
	.sp-cell-b i{
		font-size: 10vw;
	}
	.sp-cell-b li{
		width: 25%;
		text-align: center;
	}
	.sp-cell-b ul{
		width: 100%;
		margin-top: 7vw;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-around;
	}
	
	.sp-cel{
		width: 95%;
		margin: 0px auto;
		margin-top: 5vw;
	}
	.sp-cel-a img{
		width: 100%;
		border-radius: 10px;
	}
	
	.sp-cel-b{
		width: 100%;
		background: #fff;
		border-radius: 10px;
	}
	.button-a{
		width: 100%;
		height: 60vw;
	}
	
</style>