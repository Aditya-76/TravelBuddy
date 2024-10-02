import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyAmMHeOKfUiy_2X749jAFkz4E3wWGVGdtI",
  version: "weekly",
});

export const initMap = async (
  mapRef: React.RefObject<HTMLDivElement>
): Promise<google.maps.Map> => {
  const googleMaps = await loader.importLibrary("maps");
  const googleMarker = await loader.importLibrary("marker");

  const map = new googleMaps.Map(mapRef.current!, {
    center: { lat: 12.9298683, lng: 77.673435 },
    zoom: 14,
    mapId: "8f6d5f0e7d2e7c8b",
  });
  new googleMarker.AdvancedMarkerElement({
    position: { lat: 12.9298683, lng: 77.673435 },
    map,
  });

  return map;
};

declare global {
  interface Window {
    google: typeof google;
  }
}
