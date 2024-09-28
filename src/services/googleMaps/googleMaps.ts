import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyAmMHeOKfUiy_2X749jAFkz4E3wWGVGdtI",
  version: "weekly",
});

export const initMap = async (
  mapRef: React.RefObject<HTMLDivElement>
): Promise<google.maps.Map> => {
  // const google = await loader.load();
  const googleMaps = await loader.importLibrary("maps");
  return new googleMaps.Map(mapRef.current!, {
    center: { lat: 0, lng: 0 },
    zoom: 8,
  });
};

declare global {
  interface Window {
    google: typeof google;
  }
}
