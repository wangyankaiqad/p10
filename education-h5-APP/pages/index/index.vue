<template>
	<view>
			<search></search>
			<mxg-banner></mxg-banner>
		<view class="nav">
			<li v-for="item in navData" :key="item.id">{{ item.name }}</li>
		</view>
		<view class="hot">
			<p>
				<span>热门推荐</span>
				<span>全部></span>
			</p>
			<view class="hot1"></view>
		</view>
	</view>
</template>

<script>
import { getTitle, getRe } from '../../api/index/index.js';
import { ref, reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({
			navData: [],
			hotData: []
		});
		getTitle().then(res => {
			data.navData = res.data.slice(0, 8);
		});
		getRe().then(res => {
			console.log(res,1231231231);
		});	
	
		return {
			...toRefs(data)
		};
	}
};
</script>

<style lang="scss">
.top {
	height: 580rpx;
	background-image: linear-gradient(to bottom, rgb(69, 50, 140), rgb(0, 0, 0, 0));
	overflow: hidden;
	text-align: center;
}

.nav {
	display: flex;
	width: 90%;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: auto;
	margin-top: 20rpx;
}
li {
	width: 150rpx;
	height: 70rpx;
	background-color: #f8f9fb;
	text-align: center;
	line-height: 70rpx;
	font-size: 26rpx;
	border-radius: 20rpx;
	overflow: hidden;
	margin-top: 14rpx;
	list-style: none;
}
.hot {
	margin-top: 20rpx;
	margin: 20rpx 40rpx;
	p {
		background-color: red;
		height: 60rpx;
		line-height: 60rpx;
		// font-size: 20px
		span:nth-of-type(2) {
			float: right;
			font-size: 26rpx;
			color: gray;
		}span:nth-of-type(1) {
			font-size: 40rpx;
			
		}
	}
}
</style>
