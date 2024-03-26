const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW5jYWxhZ29uNjIzIiwiYSI6ImNsMDc3NGZjazA0NzUzcHM4Y2FsMzNqbm4ifQ.-S7p1BHjF7R1xEJ4k_ZgEw'
}).addTo(map);

var latlngs = [
  [45.51, -122.68],
  [37.77, -122.43],
  [34.04, -118.2]
];

var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

map.fitBounds(polyline.getBounds());


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);