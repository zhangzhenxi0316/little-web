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
				<view class="num">{{list.press.deep}}</view>
				<view class="progress">
					<view class="result" :style="{height:list.press.deep+'%'}">
						<view class="square"></view>
					</view>
				</view>
				<view class="text">按压深度</view>
			</view>
			<!-- 按压位置 -->
			<view class="position"></view>
			<!-- 吹气量 -->
			<view class="cui">
				<view class="num">{{list.cui.deep}}</view>
				<view class="progress">
					<view class="result" :style="{height:list.cui.deep+'%'}">
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
	let devicename = 'MacBook Pro'
	let _characteristicId = ''
	let _serviceId = ''
	let _deviceId = ''
	export default {

		data() {
			return {
				list: {
					press: {
						deep: 10,
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
						deep: 50,
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
				connect: false,
				send_hex: false,
				send_string: true,
				send_string_val: 'Hex',
				recv_string: true,
				recv_string_val: 'Hex',
				recv_value: '',
				send_number: 0,
				recv_number: 0,
				recv_hex: true
			}

		},
		onLoad() {
			this.openBluetoothAdapter()
		},
		methods: {
			// 初始化蓝牙适配器
			openBluetoothAdapter() {
				uni.openBluetoothAdapter({
					success: (res) => {
						// 蓝牙适配器初始化成功
						console.log('openBluetoothAdapter success', res);
						this.startBluetoothDevicesDiscovery()
					},
					fail: (err) => {
						// 蓝牙适配器初始化失败
						uni.showToast({
							title: '请打开蓝牙',
							duration: 1000,
							icon:'none'
						})
						if (err.errCode === 10001) {
							// 监听蓝牙适配器状态改变
							uni.onBluetoothAdapterStateChange(function(res) {
								console.log('BluetoothAdapterStateChange', +res);
								if (res.available) {
									this.startBluetoothDevicesDiscovery()
								}

							})
						}
					}
				})
			},
			// 开始搜寻蓝牙外围设备
			startBluetoothDevicesDiscovery() {

				if (deviceDiscover) {
					return
				}
				deviceDiscover = true
				uni.startBluetoothDevicesDiscovery({
					allowDuplicatesKey: false,
					success: (res) => {
						console.log('startBluetoothDevicesDiscovery', res);
						this.onBluetoothDeviceFound();
					}
				})
			},
			// 监听到寻找到的新设备
			onBluetoothDeviceFound() {
				let that = this
				uni.showLoading({
					title: '正在搜索设备'
				})
				uni.onBluetoothDeviceFound(function(res) {
					res.devices.forEach(device => {
						if (!device.name && !device.localName) {
							return
						}
						console.log('device',device);
						//如果名字相同连接设备
						if (device.name == devicename) {
							that.createBLEConnection(device.deviceId);
							that.deviceId = device.deviceId
							uni.hideLoading()
							// console.log('ddddd')
							that.stopBluetoothDevicesDiscovery()
							uni.showLoading({
								title: '搜索到设备正在连接'
							})
						}
					})

				})
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
						this.getBLEDeviceServices(deviceId);
					},
					fail: (err) => {
						console.log('创建连接失败')
					}
				})
				
			},
			// 停止蓝牙搜索
			stopBluetoothDevicesDiscovery() {
				uni.stopBluetoothDevicesDiscovery({
					success: (res) => {
						console.log('停止蓝牙设备搜索')
					}
				})
			},
			// 获取蓝牙所有服务
			getBLEDeviceServices(deviceId) {
				let that = this;
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
							/* 判断是否是我们需要的FEE0 */
							if (UUID_slice == 'FFE0' || UUID_slice == 'ffe0') {
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
								that.characteristicsId= characteristics[index_uuid].uuid //暂时确定的写入UUID
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
					success: (res)=> {
						console.log('使能成功', res);
						/* 设备返回值 */
						uni.onBLECharacteristicValueChange(function(res) {
							let length_hex = [];
							let turn_back = "";
							let result = res.value;
							let hex = that.buf2hex(result);
							console.log('返回的值', hex);
							if (that.recv_string == true) {
								/* 成功接收到的值的展示 */
								that.recv_value = that.recv_value + hex
								/* 接收成功的值的字节 */
								let recv_number_1 = that.recv_number + hex.length / 2;
								let recv_number = Math.round(recv_number_1);
								that.recv_number = recv_number

							} else {
								console.log('设备返回来的值', hex);
								let f_hex = hex;
								let length_soy = f_hex.length / 2;
								let length = Math.round(length_soy);
								for (let i = 0; i < length; i++) {
									let hex_spalit = f_hex.slice(0, 2);
									length_hex.push(hex_spalit);
									f_hex = f_hex.substring(2);
								}
								console.log('length_hex', length_hex);
								for (let j = 0; j < length_hex.length; j++) {

									let integar = length_hex[j]; //十六进制
									recve_value = parseInt(integar, 16); //十进制
									console.log('recve_value', recve_value);

									turn_back = turn_back + String.fromCharCode(recve_value);
									console.log('turn_back', turn_back);
								}

								console.log('最终转回来的值', turn_back)
								let recv_number_1 = that.recv_number + turn_back.length;
								let recv_number = Math.round(recv_number_1);
								that.recv_number = recv_number
								that.recv_value = that.recv_value + turn_back

							}
						});
					},

					fail: function(res) {
						console.log('使能失败', res);
					}
				})
			},

			/* 点击，Hex与Ascii相互转换(send) */
			ToString16() {
				let that = this;
				let send_string_judge = !that.send_string;
				that.send_string = send_string_judge

				if (that.send_string == true) {
					that.send_string_val = 'Hex'

				} else {
					that.send_string_val = 'Ascii'

				}
			},
			/* ArrayBuffer类型数据转为16进制字符串 */
			    buf2hex (buffer) { // buffer is an ArrayBuffer
			        return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
			    },
			/* 点击，Hex与Ascii相互转换(recv) */
			RecvString16: function() {
				let that = this;
				let recv_string_judge = !that.recv_string;
				that.recv_string = recv_string_judge

				if (that.recv_string == true) {
					that.recv_string_val = 'Hex'

				} else {
					that.recv_string_val = 'Ascii'
				}
			},
 write: function (str) {
        var that = this;
        var value = str;
        console.log('value', value);
        /* 将数值转为ArrayBuffer类型数据 */
        var typedArray = new Uint8Array(value.match(/[\da-f]{2}/gi).map(function (h) {
            return parseInt(h, 16)
        }));
        var buffer = typedArray.buffer;
        uni.writeBLECharacteristicValue({
            deviceId: that.deviceId,
            serviceId: that.serviceId,
            characteristicId: that.characteristicsId,
            value: buffer,
            success: function (res) {
                console.log('数据发送成功', res);
            },
            fail: function (res) {
                console.log('调用失败', res);
                /* 调用失败时，再次调用 */
                uni.writeBLECharacteristicValue({
                    deviceId: that.deviceId,
                    serviceId: that.serviceId,
                    characteristicId: that.characteristicsId,
                    value: buffer,
                    success: function (res) {
                        console.log('第2次数据发送成功', res);
                    },
                    fail: function (res) {
                        console.log('第2次调用失败', res);
                        /* 调用失败时，再次调用 */
                        uni.writeBLECharacteristicValue({
                            deviceId: that.deviceId,
                            serviceId: that.serviceId,
                            characteristicId: that.data.characteristicsId,
                            value: buffer,
                            success: function (res) {
                                console.log('第3次数据发送成功', res);
                            },
                            fail: function (res) {
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
