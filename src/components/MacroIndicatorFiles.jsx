import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000";

const getOrigenPath = (fullPath, filename) => {
  return fullPath.replace(new RegExp(`/?${filename}$`), "");
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

const MacroIndicatorFiles = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFiles = async () => {
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

        setFiles(parsed);
      } catch (error) {
        console.error("Error al obtener archivos:", error);
        setFiles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Archivos de Macroindicadores</h2>

      {loading ? (
        <p>Cargando archivos...</p>
      ) : files.length === 0 ? (
        <p>No hay archivos disponibles.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f0f0f0" }}>
                <th style={thStyle}>Nombre del Archivo</th>
                <th style={thStyle}>Tipo</th>
                <th style={thStyle}>Fecha de Subida</th>
                <th style={thStyle}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => {
                const origenPath = getOrigenPath(file.path, file.filename);
                return (
                  <tr key={index}>
                    <td style={tdStyle}>{file.filename}</td>
                    <td style={tdStyle}>{file.type || "Macroindicador"}</td>
                    <td style={tdStyle}>
                      {file.uploadedAt
                        ? new Date(file.uploadedAt).toLocaleString()
                        : "No disponible"}
                    </td>
                    <td style={{ ...tdStyle, textAlign: "center" }}>
                      <button
                        onClick={() =>
                          navigate(`/ver-matriz/${encodeURIComponent(file.filename)}/${encodeURIComponent(origenPath)}`)
                        }
                        style={buttonStyle}
                      >
                        Ver
                      </button>
                      <button
                        onClick={() => downloadFile(file.filename, origenPath)}
                        style={{ ...buttonStyle, backgroundColor: "#28a745" }}
                      >
                        Descargar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const thStyle = {
  padding: "8px",
  border: "1px solid #ccc",
  textAlign: "left",
};

const tdStyle = {
  padding: "8px",
  border: "1px solid #ddd",
};

const buttonStyle = {
  margin: "0 4px",
  padding: "6px 12px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default MacroIndicatorFiles;
