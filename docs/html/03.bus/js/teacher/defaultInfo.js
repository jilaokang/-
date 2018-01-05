

var route_cn, route_cn_time, route_cn_route;
var route_en, route_en_time, route_en_route;

function defaultInfo() {
    // 路线中文
    route_cn = route_cn_time + " " + "财大首义校区 路线1";

    route_en_time = 'am';
    route_en_route = '1';

    // 写入到输入框
    $(".weui-input")[0].value = route_cn;
}