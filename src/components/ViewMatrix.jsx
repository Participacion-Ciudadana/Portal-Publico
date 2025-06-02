import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as XLSX from "xlsx";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000";

const getColor = (value) => {
  if (typeof value !== "number") return null;
  if (value >= 85) return "#2ecc71"; // verde fuerte
  if (value >= 70) return "#27ae60"; // verde medio
  if (value >= 60) return "#f1c40f"; // amarillo
  return "#e74c3c"; // rojo
};

const CellWithColor = ({ value }) => {
  const bg = getColor(value);
  return (
    <td
      style={{
        backgroundColor: bg || "transparent",
        color: bg ? "#fff" : "#2c3e50",
        fontWeight: bg ? "bold" : "normal",
        textAlign: "center",
        padding: "12px",
        border: "1px solid #ecf0f1",
        fontSize: "14px",
      }}
    >
      {value}
    </td>
  );
};

const ViewMatrix = () => {
  const { filename, path } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatrix = async () => {
      try {
        const res = await fetch(
          `${BACKEND_URL}/uploads/raw-buffer?filename=${encodeURIComponent(filename)}&origen_path=${encodeURIComponent(path)}`
        );
        if (!res.ok) throw new Error("Error al obtener el archivo");

        const blob = await res.blob();
        const arrayBuffer = await blob.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "" });

        setData(jsonData);
      } catch (e) {
        console.error(e);
        alert("Error al cargar el archivo.");
      } finally {
        setLoading(false);
      }
    };

    fetchMatrix();
  }, [filename, path]);

  const columns = data.length ? Object.keys(data[0]) : [];

  return (
    <div style={{ padding: "30px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "20px", color: "#34495e" }}>
        📊 Visualización de la matriz: <span style={{ color: "#3498db" }}>{filename}</span>
      </h2>

      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <div className="spinner" />
          <p style={{ color: "#666", marginTop: "10px" }}>Cargando matriz...</p>
        </div>
      ) : !data.length ? (
        <p style={{ color: "#e74c3c" }}>No hay datos para mostrar.</p>
      ) : (
        <div style={{ overflowX: "auto", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", borderRadius: "10px", overflow: "hidden" }}>
            <thead>
              <tr style={{ backgroundColor: "#ecf0f1" }}>
                {columns.map((col, i) => (
                  <th
                    key={i}
                    style={{
                      padding: "12px",
                      borderBottom: "2px solid #bdc3c7",
                      fontSize: "13px",
                      fontWeight: "bold",
                      color: "#2c3e50",
                      textAlign: "center",
                    }}
                  >
                    {col.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  {columns.map((col, j) => (
                    <CellWithColor key={j} value={row[col]} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <style>{`
        .spinner {
          margin: 0 auto;
          width: 40px;
          height: 40px;
          border: 5px solid #ccc;
          border-top: 5px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 600px) {
          h2 {
            font-size: 18px;
          }

          table th, table td {
            padding: 8px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default ViewMatrix;
