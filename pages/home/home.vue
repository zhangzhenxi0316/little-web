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
				<view class="item" v-for="item in list.cui.msg " :key="item.id"> {{item.name}} {{item.value}} 次</view>
			</view>
		</view>
		<!-- 数据可视化 -->
		<view class="echarts">
			<!-- 按压深度 -->
			<view class="deep">
				<view class="num">{{pressDeep}}</view>
				<view class="progress">
					<view class="result" :style="{height:pressDeep+'%'}">
						<view class="square"></view>
					</view>
				</view>
				<view class="text">按压深度</view>
			</view>
			<!-- 按压位置 -->
			<view class="position"></view>
			<!-- 吹气量 -->
			<view class="cui">
				<view class="num">{{cuiDeep}}</view>
				<view class="progress">
					<view class="result" :style="{height:cuiDeep/10+'%'}">
						<view class="square"></view>
					</view>
				</view>
				<view class="text">吹气量</view>
			</view>
		</view>
		<view class="gauge-container">
			<view class="gauge">
				<uni-ec-canvas class="uni-ec-canvas" id="line-chart" ref="canvas" canvas-id="lazy-load-chart" :ec="ec"></uni-ec-canvas>

			</view>
			<view class="data">
				<view class="data-item">
					倒计时<div class="space">{{count}}</div>秒
				</view>
				<view class="data-item">
					循环<div class="space">{{loop}}</div>数
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	let deviceDiscover = false;

	let msg = ''
	export default {

		data() {
			return {
				pressDeep: 0,
				cuiDeep: 0,
				list: {
					press: {
						// deep: 10,
						msg: [{
								id: 0,
								name: '正确',
								value: 0,

							},
							{
								id: 1,
								name: '过大',
								value: 0,

							},
							{
								id: 2,
								name: '不足',
								value: 0,

							},
							{
								id: 3,
								name: '少按',
								value: 0,

							},
							{
								id: 4,
								name: '多按',
								value: 0,
							}
						]
					},
					cui: {
						// deep: 50,
						msg: [{
								id: 0,
								name: '正确',
								value: 0,

							},
							{
								id: 1,
								name: '过大',
								value: 0,

							},
							{
								id: 2,
								name: '不足',
								value: 0,

							},
							{
								id: 3,
								name: '少按',
								value: 0,

							},
							{
								id: 4,
								name: '多吹',
								value: 0,
							}
						]
					}
				},
				ec: {
					option: {

						series: [{
							name: '业务指标',
							type: 'gauge',
							detail: {
								formatter: '{value}%'
							},
							data: [{
								value: 30,
								name: '频率'
							}],
							radius: '100%',
							axisLine: {
								show: true,
								lineStyle: {
									width: 10,

								}
							},
							splitNumber: 3,
							splitLine: {
								show: false
							},
							axisLabel: {
								show: false,

							},
							pointer: {
								width: 6
							},
							title: {
								offsetCenter: [0, '80%'],
								color: '#7f7f7f'
							},
							detail: {
								show: false,
								fontSize: 18
							}
						}]
					}
				},
				loop: 0,
				count: 0,
				serviceId: '',
				deviceId: '',
				notycharacteristicsId: '',
				characteristicsId: '',

			}

		},
		onLoad(e) {
			// this.openBluetoothAdapter()
			// console.log(e)
			this.deviceId = e.id
			// this.createBLEConnection(e.id)
		},
		onUnload() {
			uni.closeBLEConnection({
				deviceId: this.deviceId
			})
		},
		onHide() {
			uni.closeBLEConnection({
				deviceId: this.deviceId
			})
		},
		onShow() {
			this.createBLEConnection(this.deviceId)
			this.write('a55a020c00')
		},
		methods: {
			switchFun(category, item) {
				switch (category) {
					// 0x02 20ms数据用来看按压数据
					case "02":

						let obj = this.parse02(item)
						this.pressDeep = obj.pressDeep;
						this.cuiDeep = obj.cuiDeep
						break;
					case "01":
						//模型设备编码
						// console.log(item)
						let code = item.slice(8, 14)
						console.log(code)
						break;
					case "07":
						//门的状态
						let mode = parseInt(item.slice(8, 10), 16)
						break;
					case "0b":
						console.log('闻讯cpr设置');
						break;
					case "0a":
						console.log('接收设置完成');
						break;
					case "03":
						// this.list.press.msg[0].value = parseInt(item.slice(8, 10), 16)
						// this.list.press.msg[1].value = parseInt(item.slice(10, 12), 16)
						// this.list.press.msg[2].value = parseInt(item.slice(12, 14), 16)
						// this.list.press.msg[3].value = parseInt(item.slice(14, 16), 16)
						// this.list.press.msg[4].value = parseInt(item.slice(16, 18), 16)
						// this.list.press.msg[5].value = parseInt(item.slice(18, 20), 16)
						let i = 8;
						this.list.press.msg = this.list.press.msg.map(a => {
							a.value = parseInt(item.slice(i, i + 2), 16)
							i += 2;
							return a
						})
						break;
					case "04":
						// blow
						// this.operateDetail.blow[0].num = parseInt(item.slice(8, 10), 16)
						// this.operateDetail.blow[1].num = parseInt(item.slice(10, 12), 16)
						// this.operateDetail.blow[2].num = parseInt(item.slice(12, 14), 16)
						// this.operateDetail.blow[3].num = parseInt(item.slice(14, 16), 16)
						// this.operateDetail.blow[4].num = parseInt(item.slice(16, 18), 16)
						i = 8;
						this.list.cui.msg = this.list.cui.msg.map(a => {
							a.value = parseInt(item.slice(i, i + 2), 16)
							i += 2;
							return a
						})
						break;
					case "05":
						// this.operateDetail.press[6].num = parseInt(item.slice(8, 10), 16)
						// this.operateDetail.press[7].num = parseInt(item.slice(10, 12), 16)
						break;
					case "06":
						let AEDTitle = parseInt(item.slice(8, 10), 16) == 0 ? '关机' : '开机时间不对';
						console.log('AED开机状态' + AEDTitle)
						switch (item.slice(10, 12)) {
							case "00":
								// this.operateDetail.AED[1].title = '电极未插入';
								console.log('电极未插入')
								break;
							case "01":
								// this.operateDetail.AED[1].title = '电极插入次序不对';
								console.log('电极插入次序不对')
								break;
							case "02":
								// this.operateDetail.AED[1].title = '电极贴的位置不对';
								console.log('电极贴的位置不对')
								break;

						}
						switch (item.slice(12, 14)) {
							case "01":
								// this.operateDetail.AED[2].title = '正确除颤';
								console.log('正确除颤')
								break;
							case "02":
								// this.operateDetail.AED[2].title = '危险操作';
								console.log('危险操作')
								break;
							case "03":
								// this.operateDetail.AED[2].title = '错误除颤';
								console.log('错误除颤')
								break;

						}
						break;
					case "09":
						if (item.slice(8, 10) == "00") {
							// this.operateList[0].name = "意识未判断";
							// this.operateList[0].isCorrect = false
							console.log('意识未判断')
						} else {
							// this.operateList[0].name = "意识判断"
							// this.operateList[0].isCorrect = true
							console.log('意识判断')
						}
						if (item.slice(10, 12) == "00") {
							// this.operateList[1].name = "未检测到动脉";
							// this.operateList[1].isCorrect = false
							console.log('未检测到动脉')
						} else {
							// this.operateList[1].name = "检测动脉"
							// this.operateList[1].isCorrect = true
							console.log('检测动脉')
						}
						if (item.slice(12, 14) == "00") {
							// this.operateList[2].name = "未抬头开放气道";
							// this.operateList[2].isCorrect = false
							console.log('未抬头开放气道')
						} else {
							// this.operateList[2].name = "抬头开放气道"
							// this.operateList[2].isCorrect = true
							console.log('抬头开放气道')
						}
						break;
					case "0c":
						console.log('询问当前用户id')
						break;




				}
			},

			// 创建连接
			createBLEConnection(deviceId) {
				uni.createBLEConnection({
					deviceId: deviceId,
					success: (res) => {
						uni.showToast({
							title: '连接成功'
						})
						console.log('createBLEConnection', res);
						setTimeout(() => {
							this.getBLEDeviceServices(deviceId);
						}, 1000)
					},
					fail: (err) => {
						console.log('创建连接失败')
					}
				})

			},
			// 停止蓝牙搜索
			// stopBluetoothDevicesDiscovery() {
			// 	uni.stopBluetoothDevicesDiscovery({
			// 		success: (res) => {
			// 			console.log('停止蓝牙设备搜索')
			// 		}
			// 	})
			// },
			// 获取蓝牙所有服务
			getBLEDeviceServices(deviceId) {
				let that = this;
				// console.log(1111,this.deviceId)
				uni.getBLEDeviceServices({
					deviceId: deviceId,
					success: (service) => {
						let all_UUID = service.services; //取出所有的服务
						console.log('所有的服务', all_UUID);
						let UUID_lenght = all_UUID.length; //获取到服务数组的长度
						/* 遍历服务数组 */
						for (let index = 0; index < UUID_lenght; index++) {
							let ergodic_UUID = all_UUID[index].uuid; //取出服务里面的UUID
							let UUID_slice = ergodic_UUID.slice(4, 8); //截取4到8位
							// console.log(11111,UUID_slice)
							/* 判断是否是我们需要的FEE0 */
							if (UUID_slice == 'FEE0' || UUID_slice == 'fee0') {
								let index_uuid = index;
								that.serviceId = all_UUID[index_uuid].uuid //确定需要的服务UUID

							};
						};
						console.log('需要的服务UUID', that.serviceId)
						that.getBLEDeviceCharacteristics(); //调用获取特征值函数
					}

				})
			},
			// 获取所有服务的特征值
			getBLEDeviceCharacteristics() {
				let that = this;
				let device_characteristics = [];
				let characteristics_uuid = {};
				uni.getBLEDeviceCharacteristics({
					deviceId: this.deviceId,
					serviceId: this.serviceId,
					success: (res) => {
						let characteristics = res.characteristics; //获取到所有特征值
						let characteristics_length = characteristics.length; //获取到特征值数组的长度
						console.log('获取到特征值', characteristics);
						console.log('获取到特征值数组长度', characteristics_length);
						/* 遍历数组获取notycharacteristicsId */
						for (let index = 0; index < characteristics_length; index++) {
							let noty_characteristics_UUID = characteristics[index].uuid; //取出特征值里面的UUID
							let characteristics_slice = noty_characteristics_UUID.slice(4, 8); //截取4到8位
							// console.log('id'+characteristics_slice)
							/* 判断是否是我们需要的FEE1 */
							if (characteristics_slice == 'FEE1' || characteristics_slice == 'fee1') {
								let index_uuid = index;
								that.notycharacteristicsId = characteristics[index_uuid].uuid //需确定要的使能UUID
								that.characteristicsId = characteristics[index_uuid].uuid //暂时确定的写入UUID
								// console.log('id1'+characteristicsId)
								/* 遍历获取characteristicsId */
								for (let index = 0; index < characteristics_length; index++) {
									let characteristics_UUID = characteristics[index].uuid; //取出特征值里面的UUID
									let characteristics_slice = characteristics_UUID.slice(4, 8); //截取4到8位
									/* 判断是否是我们需要的FEE2 */
									if (characteristics_slice == 'FEE2' || characteristics_slice == 'fee2') {
										let index_uuid = index;
										that.characteristicsId = characteristics[index_uuid].uuid //确定的写入UUID

									};
								};
							};
						};
						console.log('使能characteristicsId', that.notycharacteristicsId);
						console.log('写入characteristicsId', that.characteristicsId);
						that.notycharacteristics(); //使能事件

					},
					fail: (err) => {
						console.log('getBLEDeviceCharacteristics', err)
					}

				})
			},
			/* 使能函数 */
			notycharacteristics() {
				let that = this;
				let recv_value_ascii = "";
				let string_value = "";
				let recve_value = "";
				uni.notifyBLECharacteristicValueChange({
					deviceId: that.deviceId,
					serviceId: that.serviceId,
					characteristicId: that.notycharacteristicsId,
					state: true,
					success: (res) => {
						console.log('使能成功', res);
						/* 设备返回值 */
						uni.onBLECharacteristicValueChange((res) => {

							let result = res.value;
							let hex = that.buf2hex(result);
							hex = hex + msg
							// console.log('返回的值', hex);
							let resObj = that.parse(hex)
							msg = resObj.slice
							// console.log(hex)
							resObj.strArr.map((item, index) => {
								let category = item.slice(6, 8)
								// 
								that.switchFun(category, item)
							})
						});
					},

					fail: function(res) {
						console.log('使能失败', res);
					}
				})
			},


			/* ArrayBuffer类型数据转为16进制字符串 */
			buf2hex(buffer) { // buffer is an ArrayBuffer
				return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
			},



			parse02(str) {
				let i = 8;
				let pressDeep = parseInt(str.slice(8, 10), 16) //按压距离
				let cui = parseInt(parseInt(str.slice(10, 12), 16) << 8) + parseInt(str.slice(12, 14), 16)
				let position = str.slice(14, 16)
				return {
					pressDeep,
					cuiDeep: cui,
					position
				}
			},
			parse(str) {
				let exp = /a55a/g
				let tap = true;
				let indexArr = []
				let strArr = []
				let obj = {}
				while (tap) {
					let res = exp.exec(str);
					if (res) {
						indexArr.push(res.index)
					} else {
						tap = false;
					}
				}

				for (let i = 0; i < indexArr.length; i++) {
					// 获取长度
					let length = parseInt(str.slice(indexArr[i] + 4, indexArr[i] + 6), 16) * 2 + 6
					// indexArr[i]+4==str.length?length=0:length=length
					// console.log(indexArr[i]+length)
					if (indexArr[i] + length - 1 < str.length) {
						let strRes = str.slice(indexArr[i], indexArr[i] + length)
						strArr.push(strRes)
						if (i == indexArr.length - 1) {
							strRes = str.slice(indexArr[i] + length)
							obj.slice = strRes
							// console.log(strRes)
						}
					} else {
						let strRes = str.slice(indexArr[i])
						obj.slice = strRes
						// console.log(indexArr[i]+length)
					}

				}
				if (indexArr.pop())
					return {
						strArr,
						...obj
					}
			},
			write(str) {
				var that = this;
				var value = str;
				console.log('value', value);
				console.log('id',this.characteristicsId)
				/* 将数值转为ArrayBuffer类型数据 */
				var typedArray = new Uint8Array(value.match(/[\da-f]{2}/gi).map(function(h) {
					return parseInt(h, 16)
				}));
				var buffer = typedArray.buffer;
				uni.writeBLECharacteristicValue({
					deviceId: that.deviceId,
					serviceId: that.serviceId,
					characteristicId: that.characteristicsId,
					value: buffer,
					success: function(res) {
						console.log('数据发送成功', res);
					},
					fail: function(res) {
						console.log('调用失败', res);
						/* 调用失败时，再次调用 */
						uni.writeBLECharacteristicValue({
							deviceId: that.deviceId,
							serviceId: that.serviceId,
							characteristicId: that.characteristicsId,
							value: buffer,
							success: function(res) {
								console.log('第2次数据发送成功', res);
							},
							fail: function(res) {
								console.log('第2次调用失败', res);
								/* 调用失败时，再次调用 */
								uni.writeBLECharacteristicValue({
									deviceId: that.deviceId,
									serviceId: that.serviceId,
									characteristicId: that.characteristicsId,
									value: buffer,
									success: function(res) {
										console.log('第3次数据发送成功', res);
									},
									fail: function(res) {
										console.log('第3次调用失败', res);
									}
								});
							}
						});
					}
				});
			},
		}

	}
