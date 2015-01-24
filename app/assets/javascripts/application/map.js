function initialize() {
  var mapOptions = {
    center: { lat: 47.8032792, lng: 13.0413187},
    zoom: 15
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var palaceMarker = new google.maps.Marker({
    position: new google.maps.LatLng(47.8054699,13.0416727),
    map: map,
    title: "Mirabell Palace"
  });
          
  var kkMarker = new google.maps.Marker({
    position: new google.maps.LatLng(47.799367,13.047225),
    map: map,
    title: "K+K Restuarant"
  });

  var kkHotel = new google.maps.Marker({
    position: new google.maps.LatLng(47.806844,13.049722),
    map: map,
    title: "Hotel + Villa Auersperg"
  });
  
}
google.maps.event.addDomListener(window, 'load', initialize);
