<template>
	<view class="content">
		<!-- 状态栏 -->
		<!-- <view class="status"></view> -->
		<!-- <view class="tabbar"></view> -->
		<view class="msg">
			<view class="project">
				<view class="title item">按压</view>
				<view class="item" v-for="item in list.press.msg  " :key="item.id"> {{item.name}} {{item.value}} 次</view>
			</view>
			<view class="project">
				<view class="title item">吹气</view>
				<view class="item" v-for="item in list.cui.msg  " :key="item.id"> {{item.name}} {{item.value}} 次</view>
			</view>
		</view>
		<!-- 数据可视化 -->
		<view class="echarts">
			<!-- 按压深度 -->
			<view class="deep">
				<view class="num">0</view>
				<view class="progress">
					<view class="result">
						<view class="square"></view>
					</view>
				</view>
				<view class="text">按压深度</view>
			</view>
		<!-- 按压位置 -->
		<view class="position"></view>
		<!-- 吹气量 -->
		<view class="cui">
			<view class="num">0</view>
			<view class="progress">
				<view class="result">
					<view class="square"></view>
				</view>
			</view>
			<view class="text">吹气量</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:{
					press:{
						length:0,
						msg:[
						{
						id:0,
						name:'正确',
						value:0,
						
					},
					{
						id:1,
						name:'过大',
						value:0,
						
					},
					{
						id:2,
						name:'不足',
						value:0,
						
					},
					{
						id:3,
						name:'少按',
						value:0,
						
					},
					{
						id:4,
						name:'多按',
						value:0,
					}
					]
					},
				cui:[
					{
						id:0,
						name:'正确',
						value:0,
						
					},
					{
						id:1,
						name:'过大',
						value:0,
						
					},
					{
						id:2,
						name:'不足',
						value:0,
						
					},
					{
						id:3,
						name:'少按',
						value:0,
						
					},
					{
						id:4,
						name:'多吹',
						value:0,
					}
				]
				}
			}
		},
		onLoad() {
		// 	console.log(111)
		// uni.getSystemInfo({
		// 	success:(res)=>{
		// 		console.log(res)
		// 	},
		// 	fail:(err)=>{
		// 		console.log(err)
		// 	}
		// })
		},
		methods: {

		}
	}
</script>

<style lang="scss" >
	/* .status{
		height: var(----status-bar-height);
	}
	.tabbar{
		background: blue;
	} */
	.echarts{
		height: 300px;
		background: blue;
		display:flex;
		color: #fff;
		padding: 5px 10px;
		font-size: 14px;
		.deep,.cui{
			width: 25vw;
			// background: #2C405A;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			.progress{
				width: 20px;
				background: #fff;
				height: 200px;
				.result{
					// background: #afff2a;
					height:30%;
					// position:relative;
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					.square{
						width: 100%;
						height:30px;
						// background: #95eb90;
						// position: absolute;
						// bottom: 0;
					}
				}
			}
			
		}
		.deep{
			.result{
				background: #afff2a;
				.square{
					background: #95eb90;
				}
			}
		}
		.position{
			width: 50vw;
			background: red;
			
		}
		.cui{
			width: 25vw;
			// background: #fff;
			.result{
				background: #fff;
				.square{
					background: #f8a17b;
				}
			}
		}
	}
	.msg{
		font-size: 12px;
		border-bottom: 1px solid green ;
		.project{
			height: 50px;
			display: flex;
			
			.item{
				flex: 1;
				border: 1px solid green ;
				border-bottom: 0;
				border-right: 0;
				color: #ec7259;
				display: flex;
				justify-content: center;
				align-items: center;
				&:first-child{
					border-left: 0;
				}
			}
		}
	}
</style>
