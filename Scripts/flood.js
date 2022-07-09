var BarData = {
	x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	datas: [
		{
			name: 108,
			data: [10, 20, 2, 20, 20, 2, 10, 20, 20, 2, 10, 20]
		},
		{
			name: 109,
			data: [10, 20, 2, 20, 20, 2, 10, 20, 20, 2, 10, 20]
		},
		{
			name: 110,
			data: [10, 20, 2, 20, 20, 2, 10, 20, 20, 2, 10, 20]
		},
		{
			name: 111,
			data: [10, 20, 2, 20, 20, 2, 10, 20, 20, 2, 10, 20]
		}
	]
};

Bar(document.querySelector("#flood-bar"), BarData);
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

Doughnut(document.querySelector("#flood-a"), "改善率", datas[1]);
Doughnut(document.querySelector("#flood-b"), "淹水原因", datas[1]);
Doughnut(document.querySelector("#flood-c"), "淹水深度", datas[1]);
