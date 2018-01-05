var vm = new Vue({
    el: '#road',
    data: {
        active: []
    },
    methods: {
        chioce: function () {
            if (route_en_time === 'am') {
                this.active = json.am[route_en_route].info;
            }
            else if (route_en_time === 'noon') {
                this.active = json.noon[route_en_route].info;
            } else {
                this.active = json.pm[route_en_route].info;
            }
        }
    }
});
