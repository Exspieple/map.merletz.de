"use client";

import type { LatLngExpression } from "leaflet";
import { MapMarker, MapMarkerClusterGroup, MapSearchControl } from "../ui/map";
import type { PlaceFeature } from "../ui/place-autocomplete";
import { MapPinIcon } from "lucide-react";
import { useState } from "react";
/* import { useMap } from "react-leaflet"; */

export default function MapSearchControlsCustom({
  position,
}: {
  position?: string;
}) {
  const [searchResults, setSearchResults] = useState<PlaceFeature[]>([]);

  return (
    <>
      <MapSearchControl
        position={position}
        onResultsChange={(results) => onResultsChange(results)}
      />
      {searchResults.map((result) => (
        <MapMarkerClusterGroup
          showCoverageOnHover={false}
          maxClusterRadius={50}
        >
          <MapMarker
            key={result.properties.osm_id}
            position={
              result.geometry.coordinates.toReversed() as LatLngExpression
            }
            icon={<MapPinIcon />}
          />
        </MapMarkerClusterGroup>
      ))}
    </>
  );

  function onResultsChange(results: PlaceFeature[]) {
    //TODO: Hide Been there layer when search results are shown
    /* if (results.length != 0) {
      console.log(useMap().fireEvent.apply(useMap().options.layers));
    } */

    setSearchResults(results);
  }
}
