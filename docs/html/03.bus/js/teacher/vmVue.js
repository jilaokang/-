var vm = new Vue({
    el: '#road',
    data: {
        active: [],
        path:[]
    },
    methods: {
        chioce: function () {
            if (route_en_time === 'am') {
                this.active = json.am[route_en_route].info;
                this.path = json.am[route_en_route].path;                
            }
            else if (route_en_time === 'noon') {
                this.active = json.noon[route_en_route].info;
                this.path = json.noon[route_en_route].path;
            } else {
                this.active = json.pm[route_en_route].info;
                this.path = json.pm[route_en_route].path;
            }
        }
    }
});
