// Componente Mapa.js
import React, { useEffect } from 'react';

export const Mapa = () => {
  useEffect(() => {
    if (!window.JSMaps) {
      window.JSMaps = { maps: {} };
    }

    window.JSMaps.maps.dominicanRepublic = JSON.parse(JSON.stringify({
      "config": {
        "mapWidth": 700.4,
        "mapHeight": 476.8,
        "displayAbbreviation": true,
        "defaultText": null
      },
      "paths": [
        {
          "enable": true,
          "name": "Pedernales",
          "abbreviation": "PN",
          "text": "<div class='province-block'><h1>Pedernales - PN</h1><ul class='oficinas'><li><h3>Supérate</h3><p><b>Dirección:</b> C/Antonio Duvergé #01 Edificio de la Gobernación, Pedernales.<br /><b>Teléfonos:</b>809-524-0112</p></li><li><h3>ADESS</h3><p><b>Dirección:</b> C/Antonio Duvergé frente al Parque Municipal, Pedernales. Gobernación Provincial Pedernales.<br /><b>Teléfonos:</b>809-524-9309</p></li></ul></div>",
          "path": "M92.1,475.4 L88.9,476.4 L85.7,474.6 L85.7,470.3 L89.7,461.3 L95.1,464.9 L99.9,469.7 L97.0,470.5 Z M136.2,415.6 L134.2,421.0 L130.7,422.9 L129.4,426.9 L126.3,431.6 L119.6,450.3 L117.6,453.9 L109.6,464.9 L104.1,459.9 L91.2,438.1 L88.0,434.6 L81.6,432.0 L66.3,433.8 L59.8,432.2 L67.9,424.5 L69.2,422.0 L68.2,414.7 L63.3,405.8 L62.9,402.2 L64.3,394.7 L62.9,391.1 L59.6,387.2 L52.7,381.3 L42.1,377.2 L45.2,367.7 L44.6,356.3 L42.7,350.6 L43.0,344.8 L44.6,341.0 L53.2,326.6 L69.3,335.9 L85.5,344.2 L92.4,346.0 L99.0,348.8 L110.0,358.8 L115.9,362.3 L116.1,374.1 L114.6,379.8 L110.7,381.2 L109.4,383.0 L113.3,393.2 L122.7,401.1 L127.5,400.0 L133.2,400.3 L136.2,407.3 Z",
          "textX": 0,
          "textY": 0,
          "color": "#fff",
          "hoverColor": "#459fff",
          "selectedColor": "#459fff"
        },
        {
          "enable": true,
          "name": "La Altagracia",
          "abbreviation": "AL",
          "text": "<div class='province-block'><h1>La Altagracia - AL</h1><ul class='oficinas'><li><h3>Supérate</h3><p><b>Dirección:</b> C/José Audilio Santana #70 (frente a la Ferretería El Poli) La Altagracia.<br /><b>Teléfonos:</b>809-467-1844</p></li><li><h3>ADESS</h3><p><b>Dirección:</b> C/La Altagracia frente al Obelisco, en la Plaza Roca #83 local #2, La Altagracia, Higuey.<br /><b>Teléfonos:</b>809-554-5902<br /><b>Observación:</b> Tienen a una persona que trabaja con varias aplicaciones, entre ellas la de PS.</p></li></ul></div>",
          "path": "M627.4,353.9 L636.3,355.1 L646.2,354.8 L648.8,355.7 L652.9,362.2 L654.0,367.4 L644.9,363.9 L638.3,363.7 L629.1,366.0 L622.4,364.3 L617.6,360.0 L614.6,354.6 L612.9,349.7 L615.7,348.9 L619.1,349.5 Z M609.5,198.0 L613.0,193.4 L616.3,195.5 L621.7,196.5 L643.8,216.9 L651.9,226.7 L663.4,235.4 L671.6,241.1 L675.2,242.9 L683.8,251.2 L694.7,257.7 L700.0,265.7 L699.0,273.5 L681.2,300.7 L678.1,305.1 L678.5,312.0 L676.0,317.4 L672.8,319.0 L664.4,319.5 L660.9,318.3 L653.3,313.4 L650.6,312.6 L647.4,314.7 L649.0,321.7 L643.5,332.4 L640.6,344.0 L637.4,346.8 L621.3,348.1 L618.0,347.0 L617.5,339.7 L612.9,330.0 L606.5,320.6 L600.9,314.2 L594.9,310.0 L591.1,308.4 L597.8,291.2 L600.4,285.5 L600.2,279.2 L596.2,274.3 L591.4,269.9 L587.7,263.3 L584.6,256.1 L583.1,252.0 L583.9,247.7 L588.1,245.1 L593.2,244.3 L602.9,236.6 L606.8,225.3 L601.7,215.5 L604.1,202.2 Z",
          "textX": 0,
          "textY": 0,
          "color": "#fff",
          "hoverColor": "#459fff",
          "selectedColor": "#459fff"
        }
        // Continúa con el resto de las provincias
      ]
    }));
  }, []);

  return (
    <div>
      <h1>Mapa de la República Dominicana</h1>
      <div id="mapContainer" style={{ width: '700px', height: '477px' }}></div>
    </div>
  );
};