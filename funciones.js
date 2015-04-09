
$(document).ready(function() {
// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([40.28, -3.8215], 17);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([40.28, -3.8215]).addTo(map)
    .bindPopup('<a href ="http://www.etsit.urjc.es">ETSIT</a>')
    .openPopup();


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Has clickado en: --> " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
});