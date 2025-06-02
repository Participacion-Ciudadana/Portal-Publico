import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";

// Devuelve un color según el valor numérico
const getColor = (value) => {
  if (typeof value !== "number") return null;
  if (value >= 85) return "#00b050";     // verde fuerte
  if (value >= 70) return "#92d050";     // verde claro
  if (value >= 60) return "#ffc000";     // amarillo
  return "#ff6f00";                      // naranja
};

// Celdas con color de fondo para valores numéricos
const CellWithColor = ({ value }) => {
  const bg = getColor(value);
  return (
    <TableCell
      style={{
        backgroundColor: bg || "transparent",
        color: bg ? "#fff" : "inherit",
        fontWeight: bg ? "bold" : "normal",
        textAlign: "center",
      }}
    >
      {value}
    </TableCell>
  );
};

const MatrixModal = ({ open, onClose, data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) return null;

  const columns = Object.keys(data[0]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>
        Visualización de Datos
        <IconButton onClick={onClose} style={{ float: "right" }}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#f0f0f0" }}>
              {columns.map((col, i) => (
                <TableCell key={i}>
                  <strong>{col.toUpperCase()}</strong>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <CellWithColor key={colIndex} value={row[col]} />
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export default MatrixModal;
