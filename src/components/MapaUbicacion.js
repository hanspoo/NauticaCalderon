import { useState, useEffect } from "react";
import L from "leaflet/dist/leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

export function MapaUbicacion({ lan, lon }) {
  const [width, setWidth] = useState();

  let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow });

  window.addEventListener("resize", () =>
    setWidth(window.innerWidth > 800 ? 800 : 334)
  );

  // Detect if user is on iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const navUrl = isIOS
    ? `http://maps.apple.com/?daddr=${lan},${lon}`
    : `https://www.google.com/maps/dir/?api=1&destination=${lan},${lon}`;

  useEffect(() => {
    var container = L.DomUtil.get("myMap");
    if (container != null) {
      container._leaflet_id = null;
    }

    var map = L.map("myMap").setView([lan, lon], 12);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 19,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoidGFyLWhlbCIsImEiOiJjbDJnYWRieGMwMTlrM2luenIzMzZwbGJ2In0.RQRMAJqClc4qoNwROT8Umg",
      }
    ).addTo(map);

    L.Marker.prototype.options.icon = DefaultIcon;
    var marker = L.marker([lan, lon]).addTo(map);
    marker
      .bindPopup(`<a href='${navUrl}'>Ir a Náutica Calderón</b>`)
      .openPopup();
  });
  return (
    <div id="myMap" style={{ height: "320px", width: `${width}px` }}></div>
  );
}
