import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import EscalaVidaInterior from './escalas-vida-interior.jsx'
import Instructivo from './instructivo-vida-interior.jsx'

function Inicio() {
  return (
    <div style={{
      fontFamily: "'Georgia', serif",
      background: "#FAF6F0",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      gap: 0,
    }}>
      <div style={{
        textAlign: "center",
        marginBottom: 48,
      }}>
        <div style={{ fontFamily: "sans-serif", fontSize: 11, letterSpacing: 3, color: "#C9A96E", textTransform: "uppercase", marginBottom: 8 }}>
          A imagen y semejanza · Proyecto Génesis
        </div>
        <h1 style={{ fontSize: 28, fontWeight: "bold", color: "#003366", margin: "0 0 10px" }}>
          Herramientas de Vida Interior
        </h1>
        <p style={{ fontFamily: "sans-serif", fontSize: 14, color: "#6B7280", margin: 0 }}>
          Elige la herramienta con la que deseas trabajar hoy
        </p>
      </div>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center", maxWidth: 680 }}>
        <Link to="/escalas" style={{ textDecoration: "none", flex: "1 1 280px", maxWidth: 320 }}>
          <div style={{
            background: "#003366",
            borderRadius: 12,
            padding: "28px 24px",
            color: "#FFFFFF",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div style={{ fontSize: 28, marginBottom: 12 }}>◎</div>
            <div style={{ fontFamily: "sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>
              Escalas de la Vida Interior
            </div>
            <div style={{ fontFamily: "sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
              Cinco indicadores de crecimiento con niveles de discernimiento para el disponible
            </div>
          </div>
        </Link>

        <Link to="/instructivo" style={{ textDecoration: "none", flex: "1 1 280px", maxWidth: 320 }}>
          <div style={{
            background: "#1B4332",
            borderRadius: 12,
            padding: "28px 24px",
            color: "#FFFFFF",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div style={{ fontSize: 28, marginBottom: 12 }}>⊕</div>
            <div style={{ fontFamily: "sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>
              Guía de uso y territorios
            </div>
            <div style={{ fontFamily: "sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
              Instructivo hospitalario y visualización de cuerpo, relaciones y recursos
            </div>
          </div>
        </Link>
      </div>

      <div style={{ marginTop: 48, fontFamily: "sans-serif", fontSize: 12, color: "#999", textAlign: "center" }}>
        <em>"El disponible no es quien más da, sino quien da desde un lugar más profundo."</em>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/escalas" element={<EscalaVidaInterior />} />
      <Route path="/instructivo" element={<Instructivo />} />
    </Routes>
  </BrowserRouter>
)
