var color = ["#57F4F9", "#FCBE2E", "#ADEDC3", "#256FA2", "#fcea16", "#fca626", "#FE3D67", "#C0FF6A", "#FE3D67", "#64BFF5"];
var textStyle = {
	color: "#fff",
	fontSize: 15,
	fontWeight: "bold",
	textBorderWidth: 1,
	textBorderColor: "rgba(0,0,0,.5)",
	textShadowColor: "#000",
	textShadowBlur: 2
};
var borderColor = "#fece16";

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
			borderColor: borderColor // 懸浮框顏色
		},
		series: [
			{
				type: "pie",
				label: {
					// b 數據名
					// c 數據值
					formatter: "{d}%",
					position: "inside",
					textStyle: textStyle
				},
				data: data,
				radius: "60%"
			}
		],
		color: color
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
			borderColor: borderColor // 懸浮框顏色
		},
		title: {
			text: title,
			left: "center",
			top: "center",
			textStyle: {
				color: borderColor
			}
		},
		series: [
			{
				type: "pie",
				label: {
					// b 數據名
					// c 數據值
					formatter: "{d}%",
					position: "inside",
					textStyle: textStyle
				},
				data: data,
				radius: ["40%", "80%"]
			}
		],
		color: color
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
			stack: "Ad",
			label: {
				show: true,
				formatter: "{c}",
				textStyle: textStyle
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
			type: "value",
			min: 0,
			max: 100,
			axisLabel: {
				color: "#fff"
			}
		},
		xAxis: {
			type: "category",
			data: data.x,
			axisLabel: {
				color: "#fff"
			}
		},
		series: series,
		color: color
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

// 選單加上on
document.addEventListener("DOMContentLoaded", function () {
	var _page = location.pathname.split("/").at(-1);
	$("[data-page]").each(function (i, v) {
		var _data = $(v).attr("data-page");
		if (_data == _page) {
			if ($(v).hasClass("menu-drop__link")) {
				$(v).closest(".menu-li").find(".menu-drop").addClass("slide").addClass("on");
			}
			$(v).addClass("on");
		}
	});
});
