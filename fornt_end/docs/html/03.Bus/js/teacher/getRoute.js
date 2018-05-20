function getRoute() {
    weui.picker([{
        label: '早班',
        value: 'am',
        children: [{
            label: '财大首义校区 路线1',
            value: 1
        },
            {
                label: '财大首义校区 路线2',
                value: 2
            },
            {
                label: '森林公园',
                value: 3
            },
            {
                label: '光谷校区',
                value: 4
            },
            {
                label: '徐东平价',
                value: 5
            }
        ]
    },
        {
            label: '中班',
            value: 'noon',
            children: [{
                label: '武汉理工大学',
                value: 1
            },
                {
                    label: '财大津发小区',
                    value: 2
                }
            ]
        },
        {
            label: '晚班',
            value: 'pm',
            children: [{
                label: '财大首义校区 路线1',
                value: 1
            },
                {
                    label: '森林公园',
                    value: 2
                },
                {
                    label: '光谷校区',
                    value: 3
                },
                {
                    label: '徐东平价',
                    value: 4
                }
            ]
        }
    ], {
        defaultValue: [route_en_time, 1],
        onConfirm: function (result) {
            // 获取value为result[0] result[1]

            // 建立数组
            route_en_time = result[0].value;
            route_en_route = result[1].value;

            route_cn = result[0].label + " " + result[1].label;
            $(".weui-input")[0].value = route_cn;
            console.log(route_cn, route_en);

            vm.chioce();
            addMap();
        }
    });
}