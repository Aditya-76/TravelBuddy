import { useState } from "react";
import {
  joinRoom,
  setRoute,
  updateLocation,
} from "./services/websocket/websocket";
import { Route } from "./services/websocket/types";
import Map from "./components/map";

const App = () => {
  const [roomId, setRoomId] = useState("");

  const handleJoinRoom = () => {
    joinRoom(roomId);
  };

  const handleSetRoute = (route: Route) => {
    setRoute(route);
  };

  const handleUpdateLocation = () => {
    // Get current location and update
    navigator.geolocation.getCurrentPosition((position) => {
      updateLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen bg-gradient-to-r from-indigo-700">
      <h1 className="text-3xl mb-6">Travel Buddy: group name</h1>
      <input
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        placeholder="Enter Room ID"
        className="border rounded p-2 focus:outline-none"
      />
      <button onClick={handleJoinRoom} className="border rounded p-2">
        Join Room
      </button>
      {/* <Map /> */}
      <button onClick={handleUpdateLocation} className="border rounded p-2">
        Update My Location
      </button>
    </div>
  );
};

export default App;
