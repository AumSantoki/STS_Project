export interface CityLatency {
  id: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
}

export const MAJOR_CITIES: CityLatency[] = [
  { id: "amd", name: "Ahmedabad", country: "India", lat: 23.0225, lng: 72.5714 },
  { id: "bom", name: "Mumbai", country: "India", lat: 19.076, lng: 72.8777 },
  { id: "lon", name: "London", country: "UK", lat: 51.5074, lng: -0.1278 },
  { id: "nyc", name: "New York", country: "USA", lat: 40.7128, lng: -74.006 },
  { id: "sin", name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198 },
  { id: "syd", name: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093 },
  { id: "tyo", name: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503 },
  { id: "fra", name: "Frankfurt", country: "Germany", lat: 50.1109, lng: 8.6821 },
];

/**
 * Great-circle distance using Haversine formula (km)
 */
export function calculateGreatCircleDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's mean radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

/**
 * Physical minimum Round Trip Time (RTT) in milliseconds
 * Speed of light in vacuum c = ~300,000 km/s
 * Speed of light in silica glass optical fiber (refractive index n ≈ 1.468) = c / 1.468 ≈ 204,000 km/s (approx 200,000 km/s)
 * RTT = (2 * distance_km / 200,000 km/s) * 1000 ms
 */
export function calculateTheoreticalRTT(distanceKm: number): number {
  const speedOfLightInGlassKmPerS = 200000;
  return Number(((2 * distanceKm) / speedOfLightInGlassKmPerS * 1000).toFixed(2));
}

/**
 * Real-world typical RTT (accounts for cable curvature/detours ~ 1.3x and router queueing + switching delays)
 */
export function estimateRealWorldRTT(distanceKm: number): number {
  const theoretical = calculateTheoreticalRTT(distanceKm);
  // Empirical submarine fiber route factor + optical amplification + router processing delays
  return Math.round(theoretical * 1.45 + 12);
}

