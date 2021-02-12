const map = L.map("mapid").setView([-31.3384002, -54.1144647], 15);

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 69],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const popup = L.popup({
  closeButton: false,
  classname: "map-popup",
  minHeight: 240,
  minWidth: 240,
}).setContent(
  'Web-Design <a href="jobs-detail.html?id=1"class="choose-job"> <img src="./public/images/arrow-white.svg"></a>'
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

L.marker([-31.3384002, -54.1144647], {icon })
  .addTo(map)
  .bindPopup(popup);
