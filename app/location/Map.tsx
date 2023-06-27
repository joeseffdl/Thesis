"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { useContext } from "react";
import { DataContext } from "@/utils/context";

const Map = () => {
  const { firebaseData } = useContext(DataContext);
  let latitude = firebaseData[0].latitude;
  let longitude = firebaseData[0].longitude;

  return (
    <MapContainer
      style={{ width: "100%", height: "100%" }}
      center={[latitude || 0, longitude || 0]}
      zoom={25}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {firebaseData.map((data) => {
        return (
          <Marker
            key={data.id}
            position={[data.latitude || 0, data.longitude || 0]}
          >
            <Popup
              className={`${
                data.status === "danger"
                  ? "bg-red-200"
                  : data.status === "warning"
                  ? "bg-amber-200"
                  : "bg-green-200"
              }`}
            >
              <h1 className="font-bold uppercase">{data.name}</h1>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
