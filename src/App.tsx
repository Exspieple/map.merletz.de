import "./App.css";

import {
  Map,
  MapFullscreenControl,
  MapTileLayer,
  MapZoomControl,
  MapLayers,
  MapLayersControl,
  MapLayerGroup,
  MapControlContainer,
} from "@/components/ui/map";

import MapLayerVisitedPlaces from "./components/specific/MapLayerVisitedPlaces";
import MapSearchControlsCustom from "./components/specific/MapSearchControlsCustom";

function App() {
  return (
    <>
      <div className="h-full">
        <Map zoom={3} center={[25, 10]} className="h-full">
          <MapLayers
            defaultTileLayer="Default"
            defaultLayerGroups={["Been there"]}
          >
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
            <MapLayersControl position="right-3 top-3" />

            <MapLayerGroup name="Been there">
              <MapLayerVisitedPlaces />
            </MapLayerGroup>
          </MapLayers>

          <MapControlContainer className="top-3 left-3 bg-popover text-popover-foreground flex flex-col gap-2 rounded-md border p-2 shadow aspect-square w-10">
            <img src="/LZK_logo.svg" alt="LZK Logo" className="w-full h-auto" />
          </MapControlContainer>

          {<MapSearchControlsCustom  position="left-14 top-3" />}

          <MapZoomControl position="right-3 bottom-12" />
          <MapFullscreenControl position="right-3 bottom-3" />
        </Map>
      </div>
    </>
  );
}

export default App;
