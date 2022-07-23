var color = ["#57F4F9", "#FCBE2E", "#04FF00", "#ADEDC3", "#256FA2", "#fcea16", "#fca626", "#FE3D67", "#C0FF6A", "#FE3D67", "#64BFF5"];

function _initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 25.0623841, lng: 121.1425703 },
		zoom: 12,
		disableDefaultUI: true
	});
}
let map = null;

function Pie(dom, data) {
	var myChart = echarts.init(dom, null, {
		renderer: "canvas",
		useDirtyRect: false
	});
	var option = {
		// hover懸浮框
		tooltip: {
			trigger: "item",
			borderColor: "#fece16" // 懸浮框顏色
		},
		series: [
			{
				type: "pie",
				label: {
					// b 數據名
					// c 數據值
					formatter: "{b}\n{c}",
					position: "inside",
					textStyle: {
						color: "#fff",
						fontWeight: "bold",
						textShadowColor: "#000",
						textShadowBlur: 2
					}
				},
				data: data,
				color: color,
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
		// hover 懸浮框
		tooltip: {
			trigger: "item",
			borderColor: "#fece16" // 懸浮框顏色
		},
		title: {
			text: title,
			left: "center",
			top: "center",
			textStyle: {
				color: "#fece16"
			}
		},
		series: [
			{
				type: "pie",
				label: {
					// b 數據名
					// c 數據值
					formatter: "{b}\n{c}",
					position: "inside",
					textStyle: {
						color: "#fff",
						fontWeight: "bold",
						textShadowColor: "#000",
						textShadowBlur: 2
					}
				},
				data: data,
				color: color,
				radius: ["40%", "80%"]
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
				show: true,
				textStyle: {
					color: "#fff",
					fontWeight: "bold",
					textShadowColor: "#000",
					textShadowBlur: 2
				}
			},
			emphasis: {
				focus: "series"
			},
			data: c.data
		});
	}, []);
	var option = {
		// hover時懸浮提示框
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "shadow"
			},
			borderColor: "#fece16" // 懸浮框顏色
		},
		// 設置每個bar產生的name label
		legend: {
			textStyle: {
				color: "#fff"
			}
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

// 選單縮小
$(".menu-toggle").on("click", function () {
	if (isMobile.any) {
		return;
	}
	$(".menu").toggleClass("on");
});
// 子選單
$(".menu-drop").on("click", function () {
	var _this = $(this);
	if ($(".menu").hasClass("on") || isMobile.any) {
		_this.toggleClass("slide");
		return;
	}
	if ($(this).hasClass("slide")) {
		$(".menu-drop__ul").slideUp(function () {
			_this.removeClass("slide");
		});
		return;
	}
	$(".menu-drop__ul").slideDown(function () {
		_this.addClass("slide");
	});
});
