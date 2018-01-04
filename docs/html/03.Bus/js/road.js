


!function () {
    var infoWindow, map, level = 15,

        center = {
            lng: 114.296115,
            lat: 30.441589
        },

        // 标记及路线图
        features = [{
            type: 'Polygon',
            name: '乘车点',
            desc: '校南门，陈一丹伉俪图书馆附近',
            strokeWeight: 2,
            strokeColor: '#F0202F',
            strokeOpacity: 1,
            fillColor: 'red',
            fillOpacity: 0.2,
            lnglat: [{
                lng: 114.295093,
                lat: 30.4391
            }, {
                lng: 114.295088,
                lat: 30.438462
            }, {
                lng: 114.295646,
                lat: 30.438467
            }, {
                lng: 114.295635,
                lat: 30.439096
            }]
        },
            {
                type: 'Marker',
                name: '绿迪校车',
                desc: '校园巴士，30分钟后返程，5元/人',
                color: 'red',
                icon: 'pot',
                offset: {
                    x: -11,
                    y: -26
                },
                lnglat: {
                    lng: 114.295335,
                    lat: 30.438846
                }
            },
            {
                type: 'Marker',
                name: '307公交站',
                desc: '''',
                color: 'blue',
                icon: 'pot',
                offset: {
                    x: -11,
                    y: -26
                },
                lnglat: {
                    lng: 114.30005,
                    lat: 30.440266
                }
            },
            {
                type: 'Marker',
                name: '首义路c出口',
                desc: '超市门口返程',
                color: 'red',
                icon: 'cir',
                offset: {
                    x: -9,
                    y: -31
                },
                lnglat: {
                    lng: 114.31052,
                    lat: 30.533175
                }
            },
            {
                type: 'Polygon',
                name: '终点站',
                desc: '首义路c出口，到达即返程。',
                strokeWeight: 2,
                strokeColor: '#19A4EB',
                strokeOpacity: 1,
                fillColor: 'red',
                fillOpacity: 0.7,
                lnglat: [{
                    lng: 114.310397,
                    lat: 30.533387
                }, {
                    lng: 114.310343,
                    lat: 30.533027
                }, {
                    lng: 114.310703,
                    lat: 30.532976
                }, {
                    lng: 114.310756,
                    lat: 30.533355
                }]
            },
            {
                type: 'Polyline',
                name: '往返路线',
                desc: '''',
                strokeWeight: 5,
                strokeColor: '#F0202F',
                strokeOpacity: 0.77,
                lnglat: [{
                    lng: 114.295415,
                    lat: 30.43866
                }, {
                    lng: 114.295415,
                    lat: 30.438231
                }, {
                    lng: 114.299234,
                    lat: 30.438342
                }, {
                    lng: 114.300736,
                    lat: 30.441783
                }, {
                    lng: 114.300865,
                    lat: 30.44378
                }, {
                    lng: 114.299148,
                    lat: 30.451476
                }, {
                    lng: 114.298805,
                    lat: 30.455249
                }, {
                    lng: 114.298805,
                    lat: 30.455915
                }, {
                    lng: 114.292024,
                    lat: 30.458949
                }, {
                    lng: 114.293226,
                    lat: 30.461242
                }, {
                    lng: 114.293355,
                    lat: 30.462167
                }, {
                    lng: 114.293441,
                    lat: 30.46446
                }, {
                    lng: 114.29314,
                    lat: 30.477813
                }, {
                    lng: 114.282325,
                    lat: 30.477739
                }, {
                    lng: 114.279193,
                    lat: 30.478368
                }, {
                    lng: 114.275931,
                    lat: 30.480106
                }, {
                    lng: 114.285544,
                    lat: 30.494233
                }, {
                    lng: 114.295758,
                    lat: 30.50492
                }, {
                    lng: 114.299062,
                    lat: 30.510836
                }, {
                    lng: 114.300436,
                    lat: 30.518119
                }, {
                    lng: 114.301122,
                    lat: 30.518969
                }, {
                    lng: 114.301509,
                    lat: 30.51945
                }, {
                    lng: 114.302109,
                    lat: 30.519524
                }, {
                    lng: 114.304813,
                    lat: 30.51982
                }, {
                    lng: 114.309019,
                    lat: 30.52189
                }, {
                    lng: 114.310564,
                    lat: 30.52274
                }, {
                    lng: 114.312237,
                    lat: 30.523701
                }, {
                    lng: 114.306787,
                    lat: 30.525439
                }, {
                    lng: 114.30919,
                    lat: 30.533497
                }, {
                    lng: 114.310564,
                    lat: 30.533276
                }]
            },
            {
                type: 'Marker',
                name: '灵吴墩',
                desc: '万能中转公交站',
                color: 'blue',
                icon: 'pot',
                offset: {
                    x: -11,
                    y: -26
                },
                lnglat: {
                    lng: 114.276523,
                    lat: 30.480787
                }
            }
        ];


    function loadFeatures() {
        for (var feature, data, i = 0, len = features.length, j, jl, path; i < len; i++) {
            data = features[i];
            switch (data.type) {
                case 'Marker':
                    feature = new AMap.Marker({
                        map: map,
                        position: new AMap.LngLat(data.lnglat.lng, data.lnglat.lat),
                        zIndex: 3,
                        extData: data,
                        offset: new AMap.Pixel(data.offset.x, data.offset.y),
                        title: data.name,
                        content: '<div class='
                        icon icon - ' + data.icon + '
                        icon-' + data.icon + ' - ' + data.color + '
                        '></div>'
                    });
                    break;
                case 'Polyline':
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
                case 'Polygon':
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
                AMap.event.addListener(feature, 'click', mapFeatureClick);
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
        infoWindow.setContent('<h5>' + extData.name + '</h5><div>' + extData.desc + '</div>');
        infoWindow.open(map, e.lnglat);
    }

    map = new AMap.Map('mapContainer', {
        center: new AMap.LngLat(center.lng, center.lat),
        level: level
    });
    loadFeatures();
}();


