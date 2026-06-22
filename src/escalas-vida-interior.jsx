import { useState } from "react";

const INDICADORES = [
  {
    id: 1,
    clave: "arraigo",
    nombre: "Arraigo",
    pregunta: "¿Sé desde dónde hablo?",
    icono: "⊕",
    raiz: "El hineni de Abraham, Moisés y Samuel: una respuesta que solo puede brotar desde un interior que sabe dónde está parado.",
    color: "#1B4332",
    colorClaro: "#D8F3DC",
    niveles: [
      {
        nivel: 1,
        nombre: "Identidad prestada",
        descripcion: "Mi sentido de quién soy depende casi completamente de lo que otros dicen o piensan de mí. El elogio me eleva, la crítica me derrumba. Sin aprobación externa, me pierdo.",
        respuestasPredom: [
          "Necesito que me digan que estoy bien para seguir adelante.",
          "Cuando alguien me critica, pongo en duda todo lo que soy.",
          "Me defino principalmente por mi rol, mi trabajo o lo que produzco.",
          "En situaciones nuevas, busco señales externas para saber cómo comportarme.",
        ],
        posibilidad: "Comenzar a identificar valores propios que persisten aunque nadie los reconozca.",
      },
      {
        nivel: 2,
        nombre: "Identidad en construcción",
        descripcion: "Tengo algunas convicciones propias pero son frágiles bajo presión. En momentos de calma me conozco; en momentos de conflicto o crisis, me pierdo fácilmente.",
        respuestasPredom: [
          "En días buenos sé quién soy; en días difíciles lo dudo todo.",
          "Puedo sostener mis valores cuando hay apoyo, pero me tambaleo ante la oposición.",
          "Necesito frecuentemente confirmar mis decisiones con alguien de confianza.",
          "La desaprobación me afecta profundamente aunque logre disimularlo.",
        ],
        posibilidad: "Desarrollar prácticas que anclen la identidad en algo que no fluctúe con las circunstancias.",
      },
      {
        nivel: 3,
        nombre: "Identidad reconocible",
        descripcion: "Tengo un sentido claro de quién soy en la mayoría de las situaciones. La crítica me afecta pero no me define. Puedo distinguir entre lo que soy y lo que hago.",
        respuestasPredom: [
          "Puedo recibir críticas sin que me derrumben, aunque me duelan.",
          "Sé cuáles son mis valores fundamentales aunque no siempre los vivo perfectamente.",
          "Mi identidad no depende exclusivamente de un solo rol o relación.",
          "Puedo estar en desacuerdo con alguien sin perder el respeto mutuo ni el propio.",
        ],
        posibilidad: "Fortalecer la identidad en situaciones de alta presión y ante adversarios persistentes.",
      },
      {
        nivel: 4,
        nombre: "Identidad estable bajo presión",
        descripcion: "Mi identidad permanece consistente incluso en medio del conflicto, la incertidumbre o el rechazo. Puedo ser cuestionado sin necesidad de defenderme ni de capitular.",
        respuestasPredom: [
          "Puedo sostener mis convicciones ante la presión de grupo sin agresividad.",
          "La ambigüedad o la incertidumbre no me desestabilizan internamente.",
          "Puedo reconocer mis errores sin que eso amenace mi sentido de quién soy.",
          "Soy consistente entre lo que pienso, digo y hago en contextos diferentes.",
        ],
        posibilidad: "Acompañar a otros en el proceso de construir su propia identidad desde un lugar de libertad.",
      },
      {
        nivel: 5,
        nombre: "Identidad como don dado",
        descripcion: "Vivo la identidad como algo recibido y no conquistado. No necesito afirmarla ni defenderla. Puedo desaparecer a favor del bien del otro sin sentir que me pierdo.",
        respuestasPredom: [
          "Puedo ceder posiciones o reconocimientos sin sentir que pierdo algo esencial.",
          "Mi presencia no necesita ser notada para ser real.",
          "Sirvo sin necesitar crédito ni reconocimiento para sentirme pleno.",
          "Puedo habitar la contradicción y la paradoja sin que amenacen mi centro.",
        ],
        posibilidad: "Fuente de vida para comunidades enteras sin agotarse en ello.",
      },
    ],
  },
  {
    id: 2,
    clave: "silencio",
    nombre: "Silencio fértil",
    pregunta: "¿Puedo estar conmigo mismo?",
    icono: "◎",
    raiz: "El Séptimo Día como parada contemplativa: antes de seguir actuando, se aprende a recibir. El silencio no es vacío sino espacio de recepción del bereshit.",
    color: "#1A3A5C",
    colorClaro: "#D6E8F7",
    niveles: [
      {
        nivel: 1,
        nombre: "Huida del silencio",
        descripcion: "El silencio genera ansiedad o incomodidad. Necesito ruido, actividad o estímulos constantes para funcionar. Estar a solas conmigo mismo es algo que evito activamente.",
        respuestasPredom: [
          "Cuando no hay nada que hacer, inmediatamente busco el teléfono, la televisión o la conversación.",
          "El silencio me hace pensar cosas que prefiero no pensar.",
          "Me siento culpable o improductivo cuando no estoy haciendo algo.",
          "Me incomoda profundamente estar solo sin ningún estímulo externo.",
        ],
        posibilidad: "Iniciar con pausas breves de 2 a 3 minutos de quietud deliberada al día.",
      },
      {
        nivel: 2,
        nombre: "Tolerancia del silencio",
        descripcion: "Puedo estar en silencio si es necesario, pero no lo busco. Lo tolero como ausencia de ruido, no como presencia de algo. Me distrae el pensamiento acelerado.",
        respuestasPredom: [
          "Puedo estar en silencio un rato pero pronto me inquieto o me aburro.",
          "Mi mente no para: cuando hay silencio exterior hay mucho ruido interior.",
          "El silencio me parece útil solo para relajarme, no para algo más profundo.",
          "Puedo hacer meditación guiada pero no silencio no estructurado.",
        ],
        posibilidad: "Aprender a observar el propio ruido interior sin huir de él ni ser absorbido por él.",
      },
      {
        nivel: 3,
        nombre: "Silencio como pausa",
        descripcion: "Busco momentos de silencio conscientemente. Me sirve para ordenar mis pensamientos, descansar y recuperarme. Hay un silencio exterior que ya no me asusta.",
        respuestasPredom: [
          "Tengo al menos un momento diario de quietud deliberada.",
          "El silencio me ayuda a clarificar lo que pienso y siento.",
          "Puedo estar en un espacio tranquilo sin necesidad de llenarlo.",
          "He experimentado que el silencio me hace más presente en las relaciones.",
        ],
        posibilidad: "Profundizar hacia el silencio interior, más allá del exterior.",
      },
      {
        nivel: 4,
        nombre: "Silencio como escucha",
        descripcion: "El silencio es un espacio activo de recepción. En él no solo descanso: percibo, discerno, escucho. Hay algo que se revela en el silencio que el ruido tapa.",
        respuestasPredom: [
          "En el silencio recibo claridad que no llega de otra manera.",
          "Puedo entrar al silencio incluso en medio de circunstancias externas ruidosas.",
          "La quietud interior ya no depende totalmente del ambiente exterior.",
          "Del silencio emergen intuiciones, decisiones y comprensiones que maduraron ahí.",
        ],
        posibilidad: "Convertir el silencio en fuente continua de discernimiento relacional y misionero.",
      },
      {
        nivel: 5,
        nombre: "Silencio habitado",
        descripcion: "El silencio no es un momento del día: es una capa de la existencia. Puedo estar en conversación, en acción y en relación, y mantener simultáneamente un centro quieto desde el que todo emerge.",
        respuestasPredom: [
          "Hay una quietud interior que no desaparece aunque el ambiente sea caótico.",
          "Puedo hablar desde el silencio: mis palabras nacen de un lugar de escucha.",
          "La actividad no consume el centro; el centro alimenta la actividad.",
          "El silencio ha dejado de ser práctica para convertirse en morada.",
        ],
        posibilidad: "Punto de origen de una presencia que transforma sin imponerse.",
      },
    ],
  },
  {
    id: 3,
    clave: "afectos",
    nombre: "Integración afectiva",
    pregunta: "¿Mis emociones me informan o me gobiernan?",
    icono: "◈",
    raiz: "La diferencia entre la defensa del campo sana (Parada 9) y la reactividad territorial: la emoción bien integrada informa el límite; la no integrada impone el muro.",
    color: "#6B2737",
    colorClaro: "#F7D6DB",
    niveles: [
      {
        nivel: 1,
        nombre: "Afectos no reconocidos",
        descripcion: "No tengo consciencia clara de lo que siento. Las emociones aparecen como comportamientos, no como estados internos reconocibles. Actúo desde ellas sin saber que lo estoy haciendo.",
        respuestasPredom: [
          "Me entero de que estoy enojado o asustado porque alguien más me lo señala.",
          "No tengo vocabulario para describir lo que siento más allá de 'bien' o 'mal'.",
          "Mis reacciones me sorprenden a mí mismo.",
          "Las emociones 'me pasan' sin que yo sienta que las proceso.",
        ],
        posibilidad: "Comenzar a nombrar emociones básicas: miedo, tristeza, alegría, enojo, asco, sorpresa.",
      },
      {
        nivel: 2,
        nombre: "Afectos reactivos",
        descripcion: "Reconozco lo que siento, pero la emoción dirige mi respuesta automáticamente. Hay poca distancia entre el estímulo y la reacción. Me arrepiento seguido de mis respuestas.",
        respuestasPredom: [
          "Cuando me enojo, lo digo o lo actúo antes de pensar.",
          "El miedo me paraliza o me hace huir antes de poder evaluar la situación.",
          "Digo cosas que no quería decir cuando me siento amenazado.",
          "Me cuesta sostener una conversación difícil sin que las emociones tomen el control.",
        ],
        posibilidad: "Desarrollar la pausa: el espacio entre el estímulo y la respuesta.",
      },
      {
        nivel: 3,
        nombre: "Afectos nombrados",
        descripcion: "Puedo identificar lo que siento con relativa claridad y nombrarlo. Esto solo ya reduce la reactividad. Puedo esperar antes de responder aunque me cueste.",
        respuestasPredom: [
          "Puedo decir 'estoy sintiendo miedo' o 'esto me duele' antes de actuar desde eso.",
          "Tengo rituales o prácticas que me ayudan a hacer pausa cuando me activo emocionalmente.",
          "He aprendido a distinguir entre lo que siento y lo que pienso.",
          "Puedo pedir tiempo antes de responder en situaciones cargadas emocionalmente.",
        ],
        posibilidad: "Aprender a usar los afectos como información para el discernimiento, no solo como estados a manejar.",
      },
      {
        nivel: 4,
        nombre: "Afectos integrados",
        descripcion: "Las emociones son datos valiosos que informan mis decisiones sin dirigirlas automáticamente. Puedo actuar desde valores incluso cuando el afecto empuja en otra dirección.",
        respuestasPredom: [
          "Puedo sentir miedo y actuar con valentía al mismo tiempo.",
          "Reconozco cuando una emoción está distorsionando mi percepción de la realidad.",
          "Mis emociones me dan información sobre mis valores y mis límites.",
          "Puedo estar en un conflicto difícil sin que la emoción secuestre el proceso.",
        ],
        posibilidad: "Acompañar a otros en su propio proceso de integración afectiva desde la compasión.",
      },
      {
        nivel: 5,
        nombre: "Afectos como brújula",
        descripcion: "Los afectos son el instrumento refinado del discernimiento. La compasión, la indignación justa, la alegría profunda y la tristeza honesta orientan con precisión la acción y la presencia.",
        respuestasPredom: [
          "Mis afectos y mis valores ya no están en conflicto: se han alineado profundamente.",
          "Puedo sostener emociones dolorosas sin necesidad de huir ni de suprimirlas.",
          "La compasión que siento por otros no me desborda: me orienta.",
          "Puedo llorar y reír con libertad, sin que ninguno de los dos me controle.",
        ],
        posibilidad: "Fuente de empatía profunda y de presencia diferenciada en contextos de alta carga emocional.",
      },
    ],
  },
  {
    id: 4,
    clave: "memoria",
    nombre: "Memoria agradecida",
    pregunta: "¿Puedo leer mi historia como don recibido?",
    icono: "⊗",
    raiz: "El Séptimo Día como parada contemplativa que permite 'ver que es bueno' antes de seguir actuando. La memoria no solo registra: interpreta.",
    color: "#4A3728",
    colorClaro: "#F0E6DC",
    niveles: [
      {
        nivel: 1,
        nombre: "Memoria cautiva",
        descripcion: "El pasado me tiene atrapado, ya sea en el resentimiento por lo que me hicieron, en la culpa por lo que hice, o en la idealización de lo que fue y ya no es.",
        respuestasPredom: [
          "Hay personas o situaciones del pasado que todavía me generan ira o dolor intenso cuando las recuerdo.",
          "Me cuesta hablar de ciertos períodos de mi vida sin que la emoción me desborde.",
          "Tiendo a comparar el presente negativamente con un pasado idealizado.",
          "El peso de los errores que cometí me impide avanzar con libertad.",
        ],
        posibilidad: "Reconocer que el pasado ocurrió, sin que eso signifique que todavía me define o me determina.",
      },
      {
        nivel: 2,
        nombre: "Memoria gestionada",
        descripcion: "He aprendido a no dejar que el pasado me domine cotidianamente, pero hay capítulos o personas que aún disparan respuestas intensas. El perdón y la reconciliación son trabajos en proceso.",
        respuestasPredom: [
          "Puedo hablar de la mayoría de mi pasado con cierta distancia, pero hay zonas que evito.",
          "He perdonado algunas cosas pero no todas. Algunas heridas siguen abiertas.",
          "El pasado no me paraliza pero tampoco lo he integrado del todo.",
          "Hay decisiones que tomé de las que todavía me avergüenzo o arrepiento profundamente.",
        ],
        posibilidad: "Iniciar procesos de revisión de la propia historia con acompañamiento o en comunidad.",
      },
      {
        nivel: 3,
        nombre: "Memoria honesta",
        descripcion: "Puedo mirar mi historia con honestidad, reconociendo tanto lo recibido como lo perdido, tanto los dones como las heridas, sin idealizar ni victimizarme.",
        respuestasPredom: [
          "Puedo hablar de momentos difíciles de mi vida sin que me consuman.",
          "Reconozco tanto lo que recibí como lo que sufrí en mi historia.",
          "He podido hacer las paces con decisiones del pasado que no puedo cambiar.",
          "Puedo ver cómo incluso las experiencias dolorosas me formaron de alguna manera.",
        ],
        posibilidad: "Pasar de la lectura honesta a la lectura agradecida, encontrando sentido en lo que dolió.",
      },
      {
        nivel: 4,
        nombre: "Memoria integradora",
        descripcion: "El pasado ya no es solo algo que me pasó: es algo que recibí, incluyendo lo difícil. Puedo encontrar hilo de sentido que atraviesa la historia entera, incluso los capítulos oscuros.",
        respuestasPredom: [
          "Puedo decir que incluso las heridas y los fracasos me enseñaron algo que no aprendería de otra manera.",
          "No necesito reescribir mi historia ni eliminar capítulos para aceptarla.",
          "El perdón que he dado o recibido ha liberado energía para el presente.",
          "Puedo contar mi historia sin vergüenza ni amargura, incluyendo las partes difíciles.",
        ],
        posibilidad: "La historia personal se convierte en recurso de acompañamiento para otros que están en etapas similares.",
      },
      {
        nivel: 5,
        nombre: "Memoria eucarística",
        descripcion: "La historia entera —gozos y dolores, dones y pérdidas— puede ser sostenida en gratitud. No gratitud naïve que niega el sufrimiento, sino gratitud que lo ha atravesado y ha encontrado algo al otro lado.",
        respuestasPredom: [
          "Puedo dar gracias por mi historia completa, incluyendo lo que me costó más.",
          "La memoria del bien recibido es más fuerte que la del daño sufrido.",
          "Puedo hablar de mis fracasos como de los mejores maestros que tuve.",
          "Mi historia me ha dado compasión, no amargura; profundidad, no cinismo.",
        ],
        posibilidad: "La gratitud agradecida se convierte en fuente de esperanza contagiosa para comunidades enteras.",
      },
    ],
  },
  {
    id: 5,
    clave: "disponibilidad",
    nombre: "Disponibilidad sin vaciamiento",
    pregunta: "¿Doy desde abundancia o desde deuda?",
    icono: "◉",
    raiz: "El corazón del movimiento RECIBIR → DAR: la vida interior de calidad es la condición para que el DAR no sea sangría sino desbordamiento.",
    color: "#1B4D3E",
    colorClaro: "#D4EDE7",
    niveles: [
      {
        nivel: 1,
        nombre: "Don desde el miedo",
        descripcion: "Doy porque temo las consecuencias de no dar: el rechazo, la desaprobación, la culpa. Mi disponibilidad es en realidad una estrategia de supervivencia relacional.",
        respuestasPredom: [
          "Me cuesta decir que no aunque esté agotado, por miedo a decepcionar.",
          "Siento que si dejo de dar, los demás se irán o dejarán de valorarme.",
          "Ayudo a otros pero acumulo resentimiento por no ser correspondido.",
          "Mi identidad depende de ser útil: sin eso, no sé quién soy.",
        ],
        posibilidad: "Identificar cuándo el dar nace del miedo y cuándo de la libertad.",
      },
      {
        nivel: 2,
        nombre: "Don desde la obligación",
        descripcion: "Doy porque es lo correcto, lo esperado o lo que me enseñaron. Hay generosidad real, pero también una carga de deber que pesa. La entrega no nace del gozo sino del cumplimiento.",
        respuestasPredom: [
          "Ayudo porque debo, no siempre porque quiero.",
          "Me siento culpable cuando descanso o me cuido a mí mismo.",
          "La generosidad me parece una obligación más que una vocación.",
          "Puedo dar mucho pero raramente desde la alegría genuina.",
        ],
        posibilidad: "Descubrir que el descanso y el autocuidado son también formas de disponibilidad.",
      },
      {
        nivel: 3,
        nombre: "Don desde la voluntad",
        descripcion: "Elijo dar con cierta libertad. Ya no solo por miedo ni por obligación. Aunque a veces cuesta, hay una decisión consciente de poner los propios recursos al servicio del otro.",
        respuestasPredom: [
          "Puedo dar aunque me cueste, sin que sea solo por presión externa.",
          "He aprendido a poner límites aunque me genera incomodidad.",
          "Tengo momentos de generosidad genuina mezclados con momentos de entrega forzada.",
          "Comienzo a cuidarme sin sentirme completamente egoísta por ello.",
        ],
        posibilidad: "Pasar de la voluntad entrenada al gozo de la entrega que nace del interior.",
      },
      {
        nivel: 4,
        nombre: "Don desde la abundancia",
        descripcion: "Doy porque tengo. He aprendido a recibir lo suficiente como para que el dar no me vacíe. Hay una proporción sana entre lo que entra y lo que sale. Los límites nacen de la claridad, no de la escasez.",
        respuestasPredom: [
          "Puedo dar sin que me cueste la paz interior.",
          "Mis límites protegen la calidad de lo que doy, no solo mi comodidad.",
          "El descanso y el cuidado propio me parecen parte de la misión, no escapatorias.",
          "Doy con alegría genuina la mayor parte del tiempo.",
        ],
        posibilidad: "Enseñar a otros que la disponibilidad sana requiere primero recibir.",
      },
      {
        nivel: 5,
        nombre: "Don como desbordamiento",
        descripcion: "La entrega ya no es un acto separado del ser: fluye naturalmente de lo que se ha recibido. No hay sensación de pérdida en el dar porque hay una fuente que no se agota. La disponibilidad se ha convertido en modo de existencia.",
        respuestasPredom: [
          "Dar no me cuesta energía: me la devuelve.",
          "La generosidad no es un esfuerzo sino una expresión de lo que soy.",
          "No llevo cuenta de lo que doy ni espero reciprocidad para sostenerme.",
          "Puedo acompañar procesos largos y difíciles sin que me consuman.",
        ],
        posibilidad: "Presencia transformadora que no se agota y que multiplica la disponibilidad en otros.",
      },
    ],
  },
];

