export interface UserLocation {
  lat: number;
  lng: number;
}

export interface Route {
  // Define the structure of your route object
  origin: UserLocation;
  destination: UserLocation;
  waypoints?: UserLocation[];
}
