function _initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 25.0623841, lng: 121.1425703 },
		zoom: 12,
		disableDefaultUI: true
	});
}
let map = null;

function Pie(dom, title, data) {
	var myChart = echarts.init(dom, null, {
		renderer: "canvas",
		useDirtyRect: false
	});
	var option = {
		tooltip: {
			trigger: "item"
		},
		title: {
			text: title,
			left: "center"
		},
		series: [
			{
				type: "pie",
				label: {
					// b 數據名
					// c 數據值
					formatter: "{b}\n{c}"
				},
				data: data,
				color: ["#ACACAC", "#F5843F", "#3164BE", "#FAC200"],
				radius: "60%"
			}
		]
	};
	myChart.setOption(option);
	window.addEventListener("resize", myChart.resize);
}

// 圓環圖
function Doughnut(dom, title, data) {
	var myChart = echarts.init(dom, null, {
		renderer: "canvas",
		useDirtyRect: false
	});
	var option = {
		tooltip: {
			trigger: "item"
		},
		title: {
			text: title,
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
				data: data,
				color: ["#ACACAC", "#F5843F", "#3164BE", "#FAC200"],
				radius: ["60%", "80%"]
			}
		]
	};
	myChart.setOption(option);
	window.addEventListener("resize", myChart.resize);
}

// 圓柱圖
function Bar(dom, data) {
	var myChart = echarts.init(dom, null, {
		renderer: "canvas",
		useDirtyRect: false
	});

	var series = data.datas.reduce(function (p, c) {
		return p.concat({
			name: c.name,
			type: "bar",
			stack: "total",
			label: {
				show: true
			},
			emphasis: {
				focus: "series"
			},
			data: c.data
		});
	}, []);
	var option = {
		// hover
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "shadow"
			}
		},
		// 設置每個bar產生的name label
		legend: {
			// 方向
			// orient: "vertical",
			// 位置
			// right: 10,
			// 位置
			// top: "center"
		},
		// 設置圖表的位置
		grid: {
			left: "3%",
			right: "4%",
			bottom: "3%",
			containLabel: true
		},
		yAxis: {
			type: "value"
		},
		xAxis: {
			type: "category",
			data: data.x
		},
		series: series
	};
	myChart.setOption(option);
	window.addEventListener("resize", myChart.resize);
}
var BarData = {
	x: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	datas: [
		{
			name: "Direct",
			data: [320, 302, 301, 334, 390, 330, 320]
		},
		{
			name: "Mail Ad",
			data: [120, 132, 101, 134, 90, 230, 210]
		},
		{
			name: "Affiliate Ad",
			data: [220, 182, 191, 234, 290, 330, 310]
		},
		{
			name: "Video Ad",
			data: [150, 212, 201, 154, 190, 330, 410]
		},
		{
			name: "Search Engine",
			data: [820, 832, 901, 934, 1290, 1330, 1320]
		}
	]
};

Bar(document.querySelector("#A"), BarData);
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
// Pie(document.querySelector("#A"), "改善情形", datas[0]);

// 改善情形
// Doughnut(document.querySelector("#A"), "改善情形", datas[0]);
// 檢查結果
// Doughnut(document.querySelector("#B"), "檢查結果", datas[1]);
