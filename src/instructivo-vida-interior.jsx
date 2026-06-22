import { useState } from "react";

// ── paleta ──────────────────────────────────────────────
const P = {
  azulProfundo: "#003366",
  azulMedio:    "#1A3A5C",
  dorado:       "#C9A96E",
  doradoClaro:  "#F0E4C8",
  crema:        "#FAF6F0",
  cremaOscura:  "#F0EBE3",
  gris:         "#6B7280",
  grisClaro:    "#E8E4DE",
  texto:        "#1A1A1A",
  blanco:       "#FFFFFF",

  arraigo:      "#1B4332",
  silencio:     "#1A3A5C",
  afectos:      "#6B2737",
  memoria:      "#4A3728",
  dispo:        "#1B4D3E",

  cuerpo:       "#8B4513",
  relaciones:   "#4A1B6D",
  recursos:     "#1B4D3E",
};

// ── datos ────────────────────────────────────────────────
const PASOS = [
  {
    num: 1,
    titulo: "Encuentra un lugar tranquilo",
    icono: "◎",
    texto: "No necesitas ninguna preparación especial. Solo un momento en que puedas estar contigo mismo sin interrupciones: cinco minutos son suficientes para comenzar.",
    accion: "Cierra los ojos un instante. Respira. Nota cómo está tu cuerpo ahora mismo.",
  },
  {
    num: 2,
    titulo: "Lee cada indicador sin prisa",
    icono: "◈",
    texto: "La herramienta tiene cinco indicadores. Para cada uno encontrarás una escala de cinco niveles con descripciones concretas. No hay nivel bueno ni malo: hay el que es verdadero para ti hoy.",
    accion: "Lee el indicador completo antes de elegir. Deja que resuene, no que juzgue.",
  },
  {
    num: 3,
    titulo: "Elige el nivel que te describe, no el que te gustaría",
    icono: "⊕",
    texto: "La utilidad de este instrumento depende de tu honestidad contigo mismo. El nivel que eliges no te define para siempre: te muestra desde dónde puedes crecer.",
    accion: "Pregúntate: ¿cuál de estas descripciones reconozco en mi vida cotidiana, no en mis mejores días?",
  },
  {
    num: 4,
    titulo: "Observa tu perfil completo",
    icono: "⊗",
    texto: "Cuando hayas completado los cinco indicadores, ve a 'Mi perfil'. Verás el mapa de tu vida interior: tus fortalezas reales y el área que más posibilidades tiene de crecer.",
    accion: "No te compares con ningún estándar externo. Compárate solo contigo mismo de ayer.",
  },
  {
    num: 5,
    titulo: "Visualiza tus tres territorios",
    icono: "◉",
    texto: "Al final de este instructivo encontrarás una visualización de cómo tu vida interior irradia hacia tu cuerpo, tus relaciones y tus recursos. Úsala como brújula, no como inventario.",
    accion: "Anota una palabra que quieras llevar de regreso a cada territorio.",
  },
];

const INDICADORES_BREVE = [
  { clave: "arraigo",  nombre: "Arraigo",                 icono: "⊕", color: P.arraigo,  pregunta: "¿Sé desde dónde hablo?" },
  { clave: "silencio", nombre: "Silencio fértil",          icono: "◎", color: P.silencio, pregunta: "¿Puedo estar conmigo mismo?" },
  { clave: "afectos",  nombre: "Integración afectiva",     icono: "◈", color: P.afectos,  pregunta: "¿Mis emociones me informan o me gobiernan?" },
  { clave: "memoria",  nombre: "Memoria agradecida",       icono: "⊗", color: P.memoria,  pregunta: "¿Puedo leer mi historia como don recibido?" },
  { clave: "dispo",    nombre: "Disponibilidad sin vaciamiento", icono: "◉", color: P.dispo, pregunta: "¿Doy desde abundancia o desde deuda?" },
];

