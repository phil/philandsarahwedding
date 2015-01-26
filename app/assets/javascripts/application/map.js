function initialize() {
  var mapOptions = {
    center: { lat: 47.8032792, lng: 13.0413187},
    zoom: 15
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var markers = [
    { name : "Hotel&nbsp;&amp;&nbsp;Villa&nbspAuersperg", lat : 47.806844, lng : 13.049722 },
    { name : "Mirabell&nbsp;Palace", lat : 47.8054699, lng : 13.0416727 },
    { name : "Café&nbsp;Classic", lat : 47.802677, lng : 13.0438077 },
    { name : "K+K&nbsp;Restuarant", lat : 47.799367, lng : 13.047225 }
  ]

  for (i = 0; i < markers.length; i++) {
    addMarkerToMap(markers[i], map);
  }

  function addMarkerToMap(marker, map) {
    var mapWindow = new google.maps.InfoWindow({
      content: mapWindowContent(marker.name)
    });

    var mapMarker = new google.maps.Marker({
      position: new google.maps.LatLng(marker.lat,marker.lng),
      map: map,
      title: marker.name
    });

    google.maps.event.addListener(mapMarker, 'click', function() {
      mapWindow.open(map,mapMarker);
    });
  }

  function mapWindowContent(title) {
    return "<div class='map-window'>" + title + "</div>";
  }

}
google.maps.event.addDomListener(window, 'load', initialize);
