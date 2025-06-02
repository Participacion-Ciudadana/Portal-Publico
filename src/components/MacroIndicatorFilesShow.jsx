import React, { useEffect, useState } from "react";
import MacroIndicatorFiles from "./MacroIndicatorFiles"; // Ajusta si está en otro directorio

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000";

const MacroIndicatorFilesShow = () => {
  const [filesData, setFilesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMacroIndicators = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/uploads/macro-indicator`);
        const data = await response.json();

        const parsed = Array.isArray(data)
          ? data
          : Array.isArray(data.files)
          ? data.files
          : Array.isArray(data.data)
          ? data.data
          : [];

        setFilesData(parsed);
      } catch (error) {
        console.error("Error al obtener los macroindicadores:", error);
        setFilesData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMacroIndicators();
  }, []);

  return (
    <div>
      {loading ? (
        <p style={{ padding: "20px" }}>Cargando archivos...</p>
      ) : (
        <MacroIndicatorFiles filesData={filesData} />
      )}
    </div>
  );
};

export default MacroIndicatorFilesShow;
