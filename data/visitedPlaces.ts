export const visitedPlaces: VisitedPlace[] = [
    {
        name: "New York City",
        coordinates: [40.7128, -74.0060],
        description: "The city that never sleeps."
    },
    {
        name: "Paris",
        coordinates: [48.8566, 2.3522],
        description: "The City of Light and love."
    },
    {
        name: "Tokyo",
        coordinates: [35.6762, 139.6503],
        description: "A vibrant metropolis blending tradition and modernity."
    },
    {
        name: "London",
        coordinates: [51.5074, -0.1278],
        description: "Historic capital with iconic landmarks."
    },
    {
        name: "Sydney",
        coordinates: [-33.8688, 151.2093],
        description: "Beautiful coastal city known for its Opera House."
    },
    {
        name: "Barcelona",
        coordinates: [41.3874, 2.1686],
        description: "Catalan city famous for Gaudí's architecture."
    },
]



export interface VisitedPlace {
    name: string;
    coordinates: [number, number];
    description?: string;
}