import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Dados das cidades da Bahia (exemplo para teste)
const cities = [
  { nome: 'Salvador', lat: -12.9714, lon: -38.5014, casos: 200, doenca: 'Sarampo' },
  { nome: 'Feira de Santana', lat: -12.2711, lon: -38.9666, casos: 150, doenca: 'Meningite' },
  { nome: 'Vitória da Conquista', lat: -14.8660, lon: -40.8397, casos: 120, doenca: 'Coqueluche' },
];

function Map() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="container py-5">
      <h1>Mapa Regional da Bahia</h1>
      <MapContainer center={[-12.9714, -38.5014]} zoom={7} style={{ width: '100%', height: '500px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {cities.map((city, index) => (
          <Marker
            key={index}
            position={[city.lat, city.lon]}
            eventHandlers={{
              mouseover: () => setSelectedCity(city),
              mouseout: () => setSelectedCity(null),
            }}
          >
            {selectedCity && selectedCity.nome === city.nome && (
              <Popup>
                <h5>{city.nome}</h5>
                <p>Casos: {city.casos}</p>
                <p>Doença: {city.doenca}</p>
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
