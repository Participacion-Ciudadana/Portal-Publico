import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import MacroIndicatorFiles from "./MacroIndicatorFiles";


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000";

export const DominicanRepublicMap = () => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("");
  const [setProvinceInfo] = useState("");
  const [municipalities, setMunicipalities] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [filesData, setFilesData] = useState([]);

  const provinces = [
    {
      name: "Santo Domingo de Guzmán",
      province: "Distrito Nacional",
      info: "test",
    },
    { name: "Santo Domingo Este", province: "Santo Domingo", info: "test" },
    { name: "Santo Domingo Oeste", province: "Santo Domingo", info: "test" },
    { name: "Santo Domingo Norte", province: "Santo Domingo", info: "test" },
    { name: "Boca Chica", province: "Santo Domingo", info: "test" },
    { name: "Los Alcarrizos", province: "Santo Domingo", info: "test" },
    { name: "Pedro Brand", province: "Santo Domingo", info: "test" },
    { name: "San Antonio de Guerra", province: "Santo Domingo", info: "test" },
    { name: "Azua de Compostela", province: "Azua", info: "test" },
    { name: "Guayabal", province: "Azua", info: "test" },
    { name: "Las Charcas", province: "Azua", info: "test" },
    { name: "Padre Las Casas", province: "Azua", info: "test" },
    { name: "Peralta", province: "Azua", info: "test" },
    { name: "Pueblo Viejo", province: "Azua", info: "test" },
    { name: "Sabana Yegua", province: "Azua", info: "test" },
    { name: "Tábara Arriba", province: "Azua", info: "test" },
    { name: "Las Yayas de Viajama", province: "Azua", info: "test" },
    { name: "Neiba", province: "Bahoruco", info: "test" },
    { name: "Galván", province: "Bahoruco", info: "test" },
    { name: "Los Ríos", province: "Bahoruco", info: "test" },
    { name: "Tamayo", province: "Bahoruco", info: "test" },
    { name: "Villa Jaragua", province: "Bahoruco", info: "test" },
    { name: "Barahona", province: "Barahona", info: "test" },
    { name: "Cabral", province: "Barahona", info: "test" },
    { name: "El Peñón", province: "Barahona", info: "test" },
    { name: "Enriquillo", province: "Barahona", info: "test" },
    { name: "Fundación", province: "Barahona", info: "test" },
    { name: "Jaquimeyes", province: "Barahona", info: "test" },
    { name: "La Ciénaga", province: "Barahona", info: "test" },
    { name: "Las Salinas", province: "Barahona", info: "test" },
    { name: "Paraíso", province: "Barahona", info: "test" },
    { name: "Polo", province: "Barahona", info: "test" },
    { name: "Vicente Noble", province: "Barahona", info: "test" },
    { name: "Dajabón", province: "Dajabón", info: "test" },
    { name: "El Pino", province: "Dajabón", info: "test" },
    { name: "Loma de Cabrera", province: "Dajabón", info: "test" },
    { name: "Partido", province: "Dajabón", info: "test" },
    { name: "Restauración", province: "Dajabón", info: "test" },
    { name: "San Francisco de Macorís", province: "Duarte", info: "test" },
    { name: "Arenoso", province: "Duarte", info: "test" },
    { name: "Castillo", province: "Duarte", info: "test" },
    { name: "Eugenio María de Hostos", province: "Duarte", info: "test" },
    { name: "Las Guáranas", province: "Duarte", info: "test" },
    { name: "Pimentel", province: "Duarte", info: "test" },
    { name: "Villa Riva", province: "Duarte", info: "test" },
    { name: "El Seibo", province: "El Seibo", info: "test" },
    { name: "Miches", province: "El Seibo", info: "test" },
    { name: "Comendador", province: "Elías Piña", info: "test" },
    { name: "Bánica", province: "Elías Piña", info: "test" },
    { name: "El Llano", province: "Elías Piña", info: "test" },
    { name: "Hondo Valle", province: "Elías Piña", info: "test" },
    { name: "Juan Santiago", province: "Elías Piña", info: "test" },
    { name: "Pedro Santana", province: "Elías Piña", info: "test" },
    { name: "Moca", province: "Espaillat", info: "test" },
    { name: "Cayetano Germosén", province: "Espaillat", info: "test" },
    { name: "Gaspar Hernández", province: "Espaillat", info: "test" },
    { name: "Jamao al Norte", province: "Espaillat", info: "test" },
    { name: "Hato Mayor del Rey", province: "Hato Mayor", info: "test" },
    { name: "El Valle", province: "Hato Mayor", info: "test" },
    { name: "Sabana de la Mar", province: "Hato Mayor", info: "test" },
    { name: "Salcedo", province: "Hermanas Mirabal", info: "test" },
    { name: "Tenares", province: "Hermanas Mirabal", info: "test" },
    { name: "Villa Tapia", province: "Hermanas Mirabal", info: "test" },
    { name: "Jimaní", province: "Independencia", info: "test" },
    { name: "Cristóbal", province: "Independencia", info: "test" },
    { name: "Duvergé", province: "Independencia", info: "test" },
    { name: "La Descubierta", province: "Independencia", info: "test" },
    { name: "Mella", province: "Independencia", info: "test" },
    { name: "Postrer Río", province: "Independencia", info: "test" },
    { name: "Higüey", province: "La Altagracia", info: "test" },
    { name: "San Rafael del Yuma", province: "La Altagracia", info: "test" },
    { name: "La Romana", province: "La Romana", info: "test" },
    { name: "Guaymate", province: "La Romana", info: "test" },
    { name: "Villa Hermosa", province: "La Romana", info: "test" },
    { name: "Concepción de La Vega", province: "La Vega", info: "test" },
    { name: "Constanza", province: "La Vega", info: "test" },
    { name: "Jarabacoa", province: "La Vega", info: "test" },
    { name: "Jima Abajo", province: "La Vega", info: "test" },
    { name: "Nagua", province: "María Trinidad Sánchez", info: "test" },
    { name: "Cabrera", province: "María Trinidad Sánchez", info: "test" },
    { name: "El Factor", province: "María Trinidad Sánchez", info: "test" },
    { name: "Río San Juan", province: "María Trinidad Sánchez", info: "test" },
    { name: "Bonao", province: "Monseñor Nouel", info: "test" },
    { name: "Maimón", province: "Monseñor Nouel", info: "test" },
    { name: "Piedra Blanca", province: "Monseñor Nouel", info: "test" },
    {
      name: "San Fernando de Monte Cristi",
      province: "Monte Cristi",
      info: "test",
    },
    { name: "Castañuelas", province: "Monte Cristi", info: "test" },
    { name: "Guayubín", province: "Monte Cristi", info: "test" },
    { name: "Las Matas de Santa Cruz", province: "Monte Cristi", info: "test" },
    { name: "Pepillo Salcedo", province: "Monte Cristi", info: "test" },
    { name: "Villa Vásquez", province: "Monte Cristi", info: "test" },
    { name: "Monte Plata", province: "Monte Plata", info: "test" },
    { name: "Bayaguana", province: "Monte Plata", info: "test" },
    { name: "Peralvillo", province: "Monte Plata", info: "test" },
    { name: "Sabana Grande de Boyá", province: "Monte Plata", info: "test" },
    { name: "Yamasá", province: "Monte Plata", info: "test" },
    { name: "Pedernales", province: "Pedernales", info: "test" },
    { name: "Oviedo", province: "Pedernales", info: "test" },
    { name: "Baní", province: "Peravia", info: "test" },
    { name: "Nizao", province: "Peravia", info: "test" },
    { name: "Matanzas", province: "Peravia", info: "test" },
    { name: "Puerto Plata", province: "Puerto Plata", info: "test" },
    { name: "Altamira", province: "Puerto Plata", info: "test" },
    { name: "Guananico", province: "Puerto Plata", info: "test" },
    { name: "Imbert", province: "Puerto Plata", info: "test" },
    { name: "Los Hidalgos", province: "Puerto Plata", info: "test" },
    { name: "Luperón", province: "Puerto Plata", info: "test" },
    { name: "Sosúa", province: "Puerto Plata", info: "test" },
    { name: "Villa Isabela", province: "Puerto Plata", info: "test" },
    { name: "Santa Bárbara de Samaná", province: "Samaná", info: "test" },
    { name: "Las Terrenas", province: "Samaná", info: "test" },
    { name: "Sánchez", province: "Samaná", info: "test" },
    { name: "San Cristóbal", province: "San Cristóbal", info: "test" },
    { name: "Bajos de Haina", province: "San Cristóbal", info: "test" },
    { name: "Cambita Garabitos", province: "San Cristóbal", info: "test" },
    { name: "Los Cacaos", province: "San Cristóbal", info: "test" },
    { name: "Nigua", province: "San Cristóbal", info: "test" },
    { name: "Palenque", province: "San Cristóbal", info: "test" },
    {
      name: "Sabana Grande de Palenque",
      province: "San Cristóbal",
      info: "test",
    },
    { name: "Villa Altagracia", province: "San Cristóbal", info: "test" },
    { name: "Yaguate", province: "San Cristóbal", info: "test" },
    { name: "San José de Ocoa", province: "San José de Ocoa", info: "test" },
    { name: "Sabana Larga", province: "San José de Ocoa", info: "test" },
    { name: "Rancho Arriba", province: "San José de Ocoa", info: "test" },
    { name: "San Juan de la Maguana", province: "San Juan", info: "test" },
    { name: "Bohechío", province: "San Juan", info: "test" },
    { name: "El Cercado", province: "San Juan", info: "test" },
    { name: "Juan de Herrera", province: "San Juan", info: "test" },
    { name: "Las Matas de Farfán", province: "San Juan", info: "test" },
    { name: "Vallejuelo", province: "San Juan", info: "test" },
    {
      name: "San Pedro de Macorís",
      province: "San Pedro de Macorís",
      info: "test",
    },
    { name: "Consuelo", province: "San Pedro de Macorís", info: "test" },
    { name: "Guayacanes", province: "San Pedro de Macorís", info: "test" },
    { name: "Quisqueya", province: "San Pedro de Macorís", info: "test" },
    { name: "Ramón Santana", province: "San Pedro de Macorís", info: "test" },
    { name: "Cotuí", province: "Sánchez Ramírez", info: "test" },
    { name: "Cevicos", province: "Sánchez Ramírez", info: "test" },
    { name: "Fantino", province: "Sánchez Ramírez", info: "test" },
    { name: "La Mata", province: "Sánchez Ramírez", info: "test" },
    { name: "Santiago de los Caballeros", province: "Santiago" },
    { name: "Bisonó", province: "Santiago", info: "test" },
    { name: "Jánico", province: "Santiago", info: "test" },
    { name: "Licey al Medio", province: "Santiago", info: "test" },
    { name: "Puñal", province: "Santiago", info: "test" },
    { name: "Sabana Iglesia", province: "Santiago", info: "test" },
    { name: "San José de las Matas", province: "Santiago", info: "test" },
    { name: "Tamboril", province: "Santiago", info: "test" },
    { name: "Sabaneta", province: "Santiago Rodríguez", info: "test" },
    { name: "Los Almácigos", province: "Santiago Rodríguez", info: "test" },
    { name: "Monción", province: "Santiago Rodríguez", info: "test" },
    { name: "Mao", province: "Valverde", info: "test" },
    { name: "Esperanza", province: "Valverde", info: "test" },
    { name: "Laguna Salada", province: "Valverde", info: "test" },
  ];

  const handleProvinceClick = (e) => {
    const province = e.target.getAttribute("data-province");
    const selected = provinces.find((p) => p.name === province);

    if (selected) {
      setSelectedProvince(province);
      setProvinceInfo(selected.info);
      setMunicipalities(selected.municipalities);
      setSelectedMunicipality("");
    }
  };

  const handleProvinceChange = async (e) => {
    const province = e.target.value;
    const filteredProvinces = provinces.filter((p) => p.province === province);
    const firstProvinceInfo = filteredProvinces[0]?.info || "";
  
    setSelectedProvince(province);
    setProvinceInfo(firstProvinceInfo);
    setMunicipalities(filteredProvinces.map((p) => p.name));
    setSelectedMunicipality("");
    setDocuments([]);
    setFilesData([]);
  
    try {
      console.log("province", province);
    
      const response = await fetch(
        `${BACKEND_URL}/uploads/macro-indicator/province/${encodeURIComponent(province)}`
      );
    
      console.log("response", response);
    
      if (!response.ok) {
        throw new Error("Error al obtener macroindicadores");
      }
    
      const data = await response.json();
    
      const parsed = Array.isArray(data)
        ? data
        : Array.isArray(data.files)
        ? data.files
        : Array.isArray(data.data)
        ? data.data
        : [];
    
      console.log("parsed", parsed);
    
      setFilesData(parsed);
    } catch (error) {
      console.error("Error al obtener macroindicadores:", error);
    }    
  };
  
  
  const handleMunicipalityChange = async (e) => {
    const municipality = e.target.value;
    setSelectedMunicipality(municipality);

    if (selectedProvince && municipality) {
      try {
        const response = await fetch(
          `${BACKEND_URL}/uploads/documents/province/${encodeURIComponent(
            selectedProvince
          )}/municipality/${encodeURIComponent(municipality)}`
        );

        if (!response.ok) {
          throw new Error("Error al obtener los documentos");
        }

        if(response?.statusCode === 404){
          setDocuments([]);
        }
        const { documents } = await response.json();

        if(documents){
          setDocuments(documents);
        }


      
      } catch (error) {
        console.error("Error al buscar documentos:", error);
      }
    }
  };

  const downloadFile = async (filename, path) => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/uploads/download/file?filename=${encodeURIComponent(
          filename
        )}&origen_path=${encodeURIComponent(path)}`
      );

      if (!response.ok) {
        throw new Error("Error al descargar el archivo");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
      alert("Error al descargar el archivo. Por favor, inténtalo nuevamente.");
    }
  };
  

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Mapa de la República Dominicana</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <select
          onChange={handleProvinceChange}
          value={selectedProvince}
          style={{
            padding: "5px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Selecciona una provincia</option>
          {[...new Set(provinces.map((p) => p.province))].map((province) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select>
        {municipalities.length > 0 && (
          <select
            onChange={handleMunicipalityChange}
            value={selectedMunicipality}
            style={{
              padding: "5px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">Selecciona un municipio</option>
            {municipalities.map((municipality) => (
              <option key={municipality} value={municipality}>
                {municipality}
              </option>
            ))}
          </select>
        )}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        style={{
          maxWidth: "100%",
          height: "auto",
          border: "1px solid #ccc",
          margin: "20px auto",
        }}
      >
        <g id="Dominican_Republic">
          {/* good */}
          <path
            className={`st0 ${
              selectedProvince === "Monte Cristi" ? "selected" : ""
            }`}
            onClick={handleProvinceClick}
            data-province="Monte Cristi"
            data-info="Capital del país y centro administrativo."
            d="M83.028,107.755l0.2-3.39l-0.717-3.778l-1.773-5.874l3.853,0.851l3.607,1.851l-0.761-4.214l-3.566-8.247
            l0.213-2.112v-1.599l-5.398-0.278l-0.687-2.277l2.176-3.373l3.165-3.478l0.908-0.652l1.031-0.217l2.241,0.061l1.366-0.565
            l2.233-2.748l1.202-1.07l2.397-0.965l1.783-0.443l1.759-0.835l2.307-2.131l-1.374-2.679l-0.221-2.392l1.063-1.696l2.585-0.661
            l1.554,0.244l2.405,1.096l1.538,0.244l0.671-0.452l1.399-2.009l0.728-0.444l20.645-1.592l5.251,0.74l5.186,1.879l19.189,10.011
            l5.636,1.148l5.349-2.096l4.049,2.974l2.895,1.339l8.908,0.313l0.396-0.11l1.367,7.252l4.005,6.204l6.259,1.821l6.02,2.412
            l-2.223,6.258l-1.74,6.4l0.576,7.061l0.488,7.07l-4.882-0.496l-1.262,4.549l1.241,7.773l-2.296,7.331l-3.48-1.185l-2.976,2.1
            l-6.321-0.595l-6.269-3.693l-4.29,0.557l-3.911,2.017l-6.524,0.557l-6.108-2.287l-3.459-2.596l-2.665,3.412l-8.274-3.925
            l-7.656-5.099l-3.028-5.552l-5.054-1.445l-21.15,2.625l-19.509-8.316L83.028,107.755z"
          />
          {/* good */}
          <path
            className={`st0 ${
              selectedProvince === "Elías Piña" ? "selected" : ""
            }`}
            onClick={handleProvinceClick}
            data-province="Elías Piña"
            data-info="Conocida como la Ciudad Corazón."
            d="M75.217,312.974l5.393-3.349l2.815-2.32l2.41-3.954l1.371-3.587l0.987-3.922l0.301-3.988l-1.621-8.345
            l-0.208-8.611l-1.111-3.93l-1.496-1.921l-4.602-4.227l-1.839-2.169l-2.846-6.018l-1.839-1.494l-4.706-0.159l-4.997,1.714
            l-3.605,0.566l-0.592-3.685l3.47-2.351l10.315-2.79l2.639-1.637l8.715-9.691l6.015-8.457l3.044-2.743l6.814-4.903l2.535-3.766
            l1.028-3.656l0.914-12.692l-2.537-1.238l3.342-3.196l4.057-2.459l4.254-1.579l1.491-3.89l2.467-2.955l4.913,1.337l4.789,1.612
            l4.119-2.509l3.428-3.593l8.331,5.376l6.217,8.33l8.97,4.516l8.825,4.725l-1.397,6.417l-0.405,6.581l-6.316,4.854l-7.656,0.434
            l-6.305-3.854l-6.82-1.094l-4.067,7.668l-2.358,9.068l-3.148,6.731l-6.222,1.829l-5.682,0.577l-4.436,4.037l-4.986,10.611
            l-1.688,11.48l3.485,4.441l-2.41,10.345l4.539,2.963l4.082,3.577l1.444,4.877l-0.01,5.216l3.729,3.992l5.433,1.283l2.322,6.032
            l-2.862,6.749l-12.627-2.736l-12.891-1.009l-13.572-2.127L75.217,312.974z"
          />
          {/* good */}
          <path
            className={`st0 ${
              selectedProvince === "Independencia" ? "selected" : ""
            }`}
            onClick={handleProvinceClick}
            data-province="Independencia"
            data-info="Famosa por su carnaval y paisajes naturales."
            d="M73.834,313.834l1.383-0.859l11.148,1.333l13.572,2.127l12.891,1.009l12.627,2.736l-6.529,1.798l-6.435,2.061
            l-0.966,2.346l0.322,2.697l-1.361,4.784l-2.254,4.444l5.641,18.509l20.631,8.104l7.708,3.493l7.272,4.483l7.786,1.987l7.703-3.027
            l9.619,0.602l5.22,9.808l5.599,4.635l7.23-0.503l-6.664,8.902l-10.596,2.855l-10.139-3.457l-8.908,1.915l2.961,12.131l3.142,11.608
            l-4.618,0.623l-5.09-1.394l-3.672,3.941l-0.878,5.717l-6.009-5.061l-5.755-5.412l-6.96-2.827l-7.344-1.865l-17.119-8.476
            l-16.626-9.408l-0.445-0.187l0.12-0.207l2.367-4.081l-0.436-0.613l-1.849-1.658l-2.867-1.899l-10.803-4.082l-7.583-5.073
            l-1.631-1.888l-3.054-4.527l-1.693-1.505l-7.843-1.976l-3.013-1.664l-1.205-3.92l0.758-2.327l1.506-0.865l1.07-1.161l-0.499-3.182
            l-1.299-2.01L31.787,334.67L30,331.202l3.459-2.614l7.469-1.584l15.114,2.801l7.781-2.669l2.618-2.823l4.134-7.077l2.742-3.081
            L73.834,313.834z"
          />
          {/* good */}
          <path
            className={`st0 ${
              selectedProvince === "Pedernales" ? "selected" : ""
            }`}
            onClick={handleProvinceClick}
            data-province="Pedernales"
            data-info="Destino turístico con playas y montañas."
            d="M76.959,449.69l2.405-6.394l0.727-3.661l-0.447-6.142l0.135-3.52l-0.478-2.367l-2.161-6.062l-0.301-2.001
		l0.561-4.166l1.589-3.975l8.93-15.397l0.445,0.187l16.626,9.408l17.119,8.476l7.344,1.865l6.96,2.827l5.755,5.412l6.009,5.061
		l6.186,3.591l0.255,8.617l0.187,3.868l-0.389,3.802l-1.101,2.261l-2.015,0.808l-2.098,0.754l-1.387,1.873l4.327,10.807l9.91,8.195
		l5.08-1.228l6.025,0.289l3.21,7.385l-0.005,8.202l0.14,0.529l0.005,0.02l-0.216-0.182l-0.303,1.53l-0.311,0.541l-0.761,0.67h1.374
		l-0.81,1.779l-1.047,1.357l-1.284,0.885l-1.595,0.309l-0.736,0.868l-1.309,4.21l-0.769,1.529l-2.454,3.548l-6.773,19.836
		l-2.078,3.854l-8.31,11.673l-2.012-0.944l-1.734-1.648l-0.098-0.884l-1.963-1.699l-13.823-22.879l-3.362-3.65l-6.765-2.628
		l-16.056,2.164l-6.871-1.692l1.938-1.503l6.413-6.675l1.374-2.698l-0.295-4.545l-0.842-3.197l-3.1-6.025l-2.176-3.318l-0.425-1.221
		l-0.139-2.536l1.374-7.995l-1.497-3.689l-3.534-4.102l-7.337-6.115L76.959,449.69z M127.565,553.917l-3.354-1.913l-0.041-4.539
		l1.84-5.303l2.241-4.214l2.838,1.605l2.887,2.111l5.12,4.934l-3.1,0.978l-4.998,5.139L127.565,553.917z"
          />
          {/* good */}
          <path
            className={`st0 ${
              selectedProvince === "La Altagracia" ? "selected" : ""
            }`}
            onClick={handleProvinceClick}
            data-province="La Altagracia"
            data-info="Cuna de la Constitución Dominicana."
            d="M702.568,422.178l10.388-0.31l2.732,0.973l2.029,2.712l2.249,4.157l1.472,3.813l-0.335,1.661l-3.051-0.68
		l-6.486-2.978l-3.378-0.68l-3.583,0.439l-6.225,1.988l-3.419,0.465l-7.067-1.885l-5.03-4.562l-3.239-5.681l-1.759-5.217
		l2.986-0.887l3.525,0.68l3.493,1.722l2.985,2.17l2.323,0.827L702.568,422.178z M678.226,250.287l1.644,1.176l1.84,1.038
		l3.583,0.294l2.061,0.778l23.361,21.789l8.588,10.475l12.122,9.279l8.687,6.081l2.47,1.106l1.292,0.846l9.079,8.791l11.5,7.011
		l5.546,8.494l-1.096,8.319l-18.895,28.844l-1.333,1.155l-1.325,1.431l-0.614,2.017l0.368,7.362l-0.368,2.103l-2.282,3.594
		l-3.313,1.698l-4.155,0.5h-4.777l-3.681-1.241l-7.967-5.257l-2.896-0.871l-3.321,2.232l0.523,3.404l1.072,4.033l-1.71,4.136
		l-2.47,3.308l-1.562,3.834l-3.1,12.316l-1.121,2.187l-2.282,0.827l-16.997,1.352l-3.468-1.231l-0.458-7.75l-4.891-10.25
		l-6.691-9.969l-5.922-6.851l-6.306-4.379l-4.056-1.729l3.591-8.606l3.558-9.632l2.727-6.129l-0.218-6.612l-4.228-5.282
		l-5.064-4.603l-3.896-7.065l-3.334-7.625l-1.522-4.397l0.805-4.606l4.477-2.682l5.365-0.861l10.289-8.194l4.155-12.026
		l-5.454-10.455l1.553-8.921l1.148-2.323l-0.135-2.872l5.745-4.492L678.226,250.287z"
          />
          {/* good */}
          <path
            data-province="El Seibo"
            className={`st0 ${
              selectedProvince === "El Seibo" ? "selected" : ""
            }`}
            d="M592.472,241.549l7.738,2.094l3.174-0.225l3.779-2.146l-1.251-1.557l-2.503-1.506l-0.025-2.059l3.607-1.03
		l3.141,2.855l4.229,6.896l2.732,1.592l3.043,0.917l2.601,1.142l1.358,2.275l2.405-1.972l4.908-2.275l2.307-1.678l-1.538-1.713
		l0.736-0.415l1.808-0.052l1.726-0.606l2.102-2.198l0.638-0.865l0.793-0.061l7.206,0.389l4.213,0.857l3.779,1.358l3.354,1.852
		l0.384,0.588l0.008,0.77l0.164,0.805l0.818,0.727l4.114,1.453l0.368-0.069l7.19,1.522l4.491,0.173l1.816,0.657l0.344,0.242
		l-3.756,4.901l-5.745,4.492l0.135,2.872l-1.148,2.323l-1.553,8.921l5.454,10.455l-4.155,12.026l-10.289,8.194l-5.365,0.861
		l-4.477,2.682l-0.805,4.606l1.522,4.397l-8.783,3.437l-5.064,9.806l-7.708,9.814l-10.087,6.284l1.485-5.528l1.034-4.893l-5.9-0.619
		l-6.316,0.91l-5.719-4.225l-4.882-5.376l-3.283-0.915l-3.366,0.34l-2.758-1.694l-2.633-1.94l2.42-7.828l3.485-8.061l0.878-9.061
		l-3.106-8.525l-11.531-12.018l-7.22-14.773l11.37-2.026l16.574,3.893l-5.532-10.011l0.951-11.623l0.01-0.066L592.472,241.549z"
          />
          {/* good */}
          <path
            data-province="Hato Mayor"
            className={`st0 ${
              selectedProvince === "Hato Mayor" ? "selected" : ""
            }`}
            d="M510.226,224.327l2.496,1.81l11.091-1.705l3.828,1.42l4.777-1.541l9.456,3.687l4.99-0.563l-1.227-1.065
		l-1.611-0.969l-1.922-0.719l-2.225-0.286v-1.454l10.732-0.571l3.125,0.571l3.566,2.632l2.765,6.535l3.394,2.588l3.435,0.917
		l6.912,0.857l18.665,5.079l-0.108,0.769l-0.01,0.066l-0.951,11.623l5.532,10.011l-16.574-3.893l-11.37,2.026l7.22,14.773
		l11.531,12.018l3.106,8.525l-0.878,9.061l-3.485,8.061l-2.42,7.828l-6.856,4.807l-3.262,7.919l-4.301,5.611l-5.719,6.744
		l-3.064-6.946l-2.799-7.079l-4.591-6.998l-4.581-7l-1.413-8.641l-1.143-8.796l-3.599-6.719l0.01-7.357l3.579-4.949l4.192-4.39
		l4.129-2.563l3.828-2.657l-3.714-3.749l-7.287-0.955l-9.832-5.413l-10.092-5.019l-11.448-5.816l-9.282-8.327l2.691-6.076
		l1.169-6.479l-0.587-5.666L510.226,224.327z"
          />
          {/* good */}
          <path
            data-province="Samaná"
            className={`st0 ${selectedProvince === "Samaná" ? "selected" : ""}`}
            d="M479.954,181.479l0.762,0.746l6.879,2.808l4.073-0.676l7.803-3.007l4.024-0.676l9.046-0.373l4.008-0.858
		l4.114-1.681l5.938-3.987l2.298-0.503l2.078,0.451l4.261,2.106l2.642,0.468l4.867-1.222l2.11-0.225l1.17,0.043l1.088,0.26
		l0.793,0.65l0.327,1.231l0.638,1.04l1.391-0.399l2.208-1.378l11.664,4.784l3.435,2.496l2.274-4.619l3.697-3.415l9.128-5.063
		l5.873-1.803l1.391,2.462l-1.554,5.08l-2.961,6.032l4.008,1.482l4.531-0.026l4.401-1.144l3.648-1.889l1.194,4.671l-2.617,3.666
		l-3.607,3.327l-1.824,3.665l-0.867,3.855l-2.339,3.473l-3.509,2.546l-4.392,1.091l-15.778-2.91l-17.283,1.325l-4.073-1.169
		l-7.451-3.733l-25.626-3.188l-2.887,0.797l-1.104,2.85l-0.654,10.124l-1.505,8.641l0.622,3.238l1.921,1.384l-0.135,1.572
		l0.587,5.666l-1.169,6.479l-2.691,6.076l-5.848-4.373l-6.368-3.632l-5.776-4.325l-5.718-4.408l3.953-3.787l0.722-6.657l2.716-3.398
		l3.163-2.117l5.334-3.58l-0.01-5.758l-12.164-2.904l-9.817,4.697l-1.34-5.011l1.252-5.27l1.875-5.331l0.727-5.712L479.954,181.479z
		"
          />
          {/* good */}
          <path
            data-province="María Trinidad Sánchez"
            className={`st0 ${
              selectedProvince === "María Trinidad Sánchez" ? "selected" : ""
            }`}
            d="M415.112,110.379l6.637-7.127l3.803-1.781l11.141,0.174l5.456-0.53l2.47,0.313l3.059,1.815l6.854,7.296
		l2.159,4.959l-0.115,5.418l-3.296,11.727l4.024,1.701l1.53,3.784l-0.057,9.735l0.491,4.233l1.284,3.383l13.39,20.116l6.011,5.884
		l-0.435,1.076l-0.727,5.712l-1.875,5.331l-1.252,5.27l1.34,5.011l-13.925-2.7l-13.504-6.375l-13.806-3.499l-9.78-8.303
		l-2.737-4.948l-6.108-0.787l-6.986-5.125l-2.488-8.98l-0.582-7.308l-2.368-6.753l-6.82-4.649l-7.131-4.347l0.613-6.095l1.189-5.478
		l4.29-0.276l4.695,0.325l9.947-5.821l3.734-11.104L415.112,110.379z"
          />
          {/* good */}
          <path
            data-province="Espaillat"
            className={`st0 ${
              selectedProvince === "Espaillat" ? "selected" : ""
            }`}
            d="M359.093,93.842l7.346,7.803l3.337,2.389l3.664,1.876l4.122,1.251l9.169,0.982l7.37,2.675l13.496,2.675
		l3.01-0.052l2.012-0.756l1.791-1.555l0.699-0.751l0.126,1.277l-3.734,11.104l-9.947,5.821l-4.695-0.325l-4.29,0.276l-1.189,5.478
		l-0.613,6.095l-2.14-0.413l-2.171,0.028l-4.576-7.516l-5.828-5.148l-6.025,3.489l-4.124,6.04l-4.747,3.24l-2.374-5.692
		l-3.329-1.631l-3.636-1.367l-6.705,8.349l0.068,14.219l-0.764,11.994l-4.342,12.469l-5.656,1.112l-4.041-10.205l-4.124,0.892
		l-4.508,1.773l-6.347-0.628l-4.789-3.6l2.981-2.241l3.096-2.384l0.052-4.703l-0.571-4.841l1.153-5.327l2.742-4.561l3.002-3.388
		l0.852-4.315l4.446-9.943l1.646-11.307l1.522-4.241l3.147-2.857l2.628,0.017l2.524,0.629l3.589-0.48l3.568-0.96l3.594,0.028
		l3.381-1.059l2.966-5.687L359.093,93.842z"
          />
          {/* good */}
          <path
            data-province="Puerto Plata"
            className={`st0 ${
              selectedProvince === "Puerto Plata" ? "selected" : ""
            }`}
            d="M188.416,68.127l1.951-0.542l0.548-1.644l0.106-2.174l1.063-2.226l2.364-0.922l1.693,1.983l2.233,5.635
		l1.57-0.974l1.186-1.044l0.826-1.2l0.54-1.409l-1.71-0.539l-0.36-0.261l-0.033-0.557l-0.646-1.444l3.149,1.235l2.642-0.148
		l2.691-0.678l3.247-0.409l2.061-1.583l3.722-7.037l2.454-1.592l3.059-0.783l6.519-3.263l3.525-0.47l3.247,0.844l3.092,1.827
		l1.669,2.68l-1.031,3.41l3.877,1.583h1.497l-1.006-3.297l-0.491-1.201l9.725,1.592l2.863-0.296l5.938-1.401l2.307,0.104l2.47,1.67
		l8.842,10.62l0.736,2.035l-1.072,1.983l7.574,0.052l2.896,1.435l7.656,6.468l7.288,3.729l7.746,2.738l8.965,1.356l12.138,0.096
		l1.014-0.617l1.031-1.434l2.429-1.686l2.748-1.417l2.02-0.635l7.844,2.486l12.26,13.034l-2.163,6.044l-2.966,5.687l-3.381,1.059
		l-3.594-0.028l-3.568,0.96l-3.589,0.48l-2.524-0.629l-2.628-0.017l-3.147,2.857l-1.522,4.241l-1.646,11.307l-4.446,9.943
		l-12.242-3.902l-5.906-9.596l-4.176-10.162l-10.731-4.776l-0.727,12.534l-8.986,0.413l-4.472-3.992l-4.529-3.876l-5.573-1.61
		l-6.264-1.472l-8.466-1.125l-7.573-3.828l-6.783-5.45l-8.155-2.582l-5.433-1.429l-4.472-3.415l-6.498-3.201l-6.866-2.461
		l-6.02-2.412l-6.259-1.821l-4.005-6.204L188.416,68.127z"
          />
          {/* good */}
          <path
            data-province="Barahona"
            className={`st0 ${
              selectedProvince === "Barahona" ? "selected" : ""
            }`}
            d="M239.909,402.551l-0.039-0.015l-1.251-1.714l-1.055-2.119l-1.309-1.878l-2.102-1.585l-2.135-0.93l-8.719-1.904
		l-4.041-0.078l-3.141,1.266l-1.26,3.231l-0.425,1.783l-1.783,3.092l-0.425,2.36l0.384,2.713l0.982,1.49l1.333,1.352l1.423,2.325
		l3.28,11.511l1.055,1.971l0.033,2.522l-3.91,5.956l-3.337,8.502l-19.026,27.884l-1.669,4.78l-0.834,1.702l-1.906,1.324l-4,2.089
		l-2.47,2.089l-1.767,2.063l-1.374,2.552l-1.26,3.515l-1.489-0.524l-0.573-0.361l-0.593-0.497l-0.005-0.02l-0.14-0.529l0.005-8.202
		l-3.21-7.385l-6.025-0.289l-5.08,1.228l-9.91-8.195l-4.327-10.807l1.387-1.873l2.098-0.754l2.015-0.808l1.101-2.261l0.389-3.802
		l-0.187-3.868l-0.255-8.617l-6.186-3.591l0.878-5.717l3.672-3.941l5.09,1.394l4.618-0.623l-3.142-11.608l-2.961-12.131l8.908-1.915
		l10.139,3.457l10.596-2.855l6.664-8.902l0.597-6.868l3.522-5.566l3.366-2.124l3.251-2.239l2.285-3.498l3.236-2.644l6.165-2.256
		l5.189-3.817l3.142-5.208l2.685-5.51l3.953,5.056l2.036,3.445l0.634,6.757l-4.057,5.3l-6.17,5.316l1.002,2.436l0.935,2.463
		l1.906,1.439l2.509,0.963l6.487,1.828l5.848,1.406l-0.473,3.07l0.686,4.503l1.532,6.822L239.909,402.551z"
          />
          {/* good */}
          <path
            data-province="Azua"
            className={`st0 ${selectedProvince === "Azua" ? "selected" : ""}`}
            d="M317.549,400.5l-2.624-1.711l-0.875-1.964l0.491-2.102l1.186-0.965l1.366-0.732l1.055-1.456l0.932-4.257
		l0.123-4.472l-0.548-3.921l-1.121-2.534l-4.417-5.551l-2.658-1.905l-4.654-1.811l-3.967-0.931l-5.014-0.388l-4.294,1.164
		l-1.816,3.699l0.687,4.431l-0.507,1.776l-5.971,5.921l-1.644,1.06l-2.168,0.62l-2.348-0.086l-4.18-1.31l-1.849-0.181l-1.554,0.612
		l-2.797,1.982l-1.881,0.431l-2.552-0.327l-0.892,0.551l-1.988,1.879l-0.556,0.793l-1.26,2.619l-0.245,0.922l-0.54,0.836
		l-2.699,0.896l-0.998,0.5l-5.349,6.375l-2.855,1.705l-4.769,0.594l-1.891-0.709l2.998-5.077l-1.532-6.822l-0.686-4.503l0.473-3.07
		l-5.848-1.406l-6.487-1.828l-2.509-0.963l-1.906-1.439l-0.935-2.463l-1.002-2.436l6.17-5.316l4.057-5.3l-0.634-6.757l-2.036-3.445
		l4.249-1.61l0.068-3.758l-5.345-3.588l-6.337-1.156l-12.549-4.361l-9.547-9.678l8.83-2.379l5.293-7.899l3.288-1.255l3.797-1.798
		l-0.457-2.73l-1.335-2.32l2.098-2.873l0.239-2.693l-1.272-7.992l6.539-2.057l1.693,3.67l2.924,1.207l2.748-2.65l1.569-3.61
		l0.104-10.935l1.34-10.527l2.441-5.325l4.934-3.464l2.831-2.718l0.805-4.119l4.207-2.087l1.683-4.553l10.554,7.222l2.265,19.589
		l8.57,11.673l12.268,6.271l7.625,9.292l-2.846,12.135l5.776,11.43l4.207,10.736l2.971,1.825l1.522,3.15l3.49,3.369l4.664,1.66
		l6.69,4.393l6.487,3.33l4.176,7.207l4.425,8.798l1.33,3.897l-1.953,3.881l-1.568,5.702l0.519,6.019l-7.298,8.305L317.549,400.5z"
          />
          {/* good */}
          <path
            data-province="Peravia"
            className={`st0 ${
              selectedProvince === "Peravia" ? "selected" : ""
            }`}
            d="M397.755,408.467l-4.372,0.124l-3.746,0.637l-2.487,1.395l-3.55-2.196l-3.779-0.801l-25.725,0.103
		l-4.319,1.369l-8.27,4.702l-4.695,1.025l-13.93-0.034l-3.231-1.292l-0.278-1.817l1.456-1.421l1.881-1.24l0.932-1.292l-0.573-2.291
		l-1.366-1.257l-1.415-0.81l-1.521-2.076l-1.22-0.795l11.193-2.152l7.298-8.305l-0.519-6.019l1.568-5.702l1.953-3.881l-1.33-3.897
		l5.433-8.059l9.832-2.897l5.043-3.499l4.321-4.694l9.718,4.239l7.936,7.705l6.383,3.011l-0.384,5.108l-5.204,3.011l-0.997,5.484
		l3.703,4.723l4.031,4.771l1.418,2.703l1.506,2.653l2.628,2.582l2.576,2.232l0.852,4.764L397.755,408.467z"
          />
          {/* good */}
          <path
            data-province="San Cristóbal"
            className={`st0 ${
              selectedProvince === "San Cristóbal" ? "selected" : ""
            }`}
            d="M433.209,369.644l-2.527,1.293l-4.491,4l-3.386,5.344l-1.333,6.36l-1.063,1.723l-4.621,2.447l-1.055,1.542
		l-0.818,2.335l-6.789,6.34l-4.883,5.641l-2.757,2.368l-1.227-0.586l-0.503,0.014l-1.247-4.086l-0.852-4.764l-2.576-2.232
		l-2.628-2.582l-1.506-2.653l-1.418-2.703l-4.031-4.771l-3.703-4.723l0.997-5.484l5.204-3.011l0.384-5.108l-6.383-3.011
		l-7.936-7.705l-9.718-4.239l-3.018-6.299l-1.454-6.876l2.192-7.491l-0.862-7.487l0.691-9.161l3.766-8.625l7.427,0.132l2.716-8.085
		l2.846-6.045l6.877-3.319l3.324,4.246l3.501,4.081l5.21,2.929l4.851,3.615l0.161,9.498l5.443,8.821l-1.75,4.719l-0.971,5.207
		l2.155,7.507l3.714,6.766l4.939,3.686l3.734,4.568l0.54,3.642l2.311,2.492l4.545-0.142l4.519,0.17l2.55,3.784l0.166,4.583
		L433.209,369.644z"
          />
          {/* good */}
          <path
            data-province="Santo Domingo"
            className={`st0 ${
              selectedProvince === "Santo Domingo" ? "selected" : ""
            }`}
            d="M437.852,367.738l-2.533,0.829l-2.11,1.078l-0.742-1.333l-0.166-4.583l-2.55-3.784l-4.519-0.17l-4.545,0.142
		l-2.311-2.492l-0.54-3.642l-3.734-4.568l-4.939-3.686l-3.714-6.766l-2.155-7.507l0.971-5.207l1.75-4.719l-5.443-8.821l-0.161-9.498
		l5.661,2.046l3.682,6.652l6.404,2.38l6.591,1.793l9.505,1.87l8.529-3.969l0.535-1.952l0.925-1.892l2.368-0.806l2.545-0.121
		l4.664,0.197l4.659,0.241l5.448,4.299l4.56,5.175l2.784,3.695l1.132,4.21l4.223,4.099l1.61,5.995l9.271-9.733l11.681-4.352
		l4.384-0.937l3.786-2.467l6.83-1.475l7.194,2.763l-2.509,2.768l-1.153,3.261l1.132,0.093l1.08-0.482l0.904,5.311l-0.374,5.315
		l-4.134,5.375l-3.236,5.555l7.962,8.528l11.801,2.377l-1.288,6.768l-0.693,5.57l-10.428-7.241l-4.45-2.38l-2.953-0.345
		l-1.276,1.983l0.106,2.38l0.36,2.388l-0.556,1.94l-1.799,0.595l-2.822-0.009l-2.593-0.5l-1.137-0.759l-3.378-5.777l-1.603-1.552
		l-1.497-0.483l-30.976-3.415l-5.611,0.267l0.314-6.305l-5.609-0.849l-3.771,1.035l-3.823-0.367l-2.472-3.905l-2.452-3.5
		l-5.381,3.035l-0.53,6.052l4.467,6.626L437.852,367.738z"
          />
          {/* good */}
          <path
            data-province="Distrito Nacional"
            className={`st0 ${
              selectedProvince === "Distrito Nacional" ? "selected" : ""
            }`}
            d="M458.263,358.254l-0.859,0.043l-3.247,0.966l-6.315,3.07l-5.202,3.535l-1.971,0.948l-2.816,0.921l1.153-7.662
		l-4.467-6.626l0.53-6.052l5.381-3.035l2.452,3.5l2.472,3.905l3.823,0.367l3.771-1.035l5.609,0.849L458.263,358.254z"
          />
          {/* good */}
          <path
            data-province="San Pedro de Macorís"
            className={`st0 ${
              selectedProvince === "San Pedro de Macorís" ? "selected" : ""
            }`}
            d="M617.861,374.213l-3.803-0.681l-8.809-2.991l-3.992-0.655l-3.468-1.138l-5.816-4.966l-4.441-1.138l-3.877,0.81
		l-3.943,1.345l-3.983,0.276l-4.032-2.431l-4.204,3.906l-26.117,2.017l-7.803,2.888l-4.122,0.103l-0.573-0.398l0.693-5.57
		l1.288-6.768l-11.801-2.377l-7.962-8.528l3.236-5.555l4.134-5.375l0.374-5.315l-0.904-5.311l-1.08,0.482l-1.132-0.093l1.153-3.261
		l2.509-2.768l11.463-20.206l11.899-12.557l-0.01,7.357l3.599,6.719l1.143,8.796l1.413,8.641l4.581,7l4.591,6.998l2.799,7.079
		l3.064,6.946l5.719-6.744l4.301-5.611l3.262-7.919l6.856-4.807l2.633,1.94l2.758,1.694l3.366-0.34l3.283,0.915l4.882,5.376
		l5.719,4.225l6.316-0.91l5.9,0.619l-1.034,4.893l-1.485,5.528l-3.226,5.346l-2.618,5.619l1.361,2.804l2.41,2.064l2.504,6.11
		L617.861,374.213z"
          />
          {/* good */}
          <path
            data-province="La Romana"
            className={`st0 ${
              selectedProvince === "La Romana" ? "selected" : ""
            }`}
            d="M654.907,372.57l-4.295-1.831l-8.409-1.198l-9.693,3.991l-14.649,0.681l-1.029-5.913l-2.504-6.11l-2.41-2.064
		l-1.361-2.804l2.618-5.619l3.226-5.346l10.087-6.284l7.708-9.814l5.064-9.806l8.783-3.437l3.334,7.625l3.896,7.065l5.064,4.603
		l4.228,5.282l0.218,6.612l-2.727,6.129l-3.558,9.632L654.907,372.57z"
          />
          {/* good */}
          <path
            data-province="Valverde"
            className={`st0 ${
              selectedProvince === "Valverde" ? "selected" : ""
            }`}
            d="M195.969,131.762l2.296-7.331l-1.241-7.773l1.262-4.549l4.882,0.496l-0.488-7.07l-0.576-7.061l1.74-6.4
		l2.223-6.258l6.866,2.461l6.498,3.201l4.472,3.415l5.433,1.429l8.155,2.582l6.783,5.45l7.573,3.828l8.466,1.125l-1.314,7.147
		l-2.924,6.506l-5.147,0.678l-4.991-3.545l0.358,4.289l1.61,3.836l2.909,1.411l2.986,1.852l-0.187,5.864l-1.397,6.138l4.586,3.471
		l-0.8,3.779l-8.84,0.055l-8.295-3.581l-1.792,2.27l-1.901,2.765l-2.904,0.386l-2.945-0.672l-5.848-2.479l-5.589-3.118
		l-14.803-2.672L195.969,131.762z"
          />
          {/* good */}
          <path
            data-province="Santiago Rodríguez"
            className={`st0 ${
              selectedProvince === "Santiago Rodríguez" ? "selected" : ""
            }`}
            d="M149.966,130.048l2.665-3.412l3.459,2.596l6.108,2.287l6.524-0.557l3.911-2.017l4.29-0.557l6.269,3.693
		l6.321,0.595l2.976-2.1l3.48,1.185l7.116,11.924l14.803,2.672l-2.649,3.636l-0.431,4.225l2.654,1.889l1.724,2.104l-7.703,2.616
		l-7.272,3.48l-3.797,0.204l-3.781-0.396l-3.096,2.065l-2.477,2.89l-3.667,3.055l-2.82,3.875l-0.67,6.445l-0.566,6.565l0.717,4.479
		l3.324,3.158l0.281,6.48l-1.065,6.687l-10.705-0.11l-8.7-4.339l-8.825-4.725l-8.97-4.516l-6.217-8.33l-8.331-5.376l-3.392-3.742
		l-1.995-4.602l9.827-4.393l2.431-13.546l1.532-4.483l-0.441-4.814l2.478-9.014L149.966,130.048z"
          />
          {/* good */}
          <path
            data-province="La Vega"
            className={`st0 ${
              selectedProvince === "La Vega" ? "selected" : ""
            }`}
            d="M310.61,167.506l4.789,3.6l6.347,0.628l4.508-1.773l4.124-0.892l4.041,10.205l5.656-1.112l2.976,7.209
		l4.031,6.746l5.62,5.468l8.217,0.572l6.508,10.076l10.014,6.631l0.379,0.572l0.384,0.566l-4.467,1.666l-4.924,2.567l-7.993,3.804
		l-5.667,6.59l-1.501-5.518l-4.815-2.864l-3.958,1.413l-2.166,3.958l-9.578,2.611l-4.181,7.836l-0.177,14.525l-12.024,9.901
		l-1.818,14.707l11.801,13.867l-2.883,9.424l-5.236,6.691l-4.238,3.915l-3.08,3.443l-8.892-0.115l-9.105,0.225l2.846-12.135
		l-7.625-9.292l-12.268-6.271l-8.57-11.673l-2.265-19.589l-10.554-7.222l-1.704-4.565l-3.324-3.401l0.883-4.725l-1.48-4.523
		l5.859-2.907l6.612-2.88l12.512-6.069l10.539-8.016l2.446-5.725l4.327-0.242l5.277,1.034l-0.592-6.127l1.449-7.245l-3.168-5.579
		l-6.145-1.711l-4.862-3.737l1.434-4.337l4.976-1.398l10.097-5.345L310.61,167.506z"
          />
          {/* good */}
          <path
            data-province="Salcedo"
            className={`st0 ${
              selectedProvince === "Salcedo" ? "selected" : ""
            }`}
            d="M340.076,178.163l4.342-12.469l0.764-11.994l-0.068-14.219l6.705-8.349l3.636,1.367l3.329,1.631l2.374,5.692
		l4.747-3.24l4.124-6.04l6.025-3.489l5.828,5.148l4.576,7.516l-1.189,5.432l-1.621,6.831l-5.724,4.885l-8.451,4.119l-3.916,8.997
		l-1.641,9.974l-2.815,9.14l-0.182,9.061l-8.217-0.572l-5.62-5.468l-4.031-6.746L340.076,178.163z"
          />
          {/* good */}
          <path
            data-province="Duarte"
            className={`st0 ${selectedProvince === "Duarte" ? "selected" : ""}`}
            d="M386.458,139.719l2.171-0.028l2.14,0.413l7.131,4.347l6.82,4.649l2.368,6.753l0.582,7.308l2.488,8.98
		l6.986,5.125l6.108,0.787l2.737,4.948l9.78,8.303l13.806,3.499l13.504,6.375l13.925,2.7l9.817-4.697l12.164,2.904l0.01,5.758
		l-5.334,3.58l-3.163,2.117l-2.716,3.398l-0.722,6.657l-3.953,3.787l-13.177-0.511l-10.772,1.281l-0.415,2.374l-0.26,3.292
		l-3.044,4.039l-5.407-0.192l1.844-5.869l0.68-5.666l-4.28-2.743l-4.981-1.556l-6.492-0.451l-6.186-0.071l-4.747-1.484l-4.529-2.117
		l-5.23-2.386l-5.703-0.434l-8.804-1.028l-8.897,0.154l-4.14,0.742l-4.217-0.775l-3.89-1.072l-3.734,1.232l0.628-0.176l0.088,0.902
		l-10.014-6.631l-6.508-10.076l0.182-9.061l2.815-9.14l1.641-9.974l3.916-8.997l8.451-4.119l5.724-4.885l1.621-6.831
		L386.458,139.719z"
          />
          {/* good */}
          <path
            data-province="Santiago"
            className={`st0 ${
              selectedProvince === "Santiago" ? "selected" : ""
            }`}
            d="M323.917,135.746l-0.852,4.315l-3.002,3.388l-2.742,4.561l-1.153,5.327l0.571,4.841l-0.052,4.703l-3.096,2.384
		l-2.981,2.241l-10.606,3.463l-10.097,5.345l-4.976,1.398l-1.434,4.337l4.862,3.737l6.145,1.711l3.168,5.579l-1.449,7.245
		l0.592,6.127l-5.277-1.034l-4.327,0.242l-2.446,5.725l-10.539,8.016l-12.512,6.069l-6.612,2.88l-5.859,2.907l1.48,4.523
		l-0.883,4.725l-5.21-1.654l-5.215-1.654l-4.908,1.099l-4.612,2.275l-9.069-2.835l-8.954-5.77l-3.823-3.451l-0.613-5.276
		l-1.719-3.155l-3.35-1.737l-8.217-4.052l-7.557-4.476l1.065-6.687l-0.281-6.48l-3.324-3.158l-0.717-4.479l0.566-6.565l0.67-6.445
		l2.82-3.875l3.667-3.055l2.477-2.89l3.096-2.065l3.781,0.396l3.797-0.204l7.272-3.48l7.703-2.616l-1.724-2.104l-2.654-1.889
		l0.431-4.225l2.649-3.636l5.589,3.118l5.848,2.479l2.945,0.672l2.904-0.386l1.901-2.765l1.792-2.27l8.295,3.581l8.84-0.055
		l0.8-3.779l-4.586-3.471l1.397-6.138l0.187-5.864l-2.986-1.852l-2.909-1.411l-1.61-3.836l-0.358-4.289l4.991,3.545l5.147-0.678
		l2.924-6.506l1.314-7.147l6.264,1.472l5.573,1.61l4.529,3.876l4.472,3.992l8.986-0.413l0.727-12.534l10.731,4.776l4.176,10.162
		l5.906,9.596L323.917,135.746z"
          />
          {/* good */}
          <path
            data-province="Bahoruco"
            className={`st0 ${
              selectedProvince === "Bahoruco" ? "selected" : ""
            }`}
            d="M192.639,386.4l-7.23,0.503l-5.599-4.635l-5.22-9.808l-9.619-0.602l-7.703,3.027l-7.786-1.987l-7.272-4.483
		l-7.708-3.493l-20.631-8.104l-5.641-18.509l2.254-4.444l1.361-4.784l-0.322-2.697l0.966-2.346l6.435-2.061l6.529-1.798l9.464,3.503
		l9.941,2.006l9.027,4.587l9.786,0.756l4.332-2.789l4.638-1.579l5.552,0.614l5.511-0.965l9.552-2.867l7.313,4.127l9.547,9.678
		l12.549,4.361l6.337,1.156l5.345,3.588l-0.068,3.758l-4.249,1.61l-3.953-5.056l-2.685,5.51l-3.142,5.208l-5.189,3.817l-6.165,2.256
		l-3.236,2.644l-2.285,3.498l-3.251,2.239l-3.366,2.124l-3.522,5.566L192.639,386.4z"
          />
          {/* good */}
          <path
            data-province="San Juan"
            className={`st0 ${
              selectedProvince === "San Juan" ? "selected" : ""
            }`}
            d="M125.455,320.179l2.862-6.749l-2.322-6.032l-5.433-1.283l-3.729-3.992l0.01-5.216l-1.444-4.877l-4.082-3.577
		l-4.539-2.963l2.41-10.345l-3.485-4.441l1.688-11.48l4.986-10.611l4.436-4.037l5.682-0.577l6.222-1.829l3.148-6.731l2.358-9.068
		l4.067-7.668l6.82,1.094l6.305,3.854l7.656-0.434l6.316-4.854l0.405-6.581l1.397-6.417l8.7,4.339l10.705,0.11l7.557,4.476
		l8.217,4.052l3.35,1.737l1.719,3.155l0.613,5.276l3.823,3.451l8.954,5.77l9.069,2.835l4.612-2.275l4.908-1.099l5.215,1.654
		l5.21,1.654l3.324,3.401l1.704,4.565l-1.683,4.553l-4.207,2.087l-0.805,4.119l-2.831,2.718l-4.934,3.464l-2.441,5.325l-1.34,10.527
		l-0.104,10.935l-1.569,3.61l-2.748,2.65l-2.924-1.207l-1.693-3.67l-6.539,2.057l1.272,7.992l-0.239,2.693l-2.098,2.873l1.335,2.32
		l0.457,2.73l-3.797,1.798l-3.288,1.255l-5.293,7.899l-8.83,2.379l-7.313-4.127l-9.552,2.867l-5.511,0.965l-5.552-0.614
		l-4.638,1.579l-4.332,2.789l-9.786-0.756l-9.027-4.587l-9.941-2.006L125.455,320.179z"
          />
          {/* good */}
          <path
            data-province="Monseñor Nouel"
            className={`st0 ${
              selectedProvince === "Monseñor Nouel" ? "selected" : ""
            }`}
            d="M355.154,230.631l2.296,5.028l1.823,4.94l0.945,5.746l5.09,2.466l1.839,2.362l0.618,3.125l3.158,4.196
		l4.212,3.091l8.643,6.188l5.241,9.101l-4.134,4.621l-1.361,6.645l-6.877,3.319l-2.846,6.045l-2.716,8.085l-7.427-0.132
		l-5.147-3.609l-5.36-2.172l-4.862,1.744l-5.023,0.543l-8.087-5.968l-8.44-4.932l-11.801-13.867l1.818-14.707l12.024-9.901
		l0.177-14.525l4.181-7.836l9.578-2.611l2.166-3.958l3.958-1.413l4.815,2.864L355.154,230.631z"
          />
          {/* good */}
          <path
            className={`st0 ${
              selectedProvince === "Sánchez Ramírez" ? "selected" : ""
            }`}
            data-province="Sánchez Ramírez"
            d="M389.019,276.874l-5.241-9.101l-8.643-6.188l-4.212-3.091l-3.158-4.196l-0.618-3.125l-1.839-2.362l-5.09-2.466
		l-0.945-5.746l-1.823-4.94l-2.296-5.028l5.667-6.59l7.993-3.804l4.924-2.567l4.467-1.666l-0.384-0.566l-0.379-0.572l-0.088-0.902
		l-0.628,0.176l3.734-1.232l3.89,1.072l4.217,0.775l4.14-0.742l8.897-0.154l8.804,1.028l5.703,0.434l5.23,2.386l4.529,2.117
		l4.747,1.484l6.186,0.071l6.492,0.451l4.981,1.556l4.28,2.743l-0.68,5.666l-1.844,5.869l-3.013,13.668l-3.464,13.811l-5.63,4.375
		l-6.539-3.223l-4.02-0.741l-2.467,3.722l-3.579-0.577l-4.212-0.845l-5.298,1.307l-3.849,3.431l-8.518,2.064L389.019,276.874z"
          />
          {/* good */}
          <path
            className={`st0 ${
              selectedProvince === "San José de Ocoa" ? "selected" : ""
            }`}
            data-province="San José de Ocoa"
            d="M326.738,291.064l8.44,4.932l8.087,5.968l5.023-0.543l4.862-1.744l5.36,2.172l5.147,3.609l-3.766,8.625
		l-0.691,9.161l0.862,7.487l-2.192,7.491l1.454,6.876l3.018,6.299l-4.321,4.694l-5.043,3.499l-9.832,2.897l-5.433,8.059
		l-4.425-8.798l-4.176-7.207l-6.487-3.33l-6.69-4.393l-4.664-1.66l-3.49-3.369l-1.522-3.15l-2.971-1.825l-4.207-10.736l-5.776-11.43
		l9.105-0.225l8.892,0.115l3.08-3.443l4.238-3.915l5.236-6.691L326.738,291.064z"
          />
          {/* good */}
          <path
            className={`st0 ${
              selectedProvince === "Monte Plata" ? "selected" : ""
            }`}
            data-province="Monte Plata"
            d="M383.524,288.14l1.361-6.645l4.134-4.621l10.424-2.217l8.518-2.064l3.849-3.431l5.298-1.307l4.212,0.845
		l3.579,0.577l2.467-3.722l4.02,0.741l6.539,3.223l5.63-4.375l3.464-13.811l3.013-13.668l5.407,0.192l3.044-4.039l0.26-3.292
		l0.415-2.374l10.772-1.281l13.177,0.511l5.718,4.408l5.776,4.325l6.368,3.632l5.848,4.373l9.282,8.327l11.448,5.816l10.092,5.019
		l9.832,5.413l7.287,0.955l3.714,3.749l-3.828,2.657l-4.129,2.563l-4.192,4.39l-3.579,4.949l-11.899,12.557l-11.463,20.206
		l-7.194-2.763l-6.83,1.475l-3.786,2.467l-4.384,0.937l-11.681,4.352l-9.271,9.733l-1.61-5.995l-4.223-4.099l-1.132-4.21
		l-2.784-3.695l-4.56-5.175l-5.448-4.299l-4.659-0.241l-4.664-0.197l-2.545,0.121l-2.368,0.806l-0.925,1.892l-0.535,1.952
		l-8.529,3.969l-9.505-1.87l-6.591-1.793l-6.404-2.38l-3.682-6.652l-5.661-2.046l-4.851-3.615l-5.21-2.929l-3.501-4.081
		L383.524,288.14z"
          />
          {/* good */}
          <path
            className={`st0 ${
              selectedProvince === "Dajabón" ? "selected" : ""
            }`}
            onClick={handleProvinceClick}
            data-province="Dajabón"
            d="M82.329,186.494l-0.847-0.868l-3.584-5.063l-0.997-4.249l1.319-1.343l5.423-3.105l1.911-1.508l2.545-6.497
            l1.112-1.217l2.296-4.895l0.135-9.518l-2.4-16.673l-5.62-13.356l-0.925-4.847l0.33-5.599l2.267,0.581l19.509,8.316l21.15-2.625
            l5.054,1.445l3.028,5.552l7.656,5.099l8.274,3.925l-4.68,7.776l-2.478,9.014l0.441,4.814l-1.532,4.483l-2.431,13.546l-9.827,4.393
            l1.995,4.602l3.392,3.742l-3.428,3.593l-4.119,2.509l-4.789-1.612l-4.913-1.337l-2.467,2.955l-1.491,3.89l-4.254,1.579
            l-4.057,2.459l-3.342,3.196l-13.024-6.354L82.329,186.494z"
          />
        </g>
      </svg>


      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          display: selectedMunicipality ? "block" : "none",
        }}
      >
          <div
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          display: selectedMunicipality ? "block" : "none",
        }}
      >
        <h3>Archivos disponibles para descargar</h3>
        {documents.length > 0 ? (
          documents.map((doc) => (
            <div
              key={doc._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <FaFilePdf size={24} color="green" />
                <span>{doc.filename}</span>
              </div>
              <button
                onClick={() => downloadFile(doc.filename, doc.path)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "green",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Descargar
              </button>
            </div>
          ))
        ) : (
          <p>No hay archivos disponibles para este municipio.</p>
        )}
      </div>
    </div>

    {filesData && filesData.length > 0 && (
      <MacroIndicatorFiles filesData={filesData} />
    )}

      {/* <div
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          display: selectedProvince ? "block" : "none",
        }}
      >
        <h3>Información de la Provincia</h3>
        <p>
          <strong>Provincia:</strong> {selectedProvince || "Ninguna"}
        </p>
        <p>{provinceInfo}</p>
      </div> */}


      <style>
        {`
          .st0 {
            fill: #ccc;
            stroke: #333;
            stroke-width: 1px;
            transition: fill 0.3s ease;
            cursor: pointer;
          }

          .st0:hover {
            fill: #aaa;
          }

          .st0.selected {
            fill: #2a6d2b;
            stroke: #000;
          }
        `}
      </style>
    </div>
  );
};