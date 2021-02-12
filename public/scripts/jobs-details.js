const options = {
  dragging:false,
  toutchZoom:false,
  doubleClickZoom:false,
  scrollWheelZoom:false,
  zoomControl:false,
}


const map = L.map("mapid", options).setView([-31.3384002, -54.1144647], 15);

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 69],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});



L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

L.marker([-31.3384002, -54.1144647], {icon })
  .addTo(map)
  
