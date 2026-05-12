import "./App.css";

import {
  Map,
  MapFullscreenControl,
  MapSearchControl,
  MapTileLayer,
  MapZoomControl,
  MapLayers,
  MapLayersControl,
  MapLayerGroup,
} from "@/components/ui/map";
import MapMarkerList from "./components/specific/MapMarkerList";

function App() {
  return (
    <>
      <div className="h-full">
        <Map zoom={3} center={[25, 10]} className="h-full">
          <MapLayers defaultTileLayer="Default" defaultLayerGroups={["Been there"]}>
            <MapTileLayer />
            <MapTileLayer
              name="National Geographic"
              url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
              maxZoom={12}
            />
            <MapTileLayer
              name="Satellite"
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            />
            <MapTileLayer
              name="Topography"
              url="https://a.tile.opentopomap.org/{z}/{x}/{y}.png"
              maxZoom={17}
            />
            <MapLayersControl position="right-4 top-2" />
            <MapLayerGroup name="Been there">
              <MapMarkerList />
            </MapLayerGroup>
          </MapLayers>

          <MapSearchControl position="left-2 top-2" />
          <MapZoomControl position="right-2 bottom-10" />
          <MapFullscreenControl position="right-2 bottom-2" />
        </Map>
      </div>
    </>
  );
}

/* function MapLayers() {
  return (
    <>
      <MapTileLayer name="Light" />
      <MapTileLayer
        name="NatGeo World Map"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
      />
    </>
  );
} */

export default App;
