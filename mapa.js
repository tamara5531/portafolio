// Función de inicialización del mapa
function initMap() {
    // Inicializa el mapa con una ubicación predeterminada
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -33.374759674072266, lng: -70.64069366455078 },
        zoom: 14
    });

    // Obtiene la ubicación del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Crea un marcador en la ubicación del usuario
            var marker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: 'Tu ubicación'
            });

            // Centra el mapa en la ubicación del usuario
            map.setCenter(userLocation);
        }, function() {
            // Maneja los errores de geolocalización
            handleLocationError(true, map.getCenter());
        });
    } else {
        // El navegador no soporta geolocalización
        handleLocationError(false, map.getCenter());
    }
}

// Maneja los errores de geolocalización
function handleLocationError(browserHasGeolocation, pos) {
    var infoWindow = new google.maps.InfoWindow();
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ? 'Error: La geolocalización falló.' : 'Error: Tu navegador no soporta geolocalización.');
    infoWindow.open(map);
}
