/*
 the script mus be loaded after the map div is defined.
 otherwise this will not work (we would need a listener to
 wait for the DOM to be fully loaded).

 Just put the script tag below the map div.

 The source code below is the example from the leaflet start page.
 */
const BrowserPosition;

function getLocation() {
  if (navigator.geolocation) {
    BrowserPosition = navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "O seu navegador não suporta Geolocalização.";
  }
}

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoiYmpjYTE5OTgiLCJhIjoiY2syb284dmVtMTIwMTNjcXUwZWdiMW8xdCJ9.DmLHSVn33Xb3b1VPUsWQxw}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiYmpjYTE5OTgiLCJhIjoiY2syb284dmVtMTIwMTNjcXUwZWdiMW8xdCJ9.DmLHSVn33Xb3b1VPUsWQxw",
  }
).addTo(map);

var map = L.map("mapid").setView([51.505, -0.09], 13);
