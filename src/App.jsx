import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// -------------------- ANIMACIONES --------------------
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

// -------------------- LINKS NAVBAR --------------------
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#intro", label: "Intro" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#quien-soy", label: "Quién soy" },
  { href: "#contacto", label: "Contacto" },
];

// -------------------- PROYECTOS --------------------
const misProyectos = [
  {
    id: 1,
    titulo: "Blulelula",
    categoria: "Objeto cinético",
    resumen: "Objeto cinético lúdico impreso en 3D con mecanismo manual visible.",
    rol: "Diseño conceptual, desarrollo formal, prototipado e integración del mecanismo.",
    objetivo:
      "Crear un objeto cinético lúdico que transformara energía mecánica manual en movimiento visible, comunicando ligereza, juego y precisión técnica.",
    proceso: [
      "Investigación de referentes cinéticos y juguetes mecánicos.",
      "Bocetación de la forma general y exploración de una estética geométrica.",
      "Modelado 3D de piezas estructurales y componentes móviles.",
      "Impresión 3D, pruebas de ensamble y ajustes del mecanismo.",
      "Validación del movimiento mediante engranajes y sistema de cuerda.",
    ],
    resultado:
      "Un prototipo funcional de libélula geométrica que integra impresión 3D, engranajes y un sistema de cuerda para generar movimiento continuo.",
    herramientas: ["Impresión 3D", "Mecanismos", "Prototipado"],
    imagenPrincipal:
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530057/bIVELULA_1_ubahuh.png",
    detalleCompleto:
      "Inspirado en los Critters de Kikkerland, Blulelula es un objeto cinético diseñado con una estética lúdica: una libélula geométrica impresa en 3D. Su movimiento se basa en un mecanismo manual de cuerda similar al de los juguetes clásicos. Dentro de su cuerpo, una lámina metálica enrollada actúa como resorte helicoidal; al girar la perilla, almacena energía mecánica que, al soltarse, pone en movimiento un conjunto de engranajes. Esta energía se transforma en un movimiento rotacional continuo que da vida al delicado aleteo de la libélula.",
    galeria: [
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530163/bIVELULA_3_heufok.png",
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530163/BIVELULA_2_ahoaqv.png",
    ],
  },
  {
    id: 2,
    titulo: "Shapy",
    categoria: "Diseño didáctico",
    resumen: "Juguete didáctico modular en madera de pino para estimular la motricidad.",
    rol: "Diseño de producto, desarrollo de sistema modular, prototipado y validación formal.",
    objetivo:
      "Diseñar un juguete didáctico que estimulara la creatividad, el reconocimiento de formas y la motricidad fina mediante piezas seguras, simples y atractivas.",
    proceso: [
      "Definición del usuario y análisis de necesidades educativas.",
      "Exploración de formas geométricas y dinámicas de juego.",
      "Desarrollo de piezas modulares y retos visuales.",
      "Fabricación mediante corte CNC y acabados seguros.",
      "Evaluación de uso, ergonomía, color y experiencia sensorial.",
    ],
    resultado:
      "Un juguete modular en madera que permite juego libre o guiado, combinando aprendizaje, manipulación física y exploración creativa.",
    herramientas: ["CNC", "Diseño infantil", "Madera"],
    imagenPrincipal:
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530164/NI%C3%91OS3_p16d6p.png",
    detalleCompleto:
      "Shapy es un juguete didáctico modular diseñado para estimular la creatividad y la motricidad fina en niños y niñas. Combina formas geométricas encajables con un modo de juego libre o guiado por retos visuales. Fabricado con tecnología CNC para lograr cortes precisos, su diseño apuesta por la seguridad en el uso y la experiencia sensorial a través de colores vibrantes y texturas suaves, siendo ideal tanto para entornos educativos como para el hogar.",
    galeria: [
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530163/NI%C3%91OS2_ejtlri.png",
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530163/NI%C3%91OS1_pnsila.png",
    ],
  },
  {
    id: 3,
    titulo: "Desarrollo de Moldes",
    categoria: "Proceso técnico",
    resumen: "Construcción de moldes en yeso y termoformados para repetición de piezas.",
    rol: "Desarrollo técnico, fabricación de matrices, construcción de moldes y documentación del proceso.",
    objetivo:
      "Explorar procesos de reproducción de piezas mediante moldes en yeso y termoformado, entendiendo sus posibilidades técnicas y productivas.",
    proceso: [
      "Selección de objetos base y análisis de geometrías reproducibles.",
      "Construcción de matrices y preparación de superficies.",
      "Fabricación de moldes en yeso.",
      "Desarrollo de moldes termoformados para repetición de piezas.",
      "Pruebas de reproducción, desmolde y ajuste de resultados.",
    ],
    resultado:
      "Un conjunto de moldes funcionales que permiten comprender procesos de repetición, fabricación seriada y control formal de piezas.",
    herramientas: ["Yeso", "Termoformado", "Matrices"],
    imagenPrincipal:
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530987/imagen_2026-04-30_013625980_qgaxcf.png",
    detalleCompleto:
      "Para este proyecto técnico se realizó la construcción de moldes en yeso usando objetos existentes como punto de partida. A la par, se desarrollaron moldes termoformados a partir de matrices fabricadas directamente por nosotros, con el objetivo de utilizar dichos moldes para la generación controlada y eficiente de repeticiones.",
    galeria: [
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530163/fotos_moldes_1_festhb.png",
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530163/FOTOS_MOLDES_3_lx9h75.png",
    ],
  },
  {
    id: 4,
    titulo: "Sevana",
    categoria: "Marca de producto",
    resumen: "Bolsos únicos en madera que combinan elegancia, funcionalidad y diseño minimalista.",
    rol: "Conceptualización de marca, diseño de producto, narrativa visual y desarrollo formal.",
    objetivo:
      "Crear una propuesta de producto con identidad propia, combinando madera, elegancia y funcionalidad en una línea de bolsos con lenguaje natural y atemporal.",
    proceso: [
      "Definición de concepto de marca y usuario objetivo.",
      "Investigación de referentes naturales, especialmente mar y aves.",
      "Exploración formal de siluetas, materiales y lenguaje visual.",
      "Desarrollo de propuesta estética y funcional.",
      "Construcción de narrativa de producto y presentación visual.",
    ],
    resultado:
      "Una propuesta de marca y producto que comunica serenidad, elegancia y diseño minimalista mediante bolsos en madera con identidad diferenciada.",
    herramientas: ["Branding", "Producto", "Madera"],
    imagenPrincipal:
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530164/SEVANA_1_xr9i8a.png",
    detalleCompleto:
      "Sevana es una marca sofisticada, atemporal y sin pretensiones. Su propósito es crear bolsos únicos hechos en madera para mujeres jóvenes que valoran la estética, la comodidad y los objetos con identidad. Sus diseños evocan la simplicidad y la belleza natural, inspirándose en dos elementos clave: la serenidad, calma y flujo del mar, junto con la elegancia, gracia y movimiento de las aves.",
    galeria: [
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530164/SEVANA_3_yp2zww.png",
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530164/SEVANA_2_eb9jqk.png",
    ],
  },
];

