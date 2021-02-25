const mapHandler = () => {

  const $leftBtn = document.querySelector('.left-btn');
  const $rightBtn = document.querySelector('.right-btn');
  const $clinicList = document.querySelector('.clinic-list');

  let lat = 0;
  let lon = 0;
  let nearDatas = [];
  let nowView = 0;

  kakao.maps.load(() => {

    navigator.geolocation.getCurrentPosition(function (pos) {
      lat = pos.coords.latitude;
      lon = pos.coords.longitude;

      let infowindow = new kakao.maps.InfoWindow({
        zIndex: 1
      });

      let mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      mapOption = {
        center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
      };

      let map = new kakao.maps.Map(mapContainer, mapOption);

      let ps = new kakao.maps.services.Places();

      ps.keywordSearch('선별 진료소', placesSearchCB);

      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          let bounds = new kakao.maps.LatLngBounds();

          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }

          const distance = [];
          let linePath = [];

          for (let i = 0; i < data.length; i++) {
            const {
              x,
              y
            } = data[i];

            linePath = [new kakao.maps.LatLng(lat, lon),
              new kakao.maps.LatLng(y, x)
            ];

            let polyline = new kakao.maps.Polyline({
              path: linePath, // 선을 구성하는 좌표배열 입니다
              strokeWeight: 5, // 선의 두께 입니다
              strokeColor: '#FFAE00', // 선의 색깔입니다
              strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
              strokeStyle: 'solid' // 선의 스타일입니다
            });

            distance.push(polyline.getLength());
            data[i].distance = distance[i];
          }

          //data 안의 객체.distance를 정렬하는 함수
          function objectSort(a, b) {
            return a.distance < b.distance ? -1 : a.distance > b.distance ? 1 : 0;
          }

          data.sort(objectSort);
          nearDatas = data;

          //진료소 리스트 동적 생성
          nearDatas.forEach(nearData => {
            $clinicList.innerHTML += `<li class="clinic">${nearData.place_name.replace('코로나19 ', '')}</li>`
          });

          // 지도에 표시할 선을 생성합니다
          let polyline = new kakao.maps.Polyline({
            path: linePath, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#FFAE00', // 선의 색깔입니다
            strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
          });


          // 지도에 선을 표시합니다 
          // polyline.setMap(map);

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          // map.setBounds(bounds);
        }


      }

      function displayMarker(place) {

        // 마커를 생성하고 지도에 표시합니다
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x)
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function () {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
          infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
          infowindow.open(map, marker);
        });
      }

      let markerPosition = new kakao.maps.LatLng(lat, lon);

      //마커를 생성
      let marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);

      function panTo() {
        // 이동할 위도 경도 위치를 생성합니다 
        let moveLatLon = new kakao.maps.LatLng(nearDatas[nowView-1].y, nearDatas[nowView-1].x);
        
        // 지도 중심을 부드럽게 이동시킵니다
        // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
        map.panTo(moveLatLon);            
      }

      $leftBtn.onclick = () => {
        if(nowView === 0) {
          [...$clinicList.children].forEach(clinic => {
            clinic.classList.remove('current-location');
          });
  
          [...$clinicList.children][nowView].classList.add('current-location');
        }
        nowView -= 1;

        panTo();

        [...$clinicList.children].forEach(clinic => {
          clinic.classList.remove('current-location');
        });

        [...$clinicList.children][nowView].classList.add('current-location');
      };
    
      $rightBtn.onclick = () => {
        if(nowView === nearDatas.length) return;
        console.log(nowView);
        nowView += 1;

        panTo();

        [...$clinicList.children].forEach(clinic => {
          clinic.classList.remove('current-location');
        });

        [...$clinicList.children][nowView].classList.add('current-location');
      };
    });
  })
};

  

export default mapHandler;