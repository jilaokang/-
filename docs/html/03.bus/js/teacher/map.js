!function () {
    var infoWindow, map, level = 15,

        center = {
            lng: 114.296115,
            lat: 30.441589
        },

        // 标记及路线图
        features = [{
            type: "Marker",
            name: "财大首义校区",
            desc: "",
            color: "red",
            icon: "cir",
            offset: {x: -9, y: -31},
            lnglat: {lng: 114.314109, lat: 30.537912}
        },
            {
                type: "Marker",
                name: "首义路地铁站B口",
                desc: "",
                color: "red",
                icon: "cir",
                offset: {x: -9, y: -31},
                lnglat: {lng: 114.309839, lat: 30.53374}
            },
            {
                type: "Marker",
                name: "白沙洲大道烽火村(公交站)",
                desc: "",
                color: "red",
                icon: "cir",
                offset: {x: -9, y: -31},
                lnglat: {lng: 114.298914, lat: 30.508873}
            },
            {
                type: "Marker",
                name: "白沙四路",
                desc: "",
                color: "red",
                icon: "cir",
                offset: {x: -9, y: -31},
                lnglat: {lng: 114.275199, lat: 30.478149}
            },

            {
                type: "Marker",
                name: "武汉学院",
                desc: "",
                color: "red",
                icon: "cir",
                offset: {x: -9, y: -31},
                lnglat: {lng: 114.2974, lat: 30.442026}
            },

            {
                type: "Polyline",
                name: "班车路线",
                desc: "",
                strokeWeight: 5,
                strokeColor: "#F0202F",
                strokeOpacity: 0.8,
                lnglat: [{lng: 114.314352, lat: 30.538089}, {
                    lng: 114.309717,
                    lat: 30.533653
                }, {lng: 114.301563, lat: 30.534393}, {lng: 114.301306, lat: 30.52212}, {
                    lng: 114.301392,
                    lat: 30.519754
                }, {lng: 114.300276, lat: 30.518053}, {lng: 114.299332, lat: 30.511916}, {
                    lng: 114.299203,
                    lat: 30.511214
                }, {lng: 114.298602, lat: 30.509993}, {lng: 114.296027, lat: 30.505446}, {
                    lng: 114.287315,
                    lat: 30.496127
                }, {lng: 114.286757, lat: 30.495277}, {lng: 114.285084, lat: 30.493576}, {
                    lng: 114.283453,
                    lat: 30.491283
                }, {lng: 114.274741, lat: 30.478339}, {lng: 114.273486, lat: 30.4764}, {
                    lng: 114.277091,
                    lat: 30.474698
                }, {lng: 114.283614, lat: 30.472997}, {lng: 114.291854, lat: 30.473367}, {
                    lng: 114.29297,
                    lat: 30.473367
                }, {lng: 114.293056, lat: 30.473367}, {lng: 114.293313, lat: 30.463897}, {
                    lng: 114.293313,
                    lat: 30.46116
                }, {lng: 114.291682, lat: 30.458867}, {lng: 114.293828, lat: 30.457831}, {
                    lng: 114.298206,
                    lat: 30.455981
                }, {lng: 114.301038, lat: 30.455241}, {lng: 114.300266, lat: 30.444956}, {
                    lng: 114.300695,
                    lat: 30.441478
                }, {lng: 114.297433, lat: 30.441996}]
            }];

    function loadFeatures() {
        for (var feature, data, i = 0, len = features.length, j, jl, path; i < len; i++) {
            data = features[i];
            switch (data.type) {
                case "Marker":
                    feature = new AMap.Marker({
                        map: map,
                        position: new AMap.LngLat(data.lnglat.lng, data.lnglat.lat),
                        zIndex: 3,
                        extData: data,
                        offset: new AMap.Pixel(data.offset.x, data.offset.y),
                        title: data.name,
                        content: '<div class="icon icon-' + data.icon + ' icon-' + data.icon + '-' + data.color + '"></div>'
                    });
                    break;
                case "Polyline":
                    for (j = 0, jl = data.lnglat.length, path = []; j < jl; j++) {
                        path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
                    }
                    feature = new AMap.Polyline({
                        map: map,
                        path: path,
                        extData: data,
                        zIndex: 2,
                        strokeWeight: data.strokeWeight,
                        strokeColor: data.strokeColor,
                        strokeOpacity: data.strokeOpacity
                    });
                    break;
                case "Polygon":
                    for (j = 0, jl = data.lnglat.length, path = []; j < jl; j++) {
                        path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
                    }
                    feature = new AMap.Polygon({
                        map: map,
                        path: path,
                        extData: data,
                        zIndex: 1,
                        strokeWeight: data.strokeWeight,
                        strokeColor: data.strokeColor,
                        strokeOpacity: data.strokeOpacity,
                        fillColor: data.fillColor,
                        fillOpacity: data.fillOpacity
                    });
                    break;
                default:
                    feature = null;
            }
            if (feature) {
                AMap.event.addListener(feature, "click", mapFeatureClick);
            }
        }
    }

    function mapFeatureClick(e) {
        if (!infoWindow) {
            infoWindow = new AMap.InfoWindow({
                autoMove: true
            });
        }
        var extData = e.target.getExtData();
        infoWindow.setContent("<h5>" + extData.name + "</h5><div>" + extData.desc + "</div>");
        infoWindow.open(map, e.lnglat);
    }

    map = new AMap.Map("mapContainer", {
        center: new AMap.LngLat(center.lng, center.lat),
        level: level
    });
    loadFeatures();
}();
