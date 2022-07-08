function _initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 25.0623841, lng: 121.1425703 },
		zoom: 12,
		disableDefaultUI: true
	});
}
let map = null;

var datas = [
	[
		{
			value: 15,
			name: "改善完成"
		},
		{
			value: 23,
			name: "改善中"
		},
		{
			value: 62,
			name: "NG數量"
		}
	],
	[
		{
			value: 7,
			name: "立即"
		},
		{
			value: 14,
			name: "注意"
		},
		{
			value: 22,
			name: "計畫"
		},
		{
			value: 57,
			name: "正常"
		}
	]
];

// 改善情形
var myChartA = echarts.init(document.getElementById("A"));
option = {
	title: {
		text: "改善情形",
		left: "center",
		top: "center"
	},
	series: [
		{
			type: "pie",
			label: {
				// b 數據名
				// c 數據值
				formatter: "{b}\n{c}"
			},
			data: datas[0],
			color: ["#ACACAC", "#F5843F", "#3164BE", "#FAC200"],
			radius: [60, 80]
		}
	]
};
myChartA.setOption(option);
window.addEventListener("resize", myChartA.resize);
// 檢查結果
var myChartB = echarts.init(document.getElementById("B"), null, {
	renderer: "canvas",
	useDirtyRect: false
});
option = {
	title: {
		text: "檢查結果",
		left: "center",
		top: "center"
	},
	series: [
		{
			type: "pie",
			label: {
				// b 數據名
				// c 數據值
				formatter: "{b}\n{c}"
			},
			data: datas[1],
			color: ["#ACACAC", "#F5843F", "#3164BE", "#FAC200"],
			radius: [60, 80]
		}
	]
};
myChartB.setOption(option);
window.addEventListener("resize", myChartB.resize);
function Pie() {}

// 圓環圖
function Doughnut() {}

// 圓柱圖
function Bar() {}
