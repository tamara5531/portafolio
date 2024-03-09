function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -33.374759674072266, lng: -70.64069366455078 },
        zoom: 14
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var marker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: 'Tu ubicación'
            });

            map.setCenter(userLocation);
        }, function() {
            handleLocationError(true, map.getCenter());
        });
    } else {
        handleLocationError(false, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, pos) {
    var infoWindow = new google.maps.InfoWindow();
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ? 'Error: La geolocalización falló.' : 'Error: Tu navegador no soporta geolocalización.');
    infoWindow.open(map);
}
