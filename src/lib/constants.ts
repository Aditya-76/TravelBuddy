export enum WebSocketActions {
  JOIN_ROOM = "join_room",
  SET_ROUTE = "set_route",
  UPDATE_LOCATION = "update_location",
  ROUTE_UPDATED = "route_updated",
  LOCATION_UPDATED = "location_updated",
}

export const WEB_SOCKET_URL = "wss://echo.websocket.org/";
