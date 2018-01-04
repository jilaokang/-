// 默认显示框信息
function defaultInfo() {
    // 路线中文
    route_cn = time_cn + " " + "财大首义校区 路线1";

    route_en = {};
    route_en.time = 'am';
    route_en.route = '1';

    // 写入到输入框
    $(".weui-input")[0].value = route_cn;
}