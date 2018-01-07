var vm = new Vue({
    el: '#road',
    data: {
        active: [],
        path:[]
    },
    methods: {
        chioce: function () {
            sb.then(value => {
                console.log(value);
                if (route_en_time === 'am') {
                    this.active = value.bus.am[route_en_route].info;
                    this.path = value.bus.am[route_en_route].path;
                }
                else if (route_en_time === 'noon') {
                    this.active = value.bus.noon[route_en_route].info;
                    this.path = value.bus.noon[route_en_route].path;
                } else {
                    this.active = value.bus.pm[route_en_route].info;
                    this.path = value.bus.pm[route_en_route].path;
                }
            }, err => console.error(err))
        }
    }
});