// Cómo cada indicador ilumina cada territorio
const MAPA_TERRITORIOS = {
  cuerpo: {
    nombre: "Mi cuerpo",
    subtitulo: "Territorio personal de misión",
    color: P.cuerpo,
    colorClaro: "#F5E6DA",
    icono: "⌂",
    descripcion: "El cuerpo no es el envoltorio del disponible: es el primer lugar donde la vida interior se hace visible. El cansancio, la postura, el ritmo del sueño y la alimentación hablan de cómo está el interior.",
    indicadores: [
      { clave: "arraigo",  texto: "Un arraigo sólido permite habitar el cuerpo sin vergüenza ni exigencia desmedida. Sabes que eres más que lo que tu cuerpo produce o aparenta." },
      { clave: "silencio", texto: "El silencio fértil se expresa en ritmos corporales: el descanso que se permite, las pausas que se defienden, la atención que se da a las señales del cuerpo." },
      { clave: "afectos",  texto: "Las emociones viven en el cuerpo antes de llegar a la mente. Un disponible con afectos integrados reconoce la tensión, el nudo en el estómago, el alivio en los hombros." },
      { clave: "memoria",  texto: "La memoria agradecida sana al cuerpo: reduce la carga de la vergüenza acumulada y permite recibir el cuidado propio como derecho, no como lujo." },
      { clave: "dispo",    texto: "Dar desde abundancia incluye cuidar el cuerpo: el disponible que se vacía sin reponer termina dando desde la escasez, y el cuerpo lo avisa primero." },
    ],
    preguntaVisualizacion: "¿Qué parte de tu cuerpo sientes más viva hoy? ¿Cuál pide más atención?",
    invitatoria: "Esta semana: elige una práctica corporal que nazca del deseo y no de la obligación.",
  },
  relaciones: {
    nombre: "Mis relaciones",
    subtitulo: "Círculos de presencia y pertenencia",
    color: P.relaciones,
    colorClaro: "#EDE4F5",
    icono: "◎",
    descripcion: "Las relaciones son el espejo más honesto de la vida interior. No solo elegimos a quién nos acercamos: la calidad de nuestra presencia en cada relación revela desde dónde vivimos.",
    indicadores: [
      { clave: "arraigo",  texto: "Una identidad estable permite relacionarse sin necesitar al otro para completarse. Hay presencia sin fusión, cercanía sin dependencia." },
      { clave: "silencio", texto: "El silencio fértil hace posible escuchar de verdad. El disponible que habita su propio centro puede darle al otro el espacio de ser, sin apresurarse a llenar el vacío." },
      { clave: "afectos",  texto: "Los afectos integrados permiten la empatía sin contagio emocional: acompañar el dolor del otro sin confundirlo con el propio, celebrar sin envidia, corregir sin crueldad." },
      { clave: "memoria",  texto: "La memoria agradecida rompe los ciclos de resentimiento. Quien puede leer su propia historia con compasión puede extender esa lectura a la historia de los demás." },
      { clave: "dispo",    texto: "La disponibilidad sin vaciamiento produce presencia sostenible. Los vínculos sanos no se construyen con entrega total en ráfagas: se construyen con presencia constante y limitada honestamente." },
    ],
    preguntaVisualizacion: "¿En cuál de tus relaciones estás más plenamente presente? ¿En cuál sientes que te pierdes?",
    invitatoria: "Esta semana: elige una relación en la que quieras estar más presente. Solo una.",
  },
  recursos: {
    nombre: "Mis recursos",
    subtitulo: "Tiempo, energía y posibilidades",
    color: P.recursos,
    colorClaro: "#D4EDE7",
    icono: "⊗",
    descripcion: "Los recursos del disponible no son solo económicos. Son el tiempo que administra, la energía que distribuye, las capacidades que cultiva y los dones que pone al servicio. La vida interior determina desde dónde se gestiona todo eso.",
    indicadores: [
      { clave: "arraigo",  texto: "Un disponible con arraigo no define su valor por sus recursos. Puede tener poco y dar mucho, o tener mucho y no sentirse obligado a darlo todo. La identidad precede a la productividad." },
      { clave: "silencio", texto: "El silencio fértil es el recurso que multiplica todos los demás. Sin pausa no hay discernimiento, y sin discernimiento los recursos se dispersan en activismo sin fruto." },
      { clave: "afectos",  texto: "Los afectos integrados permiten decir que no sin culpa y sí sin resentimiento. La gestión del tiempo y la energía cambia radicalmente cuando no está gobernada por el miedo ni la complacencia." },
      { clave: "memoria",  texto: "La memoria agradecida permite reconocer lo que ya se tiene antes de calcular lo que falta. La gratitud no es ingenuidad: es el punto de partida más honesto para administrar lo recibido." },
      { clave: "dispo",    texto: "Dar desde abundancia requiere recibir primero. El disponible que gestiona bien sus recursos sabe cuándo recargar, cuándo invertir y cuándo soltar. El vaciamiento no es virtud: es descuido del campo propio." },
    ],
    preguntaVisualizacion: "¿Qué recurso estás administrando desde la abundancia hoy? ¿Cuál desde la escasez?",
    invitatoria: "Esta semana: identifica un recurso que estás usando desde el miedo y ponlo al servicio desde la libertad.",
  },
};

