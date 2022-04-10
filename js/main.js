        //지도 옵션
        var mapOptions = {
            center: new naver.maps.LatLng(35.159665, 129.060447),
            zoom: 10,
            // 커스텀 컨트롤러 생성


            // 맵 타입 컨트롤러 생성
            mapTypeControl: true,

            // 줌 컨트롤러 생성
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.RIGHT_CENTER
            }
        };
        // 커스텀 컨트롤러 생성
        var locationBtnHtml = `<div class="m_box_search_map">인포박스</div>`;

        var customControl = new naver.maps.CustomControl(locationBtnHtml, {
            position: naver.maps.Position.LEFT_CENTER
        });

        // 지도 생성
        var map = new naver.maps.Map('map', mapOptions);

        // 지도에 커스텀컨트롤러 붙이기
        naver.maps.Event.once(map, 'init', function() {
            customControl.setMap(map);
        });

        // 마커 생성
        var markerOptions = {
            position: new naver.maps.LatLng(35.159665, 129.060447),
            map: map,
            icon: './img/pin_default.png'
        };
        var marker = new naver.maps.Marker(markerOptions);