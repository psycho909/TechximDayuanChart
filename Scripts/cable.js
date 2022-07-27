var ResultStat = [
	{
		OperatorName: "北桃園",
		ImproveCount: 96,
		NotImproveCount: 95
	},
	{
		OperatorName: "未知",
		ImproveCount: 11,
		NotImproveCount: 69
	},
	{
		OperatorName: "北健",
		ImproveCount: 115,
		NotImproveCount: 53
	},
	{
		OperatorName: "無纜線",
		ImproveCount: 501,
		NotImproveCount: 16
	},
	{
		OperatorName: "台灣固網",
		ImproveCount: 25,
		NotImproveCount: 15
	},
	{
		OperatorName: "新世紀",
		ImproveCount: 23,
		NotImproveCount: 7
	},
	{
		OperatorName: "佳光",
		ImproveCount: 7,
		NotImproveCount: 2
	},
	{
		OperatorName: "亞太",
		ImproveCount: 3,
		NotImproveCount: 2
	},
	{
		OperatorName: "南桃園",
		ImproveCount: 1,
		NotImproveCount: 0
	},
	{
		OperatorName: "警用纜線",
		ImproveCount: 1,
		NotImproveCount: 0
	}
];
var operatorName = [];
var improveCount = [];
var notImproveCount = [];
ResultStat.forEach(function (v, i) {
	var _ImproveCount = 0;
	var _NotImproveCount = 0;
	_ImproveCount = Math.round((v.ImproveCount / (v.ImproveCount + v.NotImproveCount)) * 100);
	_NotImproveCount = Math.round((v.NotImproveCount / (v.ImproveCount + v.NotImproveCount)) * 100);
	operatorName.push(v.OperatorName);
	improveCount.push(_ImproveCount);
	notImproveCount.push(_NotImproveCount);
});
console.log(improveCount, notImproveCount);
var BarData = {
	x: operatorName,
	datas: [
		{
			name: "改善",
			data: improveCount
		},
		{
			name: "未改善",
			data: notImproveCount
		}
	]
};

Bar(document.querySelector("#cable-bar"), BarData);
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
Pie(document.querySelector("#cable-pie"), datas[0]);

Doughnut(document.querySelector("#cable-a"), "檢查結果", datas[1]);
Doughnut(document.querySelector("#cable-b"), "檢查結果", datas[1]);
Doughnut(document.querySelector("#cable-c"), "檢查結果", datas[1]);
Doughnut(document.querySelector("#cable-d"), "檢查結果", datas[1]);

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
