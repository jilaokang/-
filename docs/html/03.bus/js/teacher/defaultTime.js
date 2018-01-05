var route_cn, route_cn_time, route_cn_route;
var route_en, route_en_time, route_en_route;

// 自动更新当前时间 route_en_time
function defaultTime() {
    var myDate = new Date();
    var hours = myDate.getHours();

    if (hours < 8 || hours > 21) {
        route_cn_time = "早班";
        route_en_time = 'am';
    } else if (8 <= hours && hours <= 13) {
        route_cn_time = "中班";
        route_en_time = 'noon';
    } else {
        route_cn_time = "晚班";
        route_en_time = 'pm';
    }
}