import io, { Socket } from "socket.io-client";
import { Route, UserLocation } from "./types";
import { WEB_SOCKET_URL, WebSocketActions } from "../../lib/constants";

const socket: Socket = io(WEB_SOCKET_URL, {
  transports: ["websocket", "polling"],
});

export const joinRoom = (roomId: string): void => {
  socket.emit(WebSocketActions.JOIN_ROOM, roomId);
  console.log("Joined room:", roomId);
};

export const setRoute = (route: Route): void => {
  socket.emit(WebSocketActions.SET_ROUTE, route);
};

export const updateLocation = (location: UserLocation): void => {
  socket.emit(WebSocketActions.UPDATE_LOCATION, location);
  console.log(location);
};

export const onRouteUpdate = (callback: (route: Route) => void): void => {
  socket.on(WebSocketActions.ROUTE_UPDATED, callback);
};

export const onLocationUpdate = (
  callback: (location: Location) => void
): void => {
  socket.on(WebSocketActions.LOCATION_UPDATED, callback);
};
