// time_en  eg:am
var time_en, tim_cn;

// route_cn eg:中班 武汉理工大学
// route_en eg:noon1
var route_cn, route_en;

// 自动更新当前时间 time_en
function defaultTime() {
    var myDate = new Date();
    var hours = myDate.getHours();

    if (hours < 8 || hours > 21) {
        time_cn = "早班";
        time_en = 'am';
    } else if (8 <= hours && hours <= 13) {
        time_cn = "中班";
        time_en = 'noon';
    } else {
        time_cn = "晚班";
        time_en = 'pm';
    }
}