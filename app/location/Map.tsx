"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      style={{ width: "100%", height: "100%" }}
      center={[14.576215, 121.181849]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        {/* <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */}
      </Marker>
    </MapContainer>
  );
};

export default Map;
