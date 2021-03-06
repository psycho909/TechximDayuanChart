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

Bar(document.querySelector("#manhole-bar"), BarData);
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
Pie(document.querySelector("#manhole-pie"), datas[0]);

Doughnut(document.querySelector("#manhole-a"), "檢查結果", datas[1]);
Doughnut(document.querySelector("#manhole-b"), "檢查結果", datas[1]);
Doughnut(document.querySelector("#manhole-c"), "檢查結果", datas[1]);
Doughnut(document.querySelector("#manhole-d"), "檢查結果", datas[1]);

// 查詢按鈕
$(".main-control__submit").on("click", function () {
	var obj = {};
	$(".main-control__select").each(function (i, v) {
		if ($(v).val() == -1) {
			return;
		}
		obj[$(v).attr("data-select")] = $(v).val();
	});
	console.log(obj);
});
