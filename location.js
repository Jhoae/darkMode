/*
https://velog.io/@sgr2134/%EC%A2%8C%ED%91%9C%EB%A5%BC-%EC%A3%BC%EC%86%8C%EB%A1%9C-%EB%82%98%ED%83%80%EB%82%B4%EC%9E%90feat.-kakao-maps-API

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

function searchAddrFromCoords(coords, callback) {
  // 좌표로 행정동 주소 정보를 요청합니다
  console.log(
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback)
    );
  }
  
  function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    console.log(geocoder.coord2RegionCode(lat, lng, callback));
  }
  
  function onGeoError() {
    alert("당신을 찾을 수 없습니다.");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  
  */
