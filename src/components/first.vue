<template >
    <main>
            <!-- router-view放置跳转以后渲染的内容 -->
        <router-view></router-view>
        <ul class="bot">
            <li><router-link to="/index">首页</router-link></li>
            <li><router-link to="/type">分类</router-link></li>
			<li><router-link to="/shopcart">购物车</router-link></li>
            <li><router-link to="/my">我的</router-link></li>
        </ul>
    </main>
</template>
<!-- 写在此处的css是全局的 加 scoped变成局部-->
<style >
*{
    margin:0px;
    padding:0px;
    list-style:none;
}
</style>

<style scoped>

.bot{
    position: fixed;
    bottom:0px;
    left: 0px;
	height: 50px;
    width:100%;
	background: #fff;
	line-height: 50px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between
}
.bot li{
    width:33.33%;
    float: left;
    text-align: center;
}
.bot a{
    text-decoration: none;
    color:black;
}
.bot .router-link-active{
    color:red;
}
.bot .router-link-active img:nth-of-type(2){
    display: inline-block;
}
.bot .router-link-active img:nth-of-type(1){
    display: none;
}
.bot a img:nth-of-type(2){
    display: none;
}
.bot a img:nth-of-type(1){
    display: inline-block;
}
</style>
