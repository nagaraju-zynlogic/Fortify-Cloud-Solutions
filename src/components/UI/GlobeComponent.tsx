



import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

function GlobeComponent() {
  const globeRef = useRef<any>(null);

const arcsData = [
  // Your existing 20 arcs...
  { startLat: 17.3850, startLng: 78.4867, endLat: 34.0522, endLng: -118.2437, color: 'rgba(255, 100, 100, 0.6)' }, // Hyderabad → Los Angeles
  { startLat: 37.7749, startLng: -122.4194, endLat: 49.2827, endLng: -123.1207, color: 'rgba(100, 255, 100, 0.6)' }, // San Francisco → Vancouver
  { startLat: 40.7128, startLng: -74.0060, endLat: 51.5074, endLng: -0.1278, color: 'rgba(100, 100, 255, 0.6)' }, // New York → London
  { startLat: 48.8567, startLng: 2.2945, endLat: 55.7558, endLng: 37.6173, color: 'rgba(255, 255, 100, 0.6)' }, // Paris → Moscow
  { startLat: 35.6895, startLng: 139.7670, endLat: 31.2304, endLng: 121.4737, color: 'rgba(0, 0, 255, 0.6)' }, // Tokyo → Beijing
  { startLat: 25.7617, startLng: -109.4100, endLat: 20.5937, endLng: -66.9265, color: 'rgba(255, 0, 0, 0.6)' }, // Mexico City → Bogota
  { startLat: -23.5505, startLng: -46.6333, endLat: 19.4326, endLng: -99.1332, color: 'rgba(0, 255, 0, 0.6)' }, // Sao Paulo → Mexico City
  { startLat: 37.7749, startLng: -122.4194, endLat: 48.8567, endLng: 2.2945, color: 'rgba(255, 0, 255, 0.6)' }, // San Francisco → Paris
  { startLat: 34.0522, startLng: -118.2437, endLat: 40.7128, endLng: -74.0060, color: 'rgba(0, 0, 0, 0.6)' }, // Los Angeles → New York
  { startLat: 51.5074, startLng: -0.1278, endLat: 55.7558, endLng: 37.6173, color: 'rgba(255, 255, 255, 0.6)' }, // London → Moscow

  { startLat: -33.8688, startLng: 151.2093, endLat: 35.6895, endLng: 139.6917, color: 'rgba(255, 165, 0, 0.6)' }, // Sydney → Tokyo
  { startLat: 28.6139, startLng: 77.2090, endLat: 40.7128, endLng: -74.0060, color: 'rgba(0, 191, 255, 0.6)' }, // New Delhi → New York
  { startLat: -1.2921, startLng: 36.8219, endLat: 51.5074, endLng: -0.1278, color: 'rgba(75, 0, 130, 0.6)' }, // Nairobi → London
  { startLat: 19.0760, startLng: 72.8777, endLat: 55.2708, endLng: 25.2048, color: 'rgba(255, 69, 0, 0.6)' }, // Mumbai → Dubai
  { startLat: 41.9028, startLng: 12.4964, endLat: -33.9249, endLng: 18.4241, color: 'rgba(0, 255, 127, 0.6)' }, // Rome → Cape Town
  { startLat: 52.5200, startLng: 13.4050, endLat: 39.9042, endLng: 116.4074, color: 'rgba(255, 215, 0, 0.6)' }, // Berlin → Beijing
  { startLat: 43.6532, startLng: -79.3832, endLat: -37.8136, endLng: 144.9631, color: 'rgba(255, 20, 147, 0.6)' }, // Toronto → Melbourne
  { startLat: 30.0444, startLng: 31.2357, endLat: 35.6895, endLng: 139.6917, color: 'rgba(0, 206, 209, 0.6)' }, // Cairo → Tokyo
  { startLat: 59.3293, startLng: 18.0686, endLat: 40.4168, endLng: -3.7038, color: 'rgba(148, 0, 211, 0.6)' }, // Stockholm → Madrid
  { startLat: -34.6037, startLng: -58.3816, endLat: 40.7128, endLng: -74.0060, color: 'rgba(255, 99, 71, 0.6)' }, // Buenos Aires → New York

  // // 10 New arcs
  // { startLat: 60.1699, startLng: 24.9384, endLat: 35.6895, endLng: 139.6917, color: 'rgba(255, 140, 0, 0.6)' }, // Helsinki → Tokyo
  // { startLat: -36.8485, startLng: 174.7633, endLat: -33.8688, endLng: 151.2093, color: 'rgba(0, 128, 128, 0.6)' }, // Auckland → Sydney
  // { startLat: 37.9838, startLng: 23.7275, endLat: 40.7128, endLng: -74.0060, color: 'rgba(255, 182, 193, 0.6)' }, // Athens → New York
  // { startLat: 64.1355, startLng: -21.8954, endLat: 51.5074, endLng: -0.1278, color: 'rgba(0, 255, 255, 0.6)' }, // Reykjavik → London
  // { startLat: 55.9533, startLng: -3.1883, endLat: 35.6895, endLng: 139.6917, color: 'rgba(255, 99, 132, 0.6)' }, // Edinburgh → Tokyo
  // { startLat: 35.6762, startLng: 139.6503, endLat: -33.8688, endLng: 151.2093, color: 'rgba(0, 191, 255, 0.6)' }, // Tokyo → Sydney
  // { startLat: 21.0278, startLng: 105.8342, endLat: 48.8567, endLng: 2.2945, color: 'rgba(173, 255, 47, 0.6)' }, // Hanoi → Paris
  // { startLat: -22.9068, startLng: -43.1729, endLat: -34.6037, endLng: -58.3816, color: 'rgba(72, 61, 139, 0.6)' }, // Rio de Janeiro → Buenos Aires
  // { startLat: 39.9042, startLng: 116.4074, endLat: 55.7558, endLng: 37.6173, color: 'rgba(199, 21, 133, 0.6)' }, // Beijing → Moscow
  // { startLat: 14.5995, startLng: 120.9842, endLat: 37.7749, endLng: -122.4194, color: 'rgba(0, 255, 127, 0.6)' }, // Manila → San Francisco
];


  useEffect(() => {
    if (globeRef.current) {
      const renderer = globeRef.current.renderer();
      renderer.setClearColor('rgba(0,0,0,0)', 0); // transparent background
    }
  }, []);

  return (
    <div className="relative flex items-center justify-center mt-12 lg:mt-0 h-96 lg:h-[500px] w-1/2 md:w-1/3 lg:w-1/4 rounded-lg">
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        arcsData={arcsData}
        arcColor={'color'}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={() => Math.random() * 4000 + 500}
        backgroundColor="rgba(0,0,0,0)" // ensures transparent canvas
      />
    </div>
  );
}

export default GlobeComponent;
