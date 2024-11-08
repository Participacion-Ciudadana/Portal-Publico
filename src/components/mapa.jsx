import React, { useState, useEffect } from 'react';

const provinciasYMunicipios = {
  "Distrito Nacional": ["Santo Domingo de Guzmán"],
  "Azua": ["Azua de Compostela", "Estebanía", "Guayabal", "Las Charcas", "Las Yayas de Viajama", "Padre Las Casas", "Peralta", "Pueblo Viejo", "Sabana Yegua", "Tábara Arriba"],
  "Baoruco": ["Neiba", "Galván", "Los Ríos", "Tamayo", "Villa Jaragua"],
  // Agrega el resto de provincias y municipios aquí
};

export const MapaYSelectores = () => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    if (window.jsMaps) {
      window.jsMaps.initMap('mapa-rd', {
        mapName: 'dominican_republic',
        width: 600,
        height: 400,
        state: {
          hover: {
            fill: '#F53'
          },
          selected: {
            fill: '#E42'
          }
        },
        onRegionClick: (event, region) => {
          setSelectedProvince(region.name); // Actualiza la provincia al hacer clic en el mapa
          setMunicipios(provinciasYMunicipios[region.name] || []);
        }
      });
    }
  }, []);

  const handleProvinceChange = (event) => {
    const province = event.target.value;
    setSelectedProvince(province);
    setMunicipios(provinciasYMunicipios[province] || []);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Mapa de Indicadores de República Dominicana</h2>

      {/* Selector de Provincia */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="province-select">Seleccione la provincia:</label>
        <select id="province-select" onChange={handleProvinceChange} value={selectedProvince}>
          <option value="">Seleccione una provincia</option>
          {Object.keys(provinciasYMunicipios).map((province) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select>
      </div>

      {/* Selector de Municipio */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="municipio-select">Seleccione el municipio:</label>
        <select id="municipio-select" disabled={!selectedProvince}>
          <option value="">Seleccione un municipio</option>
          {municipios.map((municipio, index) => (
            <option key={index} value={municipio}>
              {municipio}
            </option>
          ))}
        </select>
      </div>

      {/* Contenedor del mapa */}
      <div id="mapa-rd" style={{ width: '100%', maxWidth: '600px', height: '400px', margin: '0 auto' }}></div>
    </div>
  );
};
