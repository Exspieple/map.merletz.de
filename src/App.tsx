import "./App.css";

import {
  Map,
  MapMarker,
  MapPopup,
  MapTileLayer,
  MapZoomControl,
} from "./components/ui/map";

function App() {
  return (
    <>
      <div className="h-full">
        <Map center={[43.6532, -79.3832]} className="h-full">
          <MapTileLayer />
          <MapZoomControl />
          <MapMarker position={[43.6532, -79.3832]}>
            <MapPopup>A map component for shadcn/ui.</MapPopup>
          </MapMarker>
        </Map>
      </div>
    </>
  );
}

export default App;
