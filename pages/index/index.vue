<template>
	<view class="container">
	     <block v-for="item in deviceArray">
	        <view class="device_box" :data-deviceId="item.ID" :data-deviceName="item.name" @tap="onLianTap">
	            <view class='device_NI'>
	                <view class="device_name">{{item.name}}</view>
	                <view class="device_id">{{item.ID}}</view>
	            </view>
	            <view class='device_RSSI'>
	                <image class='RSSI_img' :src='item.img'></image>
	                <text>{{item.RSSI}}</text>
	            </view>
	        </view>
	    </block> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 userInfo: {},
				 
				 deviceArray:[]
			}
		},
		onLoad () {
		    console.log('onLoad')
		    var that = this
			let device = []
		    //调用应用实例的方法获取全局数据
		    uni.getUserInfo(function (userInfo) {
		        //更新数据
		        that.userInfo=userInfo
		        
		    });
		    /* 初始化蓝牙适配器 */
		    uni.openBluetoothAdapter({
		        success: function (res) {
		            console.log('初始化蓝牙适配器成功');
		            uni.startBluetoothDevicesDiscovery({
		                services: [],
		                allowDuplicatesKey: false,
		                success: function (res) {
		                    console.log('这里是开始搜索附近设备', res);
		                   uni.onBluetoothDeviceFound(function (res) {
		                        console.log("成功", res);
		
		
		                        /* 获取设备信号，判断信号强度 */
		                        var device_RSSI_1 = res.devices[0].RSSI;
		                        var device_RSSI_2 = Number(device_RSSI_1);
		                        var device_RSSI = Math.abs(device_RSSI_2);
		
		
		                        if (device_RSSI <= 60) {
		
		                            var img = "../../static/images/signal4.png"
		
		                        } else if (device_RSSI > 60 && device_RSSI <= 70) {
		                            var img = "../../static/images/signal3.png"
		
		                        } else if (device_RSSI > 70 && device_RSSI <= 80) {
		
		                            var img = "../../static/images/signal2.png"
		
		                        } else if (device_RSSI > 80) {
		
		                            var img = "../../static/images/signal1.png"
		
		                        }
		
		
		                        if (res.devices[0].name == "") {
		                            var temp = {
		                                ID: res.devices[0].deviceId,
		                                name: "Unknow device",
		                                RSSI: res.devices[0].RSSI,
		                                img: img
		                            }
		                        } else {
		                            var temp = {
		                                ID: res.devices[0].deviceId,
		                                name: res.devices[0].name,
		                                RSSI: res.devices[0].RSSI,
		                                img: img
		                            }
		                        }
		                        
		                        device.push(temp);
		                        that.device= device
		                        
		                        that.group(that.device, 'ID')
		                    });
		                },
		            });
		        },
		    })
		},
		onShow () {
		    var that = this;
		   uni.showLoading({
		        title: '请打开蓝牙重新进入小程序',
		    });
		    var device = [];
		   uni.closeBluetoothAdapter({
		        success: function (res) {
		            console.log('关闭蓝牙模块');
		            /* 初始化蓝牙适配器 */
		           uni.openBluetoothAdapter({
		                success: function (res) {
		                    console.log('初始化蓝牙适配器成功');
		                   uni.hideLoading();
		                   uni.startBluetoothDevicesDiscovery({
		                        services: [],
		                        allowDuplicatesKey: false,
		                        success: function (res) {
		                            console.log('这里是开始搜索附近设备', res);
		                           uni.onBluetoothDeviceFound(function (res) {
		                                console.log("成功", res);
		
		                                /* 获取设备信号，判断信号强度 */
		                                var device_RSSI_1 = res.devices[0].RSSI;
		                                var device_RSSI_2 = Number(device_RSSI_1);
		                                var device_RSSI = Math.abs(device_RSSI_2);
		                                if (device_RSSI <= 60) {
		
		                                    var img = "../../static/images/signal4.png"
		
		                                } else if (device_RSSI > 60 && device_RSSI <= 70) {
		                                    var img = "../../static/images/signal3.png"
		
		                                } else if (device_RSSI > 70 && device_RSSI <= 80) {
		
		                                    var img = "../../static/images/signal2.png"
		
		                                } else if (device_RSSI > 80) {
		
		                                    var img = "../../static/images/signal1.png"
		
		                                }
		
		
		                                if (res.devices[0].name == "") {
		                                    var temp = {
		                                        ID: res.devices[0].deviceId,
		                                        name: "Unknow device",
		                                        RSSI: res.devices[0].RSSI,
		                                        img: img
		                                    }
		                                } else {
		                                    var temp = {
		                                        ID: res.devices[0].deviceId,
		                                        name: res.devices[0].name,
		                                        RSSI: res.devices[0].RSSI,
		                                        img: img
		                                    }
		                                }
		                                device.push(temp);
		                                that.device=device
		                                
		                                that.group(that.device, 'ID')
		                            });
		                        },
		                    });
		                },
		            })
		
		        }
		    });
		
		},
		onPullDownRefresh () {
		    // var that = this;
		    console.log('开始下拉刷新事件');
		   uni.showNavigationBarLoading();  //加载动画开始
		    this.again_search();
		},
		
		methods: {
			
			again_search () {
			    var that = this;
			    var device = [];
			   uni.closeBluetoothAdapter({
			        success: function (res) {
			            console.log('关闭蓝牙模块')
			        }
			    });
			    /* 初始化蓝牙适配器 */
			   uni.openBluetoothAdapter({
			        success: function (res) {
			            console.log('初始化蓝牙适配器成功');
			           uni.startBluetoothDevicesDiscovery({
			                services: [],
			                allowDuplicatesKey: false,
			                success: function (res) {
			                    console.log('这里是开始搜索附近设备', res);
			                   uni.onBluetoothDeviceFound(function (res) {
			                        console.log("成功", res);
			                       uni.hideNavigationBarLoading(); //加载动画结束
			                       uni.stopPullDownRefresh();  //停止当前页面的下拉刷新
			
			
			                        /* 获取设备信号，判断信号强度 */
			                        var device_RSSI_1 = res.devices[0].RSSI;
			                        var device_RSSI_2 = Number(device_RSSI_1);
			                        var device_RSSI = Math.abs(device_RSSI_2);
			                        if (device_RSSI <= 60) {
			
			                            var img = "../../static/images/signal4.png"
			                            
			                        } else if (device_RSSI > 60 && device_RSSI <= 70) {
			                            var img = "../../static/images/signal3.png"
			
			                        } else if (device_RSSI > 70 && device_RSSI <= 80) {
			                            
			                            var img = "../../static/images/signal2.png"
			                            
			                        } else if (device_RSSI > 80) {
			                           
			                            var img = "../../static/images/signal1.png"
			                            
			                        }
			                        if (res.devices[0].name == "") {
			                            var temp = {
			                                ID: res.devices[0].deviceId,
			                                name: "Unknow device",
			                                RSSI: res.devices[0].RSSI,
			                                img: img
			                            }
			                        } else {
			                            var temp = {
			                                ID: res.devices[0].deviceId,
			                                name: res.devices[0].name,
			                                RSSI: res.devices[0].RSSI,
			                                img: img
			                            }
			                        }
			                        device.push(temp);
			                        that.device=device
			                        
			                        that.group(that.device, 'ID')
			                    });
			                },
			            });
			        },
			    })
			},
			/* 去重 */
			group (data, key) {
			    var that = this;
			    var obj = {}, arr = [];
			    for (var a = 0; a < data.length; a++) {
			        if (!obj[data[a][key]]) {
			            obj[data[a][key]] = [data[a]];
			            arr.push(data[a]);
			            that.deviceArray= arr
			            
			        } else {
			            obj[data[a][key]].push(data[a]);
			        }
			    }
			},
			/* 点击事件 */
			onLianTap(event) {
				// console.log(1111)
			   uni.stopBluetoothDevicesDiscovery({
			        success: function (res) {
			            console.log('停止搜索设备', res)
			        }
			    })
			    var title = event.currentTarget.dataset.deviceid;
			    var name = event.currentTarget.dataset.devicename;
				// console.log(title,name)
			   uni.navigateTo({
			        url: '../home/home?id=' + title + '&name=' + name
			    })
			}
		}
	}
</script>

<style>
.device_box{
    width: 100%;
    border-bottom: 1px solid #eee;
    margin-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
	box-sizing: border-box;
}
.device_name{
    font-size: 42rpx;
    color: #333;
    margin-bottom: 5px;
}
.device_id{
    font-size: 34rpx;
    color: #666;
}
.device_RSSI{
    font-size: 32rpx;
    color: #666;
    float: right;
    padding-right: 20px;
    margin-top: 20px;
    vertical-align: middle
    
}
.device_NI{
    display: inline-block
}
.RSSI_img{
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 10rpx;
}
</style>