// -------------------- COMPONENTE PRINCIPAL --------------------
function App() {
  const [proyectoAbierto, setProyectoAbierto] = useState(null);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [navbarConFondo, setNavbarConFondo] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState("home");

  const cerrarModal = () => setProyectoAbierto(null);

  // Bloquea el scroll cuando el modal está abierto y permite cerrar con Escape
  useEffect(() => {
    document.body.style.overflow = proyectoAbierto ? "hidden" : "auto";

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        cerrarModal();
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [proyectoAbierto]);

  // Cambia la apariencia de la navbar al hacer scroll
  useEffect(() => {
    const manejarScroll = () => {
      setNavbarConFondo(window.scrollY > 40);
    };

    manejarScroll();

    window.addEventListener("scroll", manejarScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", manejarScroll);
    };
  }, []);

  // Detecta la sección activa para resaltar el link correspondiente
  useEffect(() => {
    const secciones = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            setSeccionActiva(entrada.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    secciones.forEach((seccion) => observer.observe(seccion));

    return () => {
      secciones.forEach((seccion) => observer.unobserve(seccion));
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#d3d3c8] font-sans text-[#0f172a]">
      {/* FONDO DECORATIVO SUAVE */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
        <div className="absolute left-[-12rem] top-20 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
        <div className="absolute bottom-20 right-[-10rem] h-96 w-96 rounded-full bg-[#4a6274]/20 blur-3xl" />
      </div>

      {/* -------------------- NAVBAR -------------------- */}
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          navbarConFondo
            ? "border-b border-[#4a6274]/20 bg-[#d3d3c8]/90 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "border-b border-transparent bg-[#d3d3c8]/70 backdrop-blur-md"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 md:px-8 ${
            navbarConFondo ? "h-16" : "h-20"
          }`}
        >
          {/* LOGO / MARCA */}
          <a
            href="#home"
            onClick={() => setMenuAbierto(false)}
            className="group flex items-center gap-3"
            aria-label="Ir al inicio"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0f172a] text-sm font-black text-white shadow-md transition group-hover:bg-[#4a6274]">
              JS
            </span>

            <span className="hidden text-lg font-extrabold tracking-tight text-[#0f172a] transition group-hover:text-[#4a6274] sm:block">
              Juan Camilo
            </span>
          </a>

          {/* LINKS ESCRITORIO */}
          <div className="hidden items-center gap-2 rounded-full border border-[#4a6274]/15 bg-white/25 px-2 py-2 text-base font-bold shadow-sm md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const activo = seccionActiva === id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={activo ? "page" : undefined}
                  className={`rounded-full px-5 py-2 transition-all duration-300 ${
                    activo
                      ? "bg-[#0f172a] text-white shadow-md"
                      : "text-[#0f172a] hover:bg-white/70 hover:text-[#4a6274]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* BOTÓN CONTACTO ESCRITORIO */}
          <a
            href="#contacto"
            className="hidden rounded-full bg-[#4a6274] px-5 py-3 text-sm font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#0f172a] lg:inline-flex"
          >
            Hablemos
          </a>

          {/* BOTÓN MÓVIL */}
          <button
            type="button"
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f172a] text-2xl font-bold text-white shadow-md transition hover:bg-[#4a6274] md:hidden"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
          >
            {menuAbierto ? "×" : "☰"}
          </button>
        </div>

        {/* MENÚ MÓVIL */}
        <AnimatePresence>
          {menuAbierto && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="px-5 pb-5 md:hidden"
            >
              <div className="overflow-hidden rounded-[1.5rem] border border-[#4a6274]/15 bg-white/80 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl">
                <div className="flex flex-col gap-1 text-lg font-bold">
                  {navLinks.map((link) => {
                    const id = link.href.replace("#", "");
                    const activo = seccionActiva === id;

                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuAbierto(false)}
                        className={`rounded-2xl px-5 py-4 transition ${
                          activo
                            ? "bg-[#0f172a] text-white"
                            : "text-[#0f172a] hover:bg-[#d3d3c8]/60 hover:text-[#4a6274]"
                        }`}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {/* -------------------- HERO -------------------- */}
        <section
          id="home"
          className="flex min-h-[100svh] scroll-mt-24 items-center justify-center bg-[#d3d3c8] px-5 pb-16 pt-28 md:px-8"
        >
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.span
                variants={fadeUp}
                className="mb-5 inline-flex rounded-full border border-[#4a6274]/25 bg-white/35 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#4a6274]"
              >
                Diseño · Producto · Prototipado
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="mb-6 text-[clamp(4rem,10vw,6rem)] font-extrabold leading-[0.9] tracking-tighter text-[#0f172a]"
              >
                Juan Camilo
                <br />
                <span className="text-[#4a6274]">Sinisterra</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[#0f172a]/80 md:text-xl lg:mx-0 lg:text-2xl"
              >
                Diseñador Industrial & Desarrollador. Impulsando marcas a través
                de diseño estratégico, prototipado y soluciones tangibles.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
              >
                <a
                  href="#proyectos"
                  className="w-full rounded-full bg-[#0f172a] px-8 py-4 text-center text-base font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#4a6274] hover:shadow-xl sm:w-auto md:text-lg"
                >
                  Ver proyectos
                </a>

                <a
                  href="#contacto"
                  className="w-full rounded-full border-2 border-[#4a6274] px-8 py-4 text-center text-base font-bold text-[#0f172a] transition hover:-translate-y-1 hover:bg-[#4a6274] hover:text-white sm:w-auto md:text-lg"
                >
                  Trabajemos juntos
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative mx-auto flex w-full max-w-[520px] justify-center"
            >
              <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-3xl border-2 border-[#4a6274]/30 md:block" />
              <div className="absolute bottom-10 right-0 hidden h-32 w-32 rounded-full bg-white/40 blur-sm md:block" />

              <div className="relative h-72 w-72 overflow-hidden rounded-full border-[10px] border-white bg-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:h-80 sm:w-80 lg:h-[470px] lg:w-[470px]">
                <img
                  src="https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530164/presentabel_eg7gbx.jpg"
                  alt="Retrato profesional de Juan Camilo Sinisterra"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* -------------------- INTRO -------------------- */}
        <section
          id="intro"
          className="relative scroll-mt-24 bg-white px-5 py-20 shadow-sm md:px-8 md:py-28"
        >
          <motion.div
            className="mx-auto max-w-5xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="mb-7 text-4xl font-extrabold leading-tight text-[#0f172a] md:text-6xl"
            >
              Liderando la transición de la{" "}
              <span className="text-[#4a6274]">idea al producto.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-4xl text-lg leading-relaxed text-[#0f172a]/75 md:text-2xl"
            >
              Transformo conceptos complejos en soluciones ejecutables aplicando
              pensamiento crítico, comunicación asertiva y una mirada enfocada
              en el usuario, el mercado y la viabilidad técnica.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {["Estrategia", "Prototipado", "Modelado 3D", "Producto"].map(
                (item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="rounded-3xl border border-[#4a6274]/15 bg-[#d3d3c8]/35 px-6 py-6 text-center shadow-sm"
                  >
                    <p className="text-lg font-extrabold text-[#0f172a]">
                      {item}
                    </p>
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>
        </section>

        {/* -------------------- PROYECTOS -------------------- */}
        <section
          id="proyectos"
          className="scroll-mt-24 bg-[#d3d3c8] px-5 py-16 md:px-8 md:py-24"
        >
          <motion.div
            className="mx-auto max-w-7xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-14 text-center">
              <span className="mb-4 inline-flex rounded-full bg-white/45 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#4a6274]">
                Portafolio
              </span>

              <h2 className="text-4xl font-extrabold text-[#0f172a] md:text-6xl">
                Proyectos destacados
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {misProyectos.map((proyecto) => (
                <motion.article
                  key={proyecto.id}
                  variants={fadeUp}
                  onClick={() => setProyectoAbierto(proyecto)}
                  className="group cursor-pointer overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(15,23,42,0.18)]"
                >
                  <div className="relative h-64 overflow-hidden bg-[#0f172a]/5 sm:h-72 lg:h-[360px]">
                    <img
                      src={proyecto.imagenPrincipal}
                      alt={`Imagen principal del proyecto ${proyecto.titulo}`}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="absolute bottom-5 left-5 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="rounded-full bg-white px-5 py-2 text-sm font-extrabold text-[#0f172a] shadow-lg">
                        Ver caso de estudio
                      </span>
                    </div>
                  </div>

                  <div className="p-7 md:p-8">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#d3d3c8]/70 px-4 py-2 text-sm font-bold text-[#4a6274]">
                        {proyecto.categoria}
                      </span>
                    </div>

                    <h3 className="mb-3 text-2xl font-extrabold text-[#0f172a] md:text-3xl">
                      {proyecto.titulo}
                    </h3>

                    <p className="mb-6 text-base leading-relaxed text-[#0f172a]/70 md:text-lg">
                      {proyecto.resumen}
                    </p>

                    <div className="mb-7 flex flex-wrap gap-2">
                      {proyecto.herramientas.map((herramienta) => (
                        <span
                          key={herramienta}
                          className="rounded-full border border-[#4a6274]/20 px-3 py-1 text-sm font-semibold text-[#0f172a]/70"
                        >
                          {herramienta}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center font-extrabold text-[#4a6274] transition group-hover:text-[#0f172a]">
                      Ver detalles
                      <svg
                        className="ml-2 h-4 w-4 transition group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* -------------------- QUIÉN SOY -------------------- */}
        <section
          id="quien-soy"
          className="scroll-mt-24 bg-white px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeUp}
                className="mb-5 inline-flex rounded-full bg-[#d3d3c8]/50 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#4a6274]"
              >
                Perfil profesional
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mb-8 text-5xl font-extrabold leading-tight text-[#4a6274] md:text-7xl"
              >
                Quién soy
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mb-6 text-lg leading-relaxed text-[#0f172a]/75 md:text-xl"
              >
                Me defino como un diseñador hacedor. Mi proceso no se queda en
                la superficie; inicia con un análisis riguroso y evoluciona
                hasta materializarse en el detalle técnico. En la Universidad
                ICESI, aprendí que la creatividad sin estructura es solo una
                idea, pero con el rigor del modelado 3D y el prototipado, se
                convierte en una solución real.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-lg leading-relaxed text-[#0f172a]/75 md:text-xl"
              >
                Conecto la visión estratégica con la ejecución tangible. Mi
                enfoque está en transformar la fricción del usuario en productos
                funcionales, integrando liderazgo, criterio técnico y procesos
                claros para que cada diseño cumpla su propósito en el mundo real.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border-2 border-[#d3d3c8]" />

              <video
                src="https://res.cloudinary.com/dt0jylgrv/video/upload/WhatsApp_Video_2026-04-30_at_6.34.43_PM_wrkyg3.mp4"
                controls
                playsInline
                preload="metadata"
                className="relative z-10 aspect-[4/5] w-full rounded-[2rem] border-4 border-[#d3d3c8] bg-gray-100 object-cover shadow-[0_25px_80px_rgba(15,23,42,0.20)]"
              />

              <p className="mt-4 text-center text-sm text-[#0f172a]/55">
                Video de presentación profesional.
              </p>
            </motion.div>
          </div>
        </section>

        {/* -------------------- CONTACTO -------------------- */}
        <section
          id="contacto"
          className="scroll-mt-24 bg-[#0f172a] px-5 py-20 text-center text-white md:px-8 md:py-28"
        >
          <motion.div
            className="mx-auto max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              className="mb-5 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#d3d3c8]"
            >
              Contacto
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mb-8 text-6xl font-extrabold text-[#d3d3c8] md:text-8xl"
            >
              Hablemos.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-[#d3d3c8]/75 md:text-2xl"
            >
              ¿Tienes un proyecto en mente? Estoy disponible para
              colaboraciones, asesorías y proyectos de diseño.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-5 md:gap-8"
            >
              <a
                href="https://www.linkedin.com/in/juan-camilo-sinisterra-sanclemente/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4a6274] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#d3d3c8] hover:text-[#0f172a] md:h-20 md:w-20"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://www.behance.net/juancasiniste2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4a6274] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#d3d3c8] hover:text-[#0f172a] md:h-20 md:w-20"
                title="Behance"
                aria-label="Behance"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.546-1.436-2.35-2.461-2.35-1.378 0-2.339.96-2.504 2.35zm-8.533 9h-7.507v-16h7.273c4.12 0 6.001 2.705 5.473 5.473-.303 1.583-1.411 2.473-2.617 2.871 1.78.365 3.361 1.83 3.003 4.296-.445 3.075-3.056 3.36-5.625 3.36zm-4.507-6v4h2.932c1.786 0 2.733-.591 2.733-1.896 0-1.402-.857-2.104-2.822-2.104h-2.843zm0-8v4h2.51c1.554 0 2.428-.485 2.428-1.841 0-1.33-1.077-2.159-2.55-2.159h-2.388z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/jcs.art98?igsh=bTk5aXBlNTN1MWls&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4a6274] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#d3d3c8] hover:text-[#0f172a] md:h-20 md:w-20"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* -------------------- MODAL PROYECTO -------------------- */}
      <AnimatePresence>
        {proyectoAbierto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={cerrarModal}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]/85 p-3 backdrop-blur-sm md:p-8"
          >
            <motion.div
              initial={{ y: 35, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 35, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
            >
              <button
                onClick={cerrarModal}
                className="sticky top-4 z-30 ml-auto mr-4 mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#d3d3c8] text-[#0f172a] shadow-lg transition hover:bg-[#4a6274] hover:text-white"
                aria-label="Cerrar proyecto"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="px-5 pb-8 pt-0 md:px-10 md:pb-12">
                {/* HERO DEL PROYECTO */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <div>
                    <span className="mb-4 inline-flex rounded-full bg-[#d3d3c8]/70 px-4 py-2 text-sm font-bold text-[#4a6274]">
                      {proyectoAbierto.categoria}
                    </span>

                    <h2 className="mb-4 text-4xl font-extrabold leading-tight text-[#0f172a] md:text-6xl">
                      {proyectoAbierto.titulo}
                    </h2>

                    <p className="mb-6 text-lg font-semibold leading-relaxed text-[#4a6274] md:text-2xl">
                      {proyectoAbierto.resumen}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {proyectoAbierto.herramientas?.map((herramienta) => (
                        <span
                          key={herramienta}
                          className="rounded-full border border-[#4a6274]/20 px-3 py-1 text-sm font-semibold text-[#0f172a]/70"
                        >
                          {herramienta}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[1.5rem] bg-[#d3d3c8]/30 shadow-lg">
                    <img
                      src={proyectoAbierto.imagenPrincipal}
                      alt={`Imagen principal del proyecto ${proyectoAbierto.titulo}`}
                      className="h-full max-h-[430px] w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* DATOS CLAVE */}
                <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
                  <div className="rounded-[1.5rem] bg-[#0f172a] p-6 text-white shadow-lg">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d3d3c8]/70">
                      Rol
                    </p>
                    <p className="text-base leading-relaxed text-white/90">
                      {proyectoAbierto.rol}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] bg-[#d3d3c8]/40 p-6 shadow-sm">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#4a6274]">
                      Objetivo
                    </p>
                    <p className="text-base leading-relaxed text-[#0f172a]/75">
                      {proyectoAbierto.objetivo}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] bg-[#d3d3c8]/40 p-6 shadow-sm">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#4a6274]">
                      Resultado
                    </p>
                    <p className="text-base leading-relaxed text-[#0f172a]/75">
                      {proyectoAbierto.resultado}
                    </p>
                  </div>
                </div>

                {/* DESCRIPCIÓN */}
                <div className="mt-10 rounded-[1.5rem] bg-[#d3d3c8]/25 p-6 md:p-9">
                  <h3 className="mb-5 text-2xl font-extrabold text-[#0f172a] md:text-3xl">
                    Sobre el proyecto
                  </h3>

                  <p className="text-base leading-relaxed text-[#0f172a]/75 md:text-lg">
                    {proyectoAbierto.detalleCompleto}
                  </p>
                </div>

                {/* PROCESO */}
                <div className="mt-10">
                  <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                      <span className="mb-3 inline-flex rounded-full bg-[#d3d3c8]/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4a6274]">
                        Caso de estudio
                      </span>

                      <h3 className="text-2xl font-extrabold text-[#0f172a] md:text-3xl">
                        Proceso de diseño
                      </h3>
                    </div>

                    <p className="max-w-md text-sm leading-relaxed text-[#0f172a]/55">
                      Una mirada breve al camino seguido desde la idea inicial
                      hasta el desarrollo de la propuesta final.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                    {proyectoAbierto.proceso?.map((paso, index) => (
                      <div
                        key={paso}
                        className="relative rounded-[1.25rem] border border-[#4a6274]/15 bg-white p-5 shadow-sm"
                      >
                        <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0f172a] text-sm font-extrabold text-white">
                          {index + 1}
                        </span>

                        <p className="text-sm leading-relaxed text-[#0f172a]/75">
                          {paso}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GALERÍA */}
                <div className="mt-10">
                  <h3 className="mb-6 text-2xl font-extrabold text-[#0f172a] md:text-3xl">
                    Galería del proyecto
                  </h3>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {proyectoAbierto.galeria?.map((imgUrl, index) => (
                      <div
                        key={imgUrl}
                        className="overflow-hidden rounded-[1.5rem] bg-gray-100 shadow-md"
                      >
                        <img
                          src={imgUrl}
                          alt={`Detalle ${index + 1} del proyecto ${proyectoAbierto.titulo}`}
                          className="h-72 w-full object-cover transition duration-500 hover:scale-105 md:h-80"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA FINAL */}
                <div className="mt-12 rounded-[1.5rem] bg-[#0f172a] p-7 text-center text-white md:p-10">
                  <h3 className="mb-3 text-2xl font-extrabold md:text-3xl">
                    ¿Quieres hablar sobre un proyecto similar?
                  </h3>

                  <p className="mx-auto mb-6 max-w-2xl text-white/70">
                    Este caso refleja una forma de trabajo basada en análisis,
                    prototipado y desarrollo de soluciones tangibles.
                  </p>

                  <a
                    href="#contacto"
                    onClick={cerrarModal}
                    className="inline-flex rounded-full bg-[#d3d3c8] px-7 py-4 font-extrabold text-[#0f172a] transition hover:-translate-y-1 hover:bg-white"
                  >
                    Contactar
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;