import { useEffect, useRef, useState } from "react";
import {
  onLocationUpdate,
  onRouteUpdate,
} from "../services/websocket/websocket";
import { initMap } from "../services/googleMaps/googleMaps";

export default function Map() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const tempMap = initMap(mapRef);
    setMap(tempMap);
  }, []);

  useEffect(() => {
    if (!map) return;

    onRouteUpdate((route) => {
      // Update map with new route
    });

    onLocationUpdate((location) => {
      // Update map with new user location
    });
  }, [map]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
}
