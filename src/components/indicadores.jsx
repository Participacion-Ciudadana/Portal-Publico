import React from 'react';
import { FaBell } from 'react-icons/fa';

const Indicador = ({ cantidad, descripcion }) => (
  <div style={{ textAlign: 'center', margin: '20px' }}>
    <FaBell size={24} />
    <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }}>{cantidad}</div>
    <div style={{ fontSize: '18px' }}>{descripcion}</div>
  </div>
);

export const Indicadores = () => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', padding: '20px' }}>
    <Indicador cantidad="1,400" descripcion="Indicadores Provinciales" />
    <Indicador cantidad="1000" descripcion="Indicadores Municipales" />
    <Indicador cantidad="1000" descripcion="Otros Indicadores" />
  </div>
);

