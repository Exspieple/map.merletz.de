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

export default function MapMarkerList() {
  return (
    <>
      <MapMarkerClusterGroup showCoverageOnHover={false} maxClusterRadius={50}>
        {visitedPlaces.map((place: VisitedPlace) => (
          <MapMarker
            key={place.name}
            position={place.coordinates}
            icon={<MapPin size={28} color="#bd0000" strokeWidth={2} />}
            iconAnchor={[14,28]}
          >
            <MapTooltip>{place.name} {place.countryCode && <Badge variant={"outline"} className="text-white">{place.countryCode}</Badge>}</MapTooltip>

            <MapPopup>
              <img src={place.imageUrl} alt={place.name} className="max-h-52 m-auto" />
              <div className="text-lg flex items-center justify-center gap-1">
                <span>{place.name}</span>
                {place.countryCode && <Badge>{place.countryCode}</Badge>}
              </div>
              {place.description && <div>{place.description}</div>}
              <div className="flex items-center justify-center gap-1">
                {place.type && <Badge variant={"outline"}>{place.type}</Badge>}
                {place.visitedTimes && <Badge variant={"outline"}>Visited: {place.visitedTimes}x</Badge>}
                {place.rating && <Badge variant={"outline"}>Rating: {place.rating}/5</Badge>}
              </div>
            </MapPopup>
          </MapMarker>
        ))}
      </MapMarkerClusterGroup>
    </>
  );
}