const TERRITORIO_KEYS = ["cuerpo", "relaciones", "recursos"];

// ── componente principal ──────────────────────────────────
export default function Instructivo() {
  const [pasoActivo, setPasoActivo] = useState(null);
  const [territorioActivo, setTerritorioActivo] = useState(null);
  const [indicadorTerritorio, setIndicadorTerritorio] = useState(null);
  const [seccion, setSeccion] = useState("bienvenida"); // bienvenida | pasos | mapa

  return (
    <div style={{
      fontFamily: "'Georgia', serif",
      background: P.crema,
      minHeight: "100vh",
      color: P.texto,
    }}>

      {/* ── HEADER ── */}
      <div style={{
        background: `linear-gradient(160deg, ${P.azulProfundo} 0%, ${P.azulMedio} 100%)`,
        padding: "32px 24px 28px",
      }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{
            fontFamily: "sans-serif", fontSize: 10, letterSpacing: 3,
            color: P.dorado, textTransform: "uppercase", marginBottom: 6,
          }}>
            A imagen y semejanza · Proyecto Génesis
          </div>
          <h1 style={{
            margin: "0 0 6px", fontSize: 22, fontWeight: "bold",
            color: P.blanco, lineHeight: 1.3,
          }}>
            Guía de uso para el instrumento<br />
            <span style={{ color: P.dorado }}>Escalas de la Vida Interior</span>
          </h1>
          <p style={{
            fontFamily: "sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)",
            margin: "0 0 20px", lineHeight: 1.6,
          }}>
            Un lugar seguro para mirar hacia adentro y descubrir desde dónde vives.
          </p>

          {/* Nav */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { id: "bienvenida", label: "Bienvenida" },
              { id: "pasos",     label: "Cómo usarla" },
              { id: "mapa",      label: "Mis territorios" },
            ].map(({ id, label }) => (
              <button key={id} onClick={() => setSeccion(id)} style={{
                padding: "7px 16px", borderRadius: 20, border: "none", cursor: "pointer",
                fontFamily: "sans-serif", fontSize: 12, fontWeight: 600,
                background: seccion === id ? P.dorado : "rgba(255,255,255,0.12)",
                color: seccion === id ? P.azulProfundo : P.blanco,
                transition: "all 0.2s",
              }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 16px 60px" }}>

        {/* ══════════════════════════════════════════
            SECCIÓN: BIENVENIDA
        ══════════════════════════════════════════ */}
        {seccion === "bienvenida" && (
          <div>
            {/* Carta de bienvenida */}
            <div style={{
              background: P.blanco, borderRadius: 12, padding: "28px 24px",
              margin: "24px 0 16px",
              borderTop: `4px solid ${P.dorado}`,
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}>
              <div style={{
                fontFamily: "sans-serif", fontSize: 10, letterSpacing: 2,
                color: P.dorado, textTransform: "uppercase", marginBottom: 14,
              }}>
                Antes de comenzar
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.85, margin: "0 0 14px", color: "#222" }}>
                Este instrumento no es un test. No tiene respuestas correctas ni incorrectas.
                No mide lo que deberías ser: te invita a reconocer lo que eres hoy.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.85, margin: "0 0 14px", color: "#222" }}>
                La vida interior del disponible es el suelo desde el que todo crece: la forma
                en que habitas tu cuerpo, la calidad de tu presencia en las relaciones y la manera
                en que administras tu tiempo y energía. Todo eso tiene raíces. Este instrumento
                te ayuda a verlas.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.85, margin: 0, color: "#222" }}>
                Lo que encuentres aquí no te define para siempre. Te muestra el punto desde el
                que puedes avanzar. Y ese punto, sea cual sea, es un buen lugar para estar.
              </p>
            </div>

            {/* Principios de uso */}
            <div style={{ margin: "16px 0" }}>
              <div style={{
                fontFamily: "sans-serif", fontSize: 10, letterSpacing: 2,
                color: P.gris, textTransform: "uppercase", marginBottom: 12,
              }}>
                Tres principios para usar esta herramienta
              </div>
              {[
                {
                  titulo: "Con honestidad, no con perfeccionismo",
                  texto: "El nivel que eliges no es el que aspiras a tener: es el que reconoces en tus respuestas cotidianas, en tus días ordinarios, no en tus mejores momentos.",
                  icono: "◎",
                  color: P.silencio,
                },
                {
                  titulo: "Con curiosidad, no con juicio",
                  texto: "Lo que descubras no es una sentencia. Es información. El crecimiento en la vida interior empieza por ver con claridad, no por corregirse con urgencia.",
                  icono: "◈",
                  color: P.afectos,
                },
                {
                  titulo: "Con paciencia, no con prisa",
                  texto: "No tienes que completar todo de una vez. Puedes explorar un indicador hoy y otro mañana. La vida interior se cultiva en el tiempo largo, no en la sesión única.",
                  icono: "⊕",
                  color: P.arraigo,
                },
              ].map((p, i) => (
                <div key={i} style={{
                  display: "flex", gap: 14, alignItems: "flex-start",
                  background: P.blanco, borderRadius: 10, padding: "16px 18px",
                  marginBottom: 10, border: `1px solid ${P.grisClaro}`,
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: p.color, color: P.blanco,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, flexShrink: 0,
                  }}>
                    {p.icono}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "sans-serif", fontSize: 13, fontWeight: 700,
                      color: p.color, marginBottom: 4,
                    }}>
                      {p.titulo}
                    </div>
                    <div style={{ fontFamily: "sans-serif", fontSize: 13, color: "#444", lineHeight: 1.6 }}>
                      {p.texto}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tiempo estimado */}
            <div style={{
              background: P.doradoClaro, borderRadius: 10, padding: "14px 18px",
              display: "flex", alignItems: "center", gap: 14,
            }}>
              <div style={{ fontSize: 28, flexShrink: 0 }}>◷</div>
              <div>
                <div style={{ fontFamily: "sans-serif", fontSize: 12, fontWeight: 700, color: P.azulProfundo, marginBottom: 2 }}>
                  ¿Cuánto tiempo necesito?
                </div>
                <div style={{ fontFamily: "sans-serif", fontSize: 12, color: "#555", lineHeight: 1.6 }}>
                  Entre 15 y 30 minutos para una primera exploración completa.
                  También puedes explorar un solo indicador en 5 minutos si es lo que tienes hoy.
                </div>
              </div>
            </div>

            <button onClick={() => setSeccion("pasos")} style={{
              marginTop: 20, width: "100%", padding: "14px",
              background: P.azulProfundo, color: P.blanco,
              border: "none", borderRadius: 10, cursor: "pointer",
              fontFamily: "sans-serif", fontSize: 14, fontWeight: 700,
              letterSpacing: 0.5,
            }}>
              Ver cómo usarla →
            </button>
          </div>
        )}

        {/* ══════════════════════════════════════════
            SECCIÓN: PASOS
        ══════════════════════════════════════════ */}
        {seccion === "pasos" && (
          <div>
            <div style={{ margin: "24px 0 16px" }}>
              <div style={{
                fontFamily: "sans-serif", fontSize: 10, letterSpacing: 2,
                color: P.gris, textTransform: "uppercase", marginBottom: 4,
              }}>
                El recorrido
              </div>
              <h2 style={{ margin: 0, fontSize: 18, color: P.azulProfundo }}>
                Cinco pasos, un camino
              </h2>
            </div>

            {/* Línea de pasos */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", left: 18, top: 0, bottom: 0,
                width: 2, background: P.grisClaro, zIndex: 0,
              }} />
              {PASOS.map((paso, i) => {
                const abierto = pasoActivo === i;
                return (
                  <div key={i} style={{
                    position: "relative", zIndex: 1,
                    display: "flex", gap: 16, marginBottom: 12,
                  }}>
                    {/* Número */}
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                      background: abierto ? P.azulProfundo : P.blanco,
                      border: `2px solid ${abierto ? P.azulProfundo : P.grisClaro}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "sans-serif", fontSize: 14, fontWeight: 700,
                      color: abierto ? P.blanco : P.gris,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }} onClick={() => setPasoActivo(abierto ? null : i)}>
                      {paso.num}
                    </div>

                    {/* Contenido */}
                    <div
                      onClick={() => setPasoActivo(abierto ? null : i)}
                      style={{
                        flex: 1, background: P.blanco, borderRadius: 10,
                        border: `1px solid ${abierto ? P.azulProfundo : P.grisClaro}`,
                        overflow: "hidden", cursor: "pointer",
                        transition: "border-color 0.2s",
                      }}
                    >
                      <div style={{
                        padding: "12px 16px",
                        background: abierto ? P.azulProfundo : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                      }}>
                        <div style={{
                          fontFamily: "sans-serif", fontSize: 14, fontWeight: 700,
                          color: abierto ? P.blanco : P.texto,
                        }}>
                          {paso.titulo}
                        </div>
                        <div style={{
                          fontFamily: "sans-serif", fontSize: 12,
                          color: abierto ? "rgba(255,255,255,0.6)" : P.gris,
                        }}>
                          {abierto ? "▲" : "▼"}
                        </div>
                      </div>
                      {abierto && (
                        <div style={{ padding: "14px 16px" }}>
                          <p style={{
                            fontFamily: "sans-serif", fontSize: 13, color: "#333",
                            lineHeight: 1.7, margin: "0 0 12px",
                          }}>
                            {paso.texto}
                          </p>
                          <div style={{
                            background: P.doradoClaro, borderRadius: 8,
                            padding: "10px 14px",
                            borderLeft: `3px solid ${P.dorado}`,
                          }}>
                            <div style={{
                              fontFamily: "sans-serif", fontSize: 10, letterSpacing: 1,
                              color: "#8B6914", textTransform: "uppercase",
                              fontWeight: 700, marginBottom: 4,
                            }}>
                              Invitación concreta
                            </div>
                            <div style={{ fontFamily: "sans-serif", fontSize: 13, color: "#333", lineHeight: 1.6 }}>
                              {paso.accion}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Los cinco indicadores en resumen */}
            <div style={{
              background: P.azulProfundo, borderRadius: 12, padding: "20px",
              marginTop: 20,
            }}>
              <div style={{
                fontFamily: "sans-serif", fontSize: 10, letterSpacing: 2,
                color: P.dorado, textTransform: "uppercase", marginBottom: 12,
              }}>
                Los cinco indicadores de un vistazo
              </div>
              {INDICADORES_BREVE.map((ind, i) => (
                <div key={i} style={{
                  display: "flex", gap: 12, alignItems: "flex-start",
                  marginBottom: i < INDICADORES_BREVE.length - 1 ? 12 : 0,
                  paddingBottom: i < INDICADORES_BREVE.length - 1 ? 12 : 0,
                  borderBottom: i < INDICADORES_BREVE.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: 6, flexShrink: 0,
                    background: ind.color, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 14, color: P.blanco,
                  }}>
                    {ind.icono}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "sans-serif", fontSize: 13, fontWeight: 700,
                      color: P.blanco, marginBottom: 2,
                    }}>
                      {ind.nombre}
                    </div>
                    <div style={{ fontFamily: "sans-serif", fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
                      {ind.pregunta}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => setSeccion("mapa")} style={{
              marginTop: 20, width: "100%", padding: "14px",
              background: P.dorado, color: P.azulProfundo,
              border: "none", borderRadius: 10, cursor: "pointer",
              fontFamily: "sans-serif", fontSize: 14, fontWeight: 700,
            }}>
              Ver mis tres territorios →
            </button>
          </div>
        )}

        {/* ══════════════════════════════════════════
            SECCIÓN: MAPA DE TERRITORIOS
        ══════════════════════════════════════════ */}
        {seccion === "mapa" && (
          <div>
            <div style={{ margin: "24px 0 6px" }}>
              <div style={{
                fontFamily: "sans-serif", fontSize: 10, letterSpacing: 2,
                color: P.gris, textTransform: "uppercase", marginBottom: 4,
              }}>
                Visualización
              </div>
              <h2 style={{ margin: "0 0 6px", fontSize: 18, color: P.azulProfundo }}>
                Mi vida interior y mis tres territorios
              </h2>
            </div>

            {/* Texto introductorio */}
            <div style={{
              background: P.blanco, borderRadius: 10, padding: "16px 18px",
              border: `1px solid ${P.grisClaro}`, marginBottom: 20,
            }}>
              <p style={{ fontFamily: "sans-serif", fontSize: 13, color: "#333", lineHeight: 1.7, margin: 0 }}>
                La vida interior no es un asunto privado: irradia hacia afuera en tres
                direcciones. El <strong>cuerpo</strong> es el primer territorio donde el
                interior se hace visible. Las <strong>relaciones</strong> son el espejo
                donde la vida interior se prueba. Los <strong>recursos</strong> —tiempo,
                energía, dones— son el campo donde el interior se despliega.
              </p>
            </div>

            {/* Diagrama SVG de irradiación */}
            <div style={{
              background: P.azulProfundo, borderRadius: 12, padding: "24px 16px",
              marginBottom: 20, textAlign: "center",
            }}>
              <div style={{
                fontFamily: "sans-serif", fontSize: 10, letterSpacing: 2,
                color: P.dorado, textTransform: "uppercase", marginBottom: 16,
              }}>
                El disponible en el centro · la vida interior irradiando
              </div>
              <svg viewBox="0 0 320 220" style={{ width: "100%", maxWidth: 400, display: "block", margin: "0 auto" }}>
                {/* Líneas de irradiación */}
                <line x1="160" y1="110" x2="160" y2="28" stroke={P.dorado} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
                <line x1="160" y1="110" x2="52"  y2="180" stroke="#8B4513" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
                <line x1="160" y1="110" x2="268" y2="180" stroke="#1B4D3E" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />

                {/* Centro: vida interior */}
                <circle cx="160" cy="110" r="38" fill={P.azulMedio} stroke={P.dorado} strokeWidth="2" />
                <circle cx="160" cy="110" r="28" fill={P.azulProfundo} stroke={P.dorado} strokeWidth="1" opacity="0.6" />
                <text x="160" y="106" textAnchor="middle" fill={P.dorado} fontSize="9" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.5">VIDA</text>
                <text x="160" y="118" textAnchor="middle" fill={P.dorado} fontSize="9" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.5">INTERIOR</text>

                {/* Nodo: Relaciones (arriba) */}
                <circle cx="160" cy="24" r="20" fill={P.relaciones} stroke="white" strokeWidth="1.5" opacity="0.9" />
                <text x="160" y="21" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fontWeight="700">MIS</text>
                <text x="160" y="31" textAnchor="middle" fill="white" fontSize="7.5" fontFamily="sans-serif">RELACIONES</text>

                {/* Nodo: Cuerpo (abajo izq) */}
                <circle cx="50" cy="184" r="20" fill={P.cuerpo} stroke="white" strokeWidth="1.5" opacity="0.9" />
                <text x="50" y="181" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fontWeight="700">MI</text>
                <text x="50" y="191" textAnchor="middle" fill="white" fontSize="7.5" fontFamily="sans-serif">CUERPO</text>

                {/* Nodo: Recursos (abajo der) */}
                <circle cx="270" cy="184" r="20" fill={P.recursos} stroke="white" strokeWidth="1.5" opacity="0.9" />
                <text x="270" y="181" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fontWeight="700">MIS</text>
                <text x="270" y="191" textAnchor="middle" fill="white" fontSize="7.5" fontFamily="sans-serif">RECURSOS</text>

                {/* Indicadores pequeños alrededor del centro */}
                {[
                  { a: 0,   label: "⊕", cx: 160, cy: 68  },
                  { a: 72,  label: "◎", cx: 202, cy: 87  },
                  { a: 144, label: "◈", cx: 198, cy: 133 },
                  { a: 216, label: "⊗", cx: 122, cy: 133 },
                  { a: 288, label: "◉", cx: 118, cy: 87  },
                ].map((pt, i) => (
                  <g key={i}>
                    <circle cx={pt.cx} cy={pt.cy} r="11" fill="rgba(255,255,255,0.1)" stroke={P.dorado} strokeWidth="1" />
                    <text x={pt.cx} y={pt.cy + 4} textAnchor="middle" fill={P.dorado} fontSize="10" fontFamily="sans-serif">{pt.label}</text>
                  </g>
                ))}
              </svg>
              <div style={{ fontFamily: "sans-serif", fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 10 }}>
                Los cinco indicadores (⊕ ◎ ◈ ⊗ ◉) orbitan el centro y orientan cada territorio
              </div>
            </div>

            {/* Los tres territorios */}
            {TERRITORIO_KEYS.map((key) => {
              const t = MAPA_TERRITORIOS[key];
              const abierto = territorioActivo === key;
              return (
                <div key={key} style={{ marginBottom: 14 }}>
                  {/* Header del territorio */}
                  <div
                    onClick={() => {
                      setTerritorioActivo(abierto ? null : key);
                      setIndicadorTerritorio(null);
                    }}
                    style={{
                      background: abierto ? t.color : P.blanco,
                      borderRadius: abierto ? "10px 10px 0 0" : 10,
                      padding: "14px 18px",
                      border: `2px solid ${abierto ? t.color : P.grisClaro}`,
                      cursor: "pointer",
                      display: "flex", alignItems: "center", gap: 14,
                      transition: "all 0.2s",
                    }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: abierto ? "rgba(255,255,255,0.2)" : t.colorClaro,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 20, color: abierto ? P.blanco : t.color,
                      flexShrink: 0,
                    }}>
                      {t.icono}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: "sans-serif", fontSize: 15, fontWeight: 700,
                        color: abierto ? P.blanco : P.texto,
                      }}>
                        {t.nombre}
                      </div>
                      <div style={{
                        fontFamily: "sans-serif", fontSize: 11,
                        color: abierto ? "rgba(255,255,255,0.7)" : P.gris,
                      }}>
                        {t.subtitulo}
                      </div>
                    </div>
                    <div style={{
                      fontFamily: "sans-serif", fontSize: 13,
                      color: abierto ? "rgba(255,255,255,0.7)" : P.gris,
                    }}>
                      {abierto ? "▲" : "▼"}
                    </div>
                  </div>

                  {/* Contenido del territorio */}
                  {abierto && (
                    <div style={{
                      background: P.blanco,
                      border: `2px solid ${t.color}`,
                      borderTop: "none",
                      borderRadius: "0 0 10px 10px",
                      overflow: "hidden",
                    }}>
                      {/* Descripción */}
                      <div style={{ padding: "16px 18px 12px" }}>
                        <p style={{ fontFamily: "sans-serif", fontSize: 13, color: "#333", lineHeight: 1.7, margin: 0 }}>
                          {t.descripcion}
                        </p>
                      </div>

                      {/* Indicadores que iluminan este territorio */}
                      <div style={{ padding: "0 18px 14px" }}>
                        <div style={{
                          fontFamily: "sans-serif", fontSize: 10, letterSpacing: 2,
                          color: t.color, textTransform: "uppercase", fontWeight: 700, marginBottom: 10,
                        }}>
                          Cómo cada indicador ilumina este territorio
                        </div>
                        {t.indicadores.map((item, i) => {
                          const ind = INDICADORES_BREVE.find(x => x.clave === item.clave);
                          const selec = indicadorTerritorio === `${key}-${i}`;
                          return (
                            <div
                              key={i}
                              onClick={() => setIndicadorTerritorio(selec ? null : `${key}-${i}`)}
                              style={{
                                background: selec ? ind.color : P.crema,
                                borderRadius: 8,
                                marginBottom: 6,
                                cursor: "pointer",
                                overflow: "hidden",
                                border: `1px solid ${selec ? ind.color : P.grisClaro}`,
                                transition: "all 0.15s",
                              }}
                            >
                              <div style={{
                                padding: "10px 14px",
                                display: "flex", alignItems: "center", gap: 10,
                              }}>
                                <div style={{
                                  width: 26, height: 26, borderRadius: "50%",
                                  background: ind.color,
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                  fontSize: 12, color: P.blanco, flexShrink: 0,
                                }}>
                                  {ind.icono}
                                </div>
                                <div style={{
                                  fontFamily: "sans-serif", fontSize: 12, fontWeight: 700,
                                  color: selec ? P.blanco : P.texto, flex: 1,
                                }}>
                                  {ind.nombre}
                                </div>
                                <div style={{
                                  fontFamily: "sans-serif", fontSize: 11,
                                  color: selec ? "rgba(255,255,255,0.6)" : P.gris,
                                }}>
                                  {selec ? "▲" : "▼"}
                                </div>
                              </div>
                              {selec && (
                                <div style={{ padding: "0 14px 12px" }}>
                                  <div style={{
                                    fontFamily: "sans-serif", fontSize: 13,
                                    color: "rgba(255,255,255,0.9)", lineHeight: 1.7,
                                  }}>
                                    {item.texto}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Pregunta de visualización */}
                      <div style={{
                        margin: "0 18px 14px",
                        background: t.colorClaro, borderRadius: 8,
                        padding: "12px 16px",
                        borderLeft: `4px solid ${t.color}`,
                      }}>
                        <div style={{
                          fontFamily: "sans-serif", fontSize: 10, letterSpacing: 1,
                          color: t.color, textTransform: "uppercase", fontWeight: 700, marginBottom: 6,
                        }}>
                          Pregunta para la visualización
                        </div>
                        <div style={{ fontFamily: "sans-serif", fontSize: 13, color: "#333", lineHeight: 1.7 }}>
                          {t.preguntaVisualizacion}
                        </div>
                      </div>

                      {/* Invitatoria */}
                      <div style={{
                        margin: "0 18px 18px",
                        background: t.color, borderRadius: 8,
                        padding: "12px 16px",
                      }}>
                        <div style={{
                          fontFamily: "sans-serif", fontSize: 10, letterSpacing: 1,
                          color: "rgba(255,255,255,0.7)", textTransform: "uppercase",
                          fontWeight: 700, marginBottom: 4,
                        }}>
                          Invitación para esta semana
                        </div>
                        <div style={{ fontFamily: "sans-serif", fontSize: 13, color: P.blanco, lineHeight: 1.7 }}>
                          {t.invitatoria}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Cierre contemplativo */}
            <div style={{
              background: P.azulProfundo, borderRadius: 12, padding: "24px",
              marginTop: 8,
            }}>
              <div style={{
                fontFamily: "sans-serif", fontSize: 10, letterSpacing: 2,
                color: P.dorado, textTransform: "uppercase", marginBottom: 12,
              }}>
                Para cerrar · una palabra
              </div>
              <p style={{ fontFamily: "Georgia", fontSize: 15, color: P.blanco, lineHeight: 1.85, margin: "0 0 14px", fontStyle: "italic" }}>
                "El disponible no es quien más da, sino quien da desde un lugar más profundo."
              </p>
              <p style={{ fontFamily: "sans-serif", fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0 }}>
                Lo que has explorado en esta herramienta no es un inventario de carencias.
                Es un mapa de posibilidades. Cada indicador, en el nivel que sea, tiene una
                puerta que se abre hacia adelante. El crecimiento no empieza cuando alcanzas
                el nivel cinco: empieza cuando decides mirar con honestidad desde donde estás.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
