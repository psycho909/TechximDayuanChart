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
