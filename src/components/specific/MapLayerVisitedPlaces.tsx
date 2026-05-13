import {
  MapMarker,
  MapMarkerClusterGroup,
  MapPopup,
  MapTooltip,
} from "../ui/map";
import { visitedPlaces } from "@data/visitedPlaces";
import type { VisitedPlace } from "@data/visitedPlaces";
import { MapPin } from "lucide-react";
import { Badge } from "../ui/badge";

export default function MapLayerVisitedPlaces() {
  return (
    <>
      <MapMarkerClusterGroup showCoverageOnHover={false} maxClusterRadius={50}>
        {visitedPlaces.map((place: VisitedPlace) => (
          <MapMarkerSingle key={place.name} place={place} />
        ))}
      </MapMarkerClusterGroup>
    </>
  );
}

function MapMarkerSingle({ place }: { place: VisitedPlace }) {
  return (
    <MapMarker
      key={place.name}
      position={place.coordinates}
      icon={<MapPin size={28} color="#bd0000" strokeWidth={2} />}
      iconAnchor={[14, 28]}
    >
      
      <MapMarkerTooltip place={place} />
      <MapMarkerPopupCard place={place} />
    </MapMarker>
  );
}

function MapMarkerTooltip({ place }: { place: VisitedPlace }) {
  return (
    <MapTooltip>
      {place.name}{" "}
      {place.countryCode && (
        <Badge variant={"outline"} className="text-white">
          {place.countryCode}
        </Badge>
      )}
    </MapTooltip>
  );
}

function MapMarkerPopupCard({ place }: { place: VisitedPlace }) {
  return (
    <MapPopup>
      <img src={place.imageUrl} alt={place.name} className="max-h-52 m-auto" />
      <div className="text-lg flex items-center justify-center gap-1">
        <span>{place.name}</span>
        {place.countryCode && <Badge>{place.countryCode}</Badge>}
      </div>
      {place.description && <div>{place.description}</div>}
      <div className="flex items-center justify-center gap-1">
        {place.type && <Badge variant={"outline"}>{place.type}</Badge>}
        {place.visitedTimes && (
          <Badge variant={"outline"}>Visited: {place.visitedTimes}x</Badge>
        )}
        {place.rating && (
          <Badge variant={"outline"}>Rating: {place.rating}/5</Badge>
        )}
      </div>
    </MapPopup>
  );
}
