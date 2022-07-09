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
Doughnut(document.querySelector("#A"), "改善情形", datas[0]);
// 檢查結果
Doughnut(document.querySelector("#B"), "檢查結果", datas[1]);
