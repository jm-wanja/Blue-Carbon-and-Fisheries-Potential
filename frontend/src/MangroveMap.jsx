import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MangroveMap() {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('/data/mangroves.geojson')
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error('Error loading GeoJSON:', err));
  }, []);

  return (
    <MapContainer center={[-3.5, 40]} zoom={7} style={{ height: '500px', width: '100%' }}>
      <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geoData && <GeoJSON data={geoData} style={{ color: 'green', weight: 1, fillOpacity: 0.4 }} />}
    </MapContainer>
  );
}

export default MangroveMap;