const ETIQUETAS_NIVEL = ["Inicio", "Desarrollo", "Consolidación", "Madurez", "Plenitud"];

export default function EscalaVidaInterior() {
  const [indicadorActivo, setIndicadorActivo] = useState(0);
  const [nivelesSeleccionados, setNivelesSeleccionados] = useState({});
  const [vistaActiva, setVistaActiva] = useState("escala"); // "escala" | "perfil"

  const indicador = INDICADORES[indicadorActivo];
  const nivelSeleccionado = nivelesSeleccionados[indicador.clave];

  const seleccionarNivel = (nivel) => {
    setNivelesSeleccionados((prev) => ({
      ...prev,
      [indicador.clave]: prev[indicador.clave] === nivel ? null : nivel,
    }));
  };

  const completados = Object.keys(nivelesSeleccionados).filter(
    (k) => nivelesSeleccionados[k] !== null && nivelesSeleccionados[k] !== undefined
  ).length;

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#F9F5F0", minHeight: "100vh", color: "#1A1A1A" }}>
      {/* Header */}
      <div style={{ background: "#003366", padding: "28px 24px 20px", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontFamily: "sans-serif", fontSize: 10, letterSpacing: 3, color: "#C9A96E", textTransform: "uppercase", marginBottom: 4 }}>
                A imagen y semejanza
              </div>
              <h1 style={{ margin: 0, fontSize: 18, fontWeight: "bold", color: "#FFFFFF", lineHeight: 1.3 }}>
                Escalas de la Vida Interior
              </h1>
              <div style={{ fontFamily: "sans-serif", fontSize: 12, color: "#A8C4E0", marginTop: 2 }}>
                Instrumento de discernimiento para el disponible
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={() => setVistaActiva("escala")}
                style={{
                  padding: "6px 14px", borderRadius: 20, border: "none", cursor: "pointer",
                  fontFamily: "sans-serif", fontSize: 12, fontWeight: 600,
                  background: vistaActiva === "escala" ? "#C9A96E" : "rgba(255,255,255,0.1)",
                  color: vistaActiva === "escala" ? "#003366" : "#FFFFFF",
                }}
              >
                Explorar
              </button>
              <button
                onClick={() => setVistaActiva("perfil")}
                style={{
                  padding: "6px 14px", borderRadius: 20, border: "none", cursor: "pointer",
                  fontFamily: "sans-serif", fontSize: 12, fontWeight: 600,
                  background: vistaActiva === "perfil" ? "#C9A96E" : "rgba(255,255,255,0.1)",
                  color: vistaActiva === "perfil" ? "#003366" : "#FFFFFF",
                }}
              >
                Mi perfil {completados > 0 && `(${completados}/5)`}
              </button>
            </div>
          </div>
        </div>
      </div>

      {vistaActiva === "escala" && (
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px 40px" }}>
          {/* Navegación de indicadores */}
          <div style={{ display: "flex", gap: 8, overflowX: "auto", padding: "20px 0 12px", scrollbarWidth: "none" }}>
            {INDICADORES.map((ind, idx) => {
              const seleccionado = nivelesSeleccionados[ind.clave];
              const activo = idx === indicadorActivo;
              return (
                <button
                  key={ind.id}
                  onClick={() => setIndicadorActivo(idx)}
                  style={{
                    flexShrink: 0,
                    padding: "8px 14px",
                    borderRadius: 20,
                    border: `2px solid ${activo ? ind.color : seleccionado ? ind.color : "#DDD"}`,
                    background: activo ? ind.color : seleccionado ? ind.colorClaro : "#FFFFFF",
                    color: activo ? "#FFFFFF" : seleccionado ? ind.color : "#666",
                    fontFamily: "sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ fontSize: 14 }}>{ind.icono}</span>
                  {ind.nombre}
                  {seleccionado && <span style={{ fontSize: 10, opacity: 0.8 }}>N{seleccionado}</span>}
                </button>
              );
            })}
          </div>

          {/* Pregunta central */}
          <div style={{
            background: indicador.color, borderRadius: 12, padding: "20px 24px", marginBottom: 20,
            borderLeft: `5px solid ${indicador.colorClaro.replace("F7", "E0").replace("F0", "D0")}`,
          }}>
            <div style={{ fontFamily: "sans-serif", fontSize: 10, letterSpacing: 2, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", marginBottom: 8 }}>
              Pregunta de examen — Indicador {indicador.id}
            </div>
            <div style={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF", marginBottom: 10, lineHeight: 1.3 }}>
              {indicador.pregunta}
            </div>
            <div style={{ fontFamily: "sans-serif", fontSize: 12, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
              {indicador.raiz}
            </div>
          </div>

          {/* Barra de niveles */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontFamily: "sans-serif", fontSize: 11, color: "#888", marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>
              Escala de crecimiento — selecciona el nivel que mejor te describe
            </div>
            <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  onClick={() => seleccionarNivel(n)}
                  style={{
                    flex: 1, height: 8, borderRadius: 4, cursor: "pointer",
                    background: nivelSeleccionado >= n ? indicador.color : "#DDD",
                    transition: "background 0.2s",
                    opacity: nivelSeleccionado === n ? 1 : nivelSeleccionado >= n ? 0.7 : 0.4,
                  }}
                />
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {ETIQUETAS_NIVEL.map((e, i) => (
                <div key={i} style={{ fontFamily: "sans-serif", fontSize: 9, color: "#999", textAlign: i === 2 ? "center" : i > 2 ? "right" : "left", flex: 1 }}>
                  {e}
                </div>
              ))}
            </div>
          </div>

          {/* Niveles detallados */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {indicador.niveles.map((nivel) => {
              const estaSeleccionado = nivelSeleccionado === nivel.nivel;
              const estaPorDebajo = nivelSeleccionado > nivel.nivel;
              return (
                <div
                  key={nivel.nivel}
                  onClick={() => seleccionarNivel(nivel.nivel)}
                  style={{
                    borderRadius: 10,
                    border: `2px solid ${estaSeleccionado ? indicador.color : "#E5E0D8"}`,
                    background: estaSeleccionado ? indicador.colorClaro : estaPorDebajo ? "#FAFAF8" : "#FFFFFF",
                    cursor: "pointer",
                    overflow: "hidden",
                    transition: "all 0.2s",
                    opacity: nivelSeleccionado && !estaSeleccionado && !estaPorDebajo && nivel.nivel > nivelSeleccionado ? 0.6 : 1,
                  }}
                >
                  {/* Header del nivel */}
                  <div style={{
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    background: estaSeleccionado ? indicador.color : "transparent",
                  }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: "50%",
                      background: estaSeleccionado ? "rgba(255,255,255,0.2)" : estaPorDebajo ? indicador.colorClaro : "#F0EBE3",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "sans-serif", fontSize: 13, fontWeight: 700,
                      color: estaSeleccionado ? "#FFFFFF" : indicador.color,
                      flexShrink: 0,
                    }}>
                      {nivel.nivel}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: "sans-serif", fontSize: 14, fontWeight: 700,
                        color: estaSeleccionado ? "#FFFFFF" : "#1A1A1A",
                      }}>
                        {nivel.nombre}
                      </div>
                      {estaSeleccionado && (
                        <div style={{ fontFamily: "sans-serif", fontSize: 10, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>
                          Tu nivel actual seleccionado
                        </div>
                      )}
                    </div>
                    {estaPorDebajo && (
                      <div style={{ fontFamily: "sans-serif", fontSize: 10, color: indicador.color, fontWeight: 600 }}>
                        ✓ recorrido
                      </div>
                    )}
                  </div>

                  {/* Contenido expandido */}
                  <div style={{ padding: "0 16px 16px" }}>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: "#333", marginTop: 12, marginBottom: 12 }}>
                      {nivel.descripcion}
                    </p>

                    <div style={{ marginBottom: 12 }}>
                      <div style={{
                        fontFamily: "sans-serif", fontSize: 10, letterSpacing: 2,
                        color: indicador.color, textTransform: "uppercase", marginBottom: 8, fontWeight: 700,
                      }}>
                        Respuestas predominantes en este nivel
                      </div>
                      {nivel.respuestasPredom.map((r, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
                          <div style={{
                            width: 4, height: 4, borderRadius: "50%",
                            background: indicador.color, flexShrink: 0, marginTop: 8,
                          }} />
                          <div style={{ fontFamily: "sans-serif", fontSize: 13, color: "#444", lineHeight: 1.6 }}>
                            {r}
                          </div>
                        </div>
                      ))}
                    </div>

                    {nivel.nivel < 5 && (
                      <div style={{
                        background: "#F0EBE3", borderRadius: 8, padding: "10px 14px",
                        borderLeft: `3px solid ${indicador.color}`,
                      }}>
                        <div style={{ fontFamily: "sans-serif", fontSize: 10, letterSpacing: 1, color: indicador.color, textTransform: "uppercase", marginBottom: 4, fontWeight: 700 }}>
                          Posibilidad hacia adelante
                        </div>
                        <div style={{ fontFamily: "sans-serif", fontSize: 13, color: "#333", lineHeight: 1.5 }}>
                          {nivel.posibilidad}
                        </div>
                      </div>
                    )}
                    {nivel.nivel === 5 && (
                      <div style={{
                        background: indicador.color, borderRadius: 8, padding: "10px 14px",
                      }}>
                        <div style={{ fontFamily: "sans-serif", fontSize: 10, letterSpacing: 1, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", marginBottom: 4, fontWeight: 700 }}>
                          Fruto maduro
                        </div>
                        <div style={{ fontFamily: "sans-serif", fontSize: 13, color: "#FFFFFF", lineHeight: 1.5 }}>
                          {nivel.posibilidad}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {vistaActiva === "perfil" && (
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "24px 16px 40px" }}>
          <h2 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 4, color: "#003366" }}>
            Mi perfil de vida interior
          </h2>
          <p style={{ fontFamily: "sans-serif", fontSize: 13, color: "#666", marginBottom: 24, lineHeight: 1.6 }}>
            El perfil muestra tu nivel actual en cada indicador. No es un diagnóstico definitivo: es un mapa para el camino.
          </p>

          {completados === 0 && (
            <div style={{
              background: "#FFF8EE", border: "2px dashed #C9A96E", borderRadius: 10,
              padding: 24, textAlign: "center",
            }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>◌</div>
              <div style={{ fontFamily: "sans-serif", fontSize: 14, color: "#888" }}>
                Aún no has seleccionado tu nivel en ningún indicador.
              </div>
              <div style={{ fontFamily: "sans-serif", fontSize: 12, color: "#AAA", marginTop: 4 }}>
                Regresa a "Explorar" y selecciona el nivel que mejor te describe en cada escala.
              </div>
            </div>
          )}

          {completados > 0 && (
            <>
              {/* Visualización radial simplificada en CSS */}
              <div style={{ background: "#FFFFFF", borderRadius: 12, padding: 24, marginBottom: 20, border: "1px solid #E5E0D8" }}>
                <div style={{ fontFamily: "sans-serif", fontSize: 11, letterSpacing: 2, color: "#999", textTransform: "uppercase", marginBottom: 20 }}>
                  Vista de los cinco indicadores
                </div>
                {INDICADORES.map((ind) => {
                  const nivel = nivelesSeleccionados[ind.clave];
                  const pct = nivel ? (nivel / 5) * 100 : 0;
                  return (
                    <div key={ind.id} style={{ marginBottom: 16 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ fontSize: 16 }}>{ind.icono}</span>
                          <div>
                            <div style={{ fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "#1A1A1A" }}>
                              {ind.nombre}
                            </div>
                            {nivel && (
                              <div style={{ fontFamily: "sans-serif", fontSize: 11, color: ind.color }}>
                                {ind.niveles[nivel - 1].nombre}
                              </div>
                            )}
                          </div>
                        </div>
                        <div style={{
                          fontFamily: "sans-serif", fontSize: 18, fontWeight: 700,
                          color: nivel ? ind.color : "#CCC",
                        }}>
                          {nivel ? `${nivel}/5` : "—"}
                        </div>
                      </div>
                      <div style={{ background: "#F0EBE3", borderRadius: 4, height: 8, overflow: "hidden" }}>
                        <div style={{
                          width: `${pct}%`, height: "100%",
                          background: ind.color, borderRadius: 4,
                          transition: "width 0.6s ease",
                        }} />
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
                        {ETIQUETAS_NIVEL.map((e, i) => (
                          <div key={i} style={{
                            fontFamily: "sans-serif", fontSize: 8, color: i + 1 === nivel ? ind.color : "#BBB",
                            fontWeight: i + 1 === nivel ? 700 : 400,
                            flex: 1, textAlign: i === 0 ? "left" : i === 4 ? "right" : "center",
                          }}>
                            {e}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Zonas de atención */}
              {completados === 5 && (() => {
                const niveles = INDICADORES.map((ind) => ({ ind, nivel: nivelesSeleccionados[ind.clave] || 0 }));
                const min = Math.min(...niveles.map((n) => n.nivel));
                const max = Math.max(...niveles.map((n) => n.nivel));
                const raiz = niveles.filter((n) => n.nivel === min);
                const fortaleza = niveles.filter((n) => n.nivel === max);
                return (
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ background: "#FFF8EE", borderRadius: 10, padding: 16, border: "1px solid #E8D5A0" }}>
                      <div style={{ fontFamily: "sans-serif", fontSize: 10, letterSpacing: 2, color: "#B8860B", textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>
                        Zona de mayor crecimiento posible
                      </div>
                      {raiz.map(({ ind, nivel }) => (
                        <div key={ind.id} style={{ marginBottom: 8 }}>
                          <div style={{ fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: ind.color, marginBottom: 2 }}>
                            {ind.icono} {ind.nombre} — Nivel {nivel}: {ind.niveles[nivel - 1]?.nombre}
                          </div>
                          <div style={{ fontFamily: "sans-serif", fontSize: 12, color: "#555", lineHeight: 1.5 }}>
                            {ind.niveles[nivel - 1]?.posibilidad}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: "#F0F7F4", borderRadius: 10, padding: 16, border: "1px solid #A8D5C0" }}>
                      <div style={{ fontFamily: "sans-serif", fontSize: 10, letterSpacing: 2, color: "#1B4D3E", textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>
                        Fortaleza desde la cual crecer
                      </div>
                      {fortaleza.map(({ ind, nivel }) => (
                        <div key={ind.id} style={{ marginBottom: 8 }}>
                          <div style={{ fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: ind.color, marginBottom: 2 }}>
                            {ind.icono} {ind.nombre} — Nivel {nivel}: {ind.niveles[nivel - 1]?.nombre}
                          </div>
                          <div style={{ fontFamily: "sans-serif", fontSize: 12, color: "#555", lineHeight: 1.5 }}>
                            Esta fortaleza puede anclar el trabajo en las demás áreas.
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {completados < 5 && (
                <div style={{
                  background: "#F5F0EA", borderRadius: 10, padding: 16, textAlign: "center",
                  fontFamily: "sans-serif", fontSize: 13, color: "#888",
                }}>
                  Completa los {5 - completados} indicador(es) restante(s) para ver el análisis de tu perfil.
                </div>
              )}

              <div style={{
                marginTop: 20, background: "#003366", borderRadius: 10, padding: 16,
              }}>
                <div style={{ fontFamily: "sans-serif", fontSize: 10, letterSpacing: 2, color: "#C9A96E", textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>
                  Nota de discernimiento
                </div>
                <p style={{ fontFamily: "sans-serif", fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, margin: 0 }}>
                  Este mapa no es un juicio sino una invitación. El crecimiento en la vida interior no es lineal ni uniforme: avanzamos en unos indicadores mientras otros esperan su momento. Lo que importa no es el nivel en que estás, sino la dirección en que te mueves.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
