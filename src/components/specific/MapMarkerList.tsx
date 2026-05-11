import { MapMarker, MapMarkerClusterGroup, MapPopup, MapTooltip } from "../ui/map";
import { visitedPlaces } from "@data/visitedPlaces";
import type { VisitedPlace } from "@data/visitedPlaces";

export default function MapMarkerList() {
  return (
    <>
      <MapMarkerClusterGroup>
        {visitedPlaces.map((place: VisitedPlace) => (
          <MapMarker key={place.name} position={place.coordinates}>
             <MapTooltip>{place.name}</MapTooltip>
            <MapPopup>
              <div className="text-lg">{place.name}</div>
              {place.description && <div className="">{place.description}</div>}
            </MapPopup>
          </MapMarker>
        ))}
      </MapMarkerClusterGroup>
    </>
  );
}