</script>

<style lang="scss" scoped>
	/* .status{
		height: var(----status-bar-height);
	}
	.tabbar{
		background: blue;
	} */
	.echarts {
		height: 300px;
		background: blue;
		display: flex;
		color: #fff;
		padding: 5px 10px;
		font-size: 14px;

		.deep,
		.cui {
			width: 25vw;
			// background: #2C405A;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;

			.progress {
				width: 20px;
				background: #fff;
				height: 200px;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;

				.result {
					// background: #afff2a;
					// height:30%;
					// position:relative;
					transform: translateZ(0);
					transition: all .5 s;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;

					.square {
						width: 100%;
						height: 30px;
						// background: #95eb90;
						// position: absolute;
						// bottom: 0;
					}
				}
			}

		}

		.deep {
			.result {
				background: #afff2a;
				height: 20%;

				.square {
					background: #95eb90;
				}
			}
		}

		.position {
			width: 50vw;
			background: red;

		}

		.cui {
			width: 25vw;

			// background: #fff;
			.result {
				background: #fff;

				// height:%;
				.square {
					background: #f8a17b;
				}
			}
		}
	}

	.msg {
		font-size: 12px;
		border-bottom: 1px solid green;

		.project {
			height: 50px;
			display: flex;

			.item {
				flex: 1;
				border: 1px solid green;
				border-bottom: 0;
				border-right: 0;
				color: #ec7259;
				display: flex;
				justify-content: center;
				align-items: center;

				&:first-child {
					border-left: 0;
				}
			}
		}
	}

	.gauge-container {
		// margin-top: 10rpx;
		display: flex;
		height: 250rpx;

		.gauge {
			padding-top: 15rpx;
			background: #000;
			width: 40%;

			font-size: 10.29rpx;
		}

		.data {
			width: 60%;
			box-sizing: border-box;
			border: 10rpx solid #5CCCFC;
			display: flex;
			justify-content: center;
			align-items: center;

			.data-item {
				margin-right: 10rpx;
				display: flex;

				// color: red;
				.space {
					width: 30rpx;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
	}
</style>
