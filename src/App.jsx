import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURACIÓN DE ANIMACIONES ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

// --- BASE DE DATOS DE PROYECTOS ---
const misProyectos = [
  {
    id: 1,
    titulo: "Blulelula",
    resumen: "Objeto cinético lúdico impreso en 3D con mecanismo manual visible.",
    imagenPrincipal: "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530057/bIVELULA_1_ubahuh.png",
    detalleCompleto: "Inspirado en los Critters de Kikkerland, Blulelula es un objeto cinético diseñado con una estética lúdica: una libélula geométrica impresa en 3D. Su movimiento se basa en un mecanismo manual de cuerda similar al de los juguetes clásicos. Dentro de su cuerpo, una lámina metálica enrollada actúa como resorte helicoidal; al girar la perilla, almacena energía mecánica que, al soltarse, pone en movimiento un conjunto de engranajes. Esta energía se transforma en un movimiento rotacional continuo que da vida al delicado aleteo de la libélula.",
    galeria: [
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530163/bIVELULA_3_heufok.png",
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530163/BIVELULA_2_ahoaqv.png"
    ]
  },
  {
    id: 2,
    titulo: "Shapy",
    resumen: "Juguete didáctico modular en madera de pino para estimular la motricidad.",
    imagenPrincipal: "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530164/NI%C3%91OS3_p16d6p.png",
    detalleCompleto: "Shapy es un juguete didáctico modular diseñado para estimular la creatividad y la motricidad fina en niños y niñas. Combina formas geométricas encajables con un modo de juego libre o guiado por retos visuales. Fabricado con tecnología CNC para lograr cortes precisos, su diseño apuesta por la seguridad en el uso y la experiencia sensorial a través de colores vibrantes y texturas suaves, siendo ideal tanto para entornos educativos como para el hogar.",
    galeria: [
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530163/NI%C3%91OS2_ejtlri.png",
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530163/NI%C3%91OS1_pnsila.png"
    ]
  },
  {
    id: 3,
    titulo: "Desarrollo de Moldes",
    resumen: "Construcción de moldes en yeso y termoformados para repetición de piezas.",
    imagenPrincipal: "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530987/imagen_2026-04-30_013625980_qgaxcf.png",
    detalleCompleto: "Para este proyecto técnico se realizó la construcción de moldes en yeso usando objetos existentes como punto de partida. A la par, se desarrollaron moldes termoformados a partir de matrices fabricadas directamente por nosotros, con el objetivo de utilizar dichos moldes para la generación controlada y eficiente de repeticiones.",
    galeria: [
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530163/fotos_moldes_1_festhb.png",
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530163/FOTOS_MOLDES_3_lx9h75.png"
    ]
  },
  {
    id: 4,
    titulo: "Sevana",
    resumen: "Bolsos únicos en madera que combinan elegancia, funcionalidad y diseño minimalista.",
    imagenPrincipal: "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530164/SEVANA_1_xr9i8a.png",
    detalleCompleto: "Sevana es una marca sofisticada, atemporal y sin pretensiones. Su propósito es crear bolsos únicos hechos en madera para mujeres jóvenes que valoran la estética, la comodidad y los objetos con identidad. Sus diseños evocan la simplicidad y la belleza natural, inspirándose en dos elementos clave: la serenidad, calma y flujo del mar, junto con la elegancia, gracia y movimiento de las aves.",
    galeria: [
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530164/SEVANA_3_yp2zww.png",
      "https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530164/SEVANA_2_eb9jqk.png"
    ]
  }
];

function App() {
  const [proyectoAbierto, setProyectoAbierto] = useState(null);
  const cerrarModal = () => setProyectoAbierto(null);

  return (
    <div className="bg-[#d3d3c8] text-[#0f172a] font-sans min-h-screen overflow-hidden">
      
      {/* --- NAVEGACIÓN --- */}
      <nav className="fixed top-0 w-full bg-[#d3d3c8]/95 backdrop-blur-md z-50 shadow-sm border-b border-[#4a6274]/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-center space-x-6 md:space-x-12 font-bold text-xl md:text-2xl text-[#0f172a]">
          <a href="#home" className="hover:text-[#4a6274] transition">Home</a>
          <a href="#intro" className="hover:text-[#4a6274] transition">Intro</a>
          <a href="#proyectos" className="hover:text-[#4a6274] transition">Proyectos</a>
          <a href="#quien-soy" className="hover:text-[#4a6274] transition">Quién soy</a>
          <a href="#contacto" className="hover:text-[#4a6274] transition">Contacto</a>
        </div>
      </nav>

      {/* --- 1. HERO (INICIO) --- */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-6 bg-[#d3d3c8]">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-16">
          <motion.div className="flex-1" initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-7xl md:text-[9rem] font-extrabold tracking-tighter mb-8 text-[#0f172a] leading-none">
              Juan Camilo <br/><span className="text-[#4a6274]">Sinisterra S</span>
            </h1>
            <p className="text-2xl md:text-3xl text-[#0f172a]/80 mb-10 max-w-2xl leading-relaxed">
              Diseñador Industrial & Desarrollador. Impulsando marcas a través de diseño estratégico y soluciones tangibles.
            </p>
            <a href="#contacto" className="bg-[#4a6274] text-white text-xl px-10 py-5 rounded-full font-bold hover:bg-[#0f172a] transition shadow-lg hover:shadow-xl inline-block">
              Trabajemos Juntos
            </a>
          </motion.div>
          
          <motion.div className="flex-1 flex justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <div className="w-96 h-96 md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl bg-white">
              <img src="https://res.cloudinary.com/dt0jylgrv/image/upload/q_auto/f_auto/v1777530164/presentabel_eg7gbx.jpg" alt="Perfil" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. INTRODUCCIÓN --- */}
      <section id="intro" className="py-32 bg-white px-6 shadow-sm z-10 relative">
        <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#0f172a]">Liderando la transición de la <span className="text-[#4a6274]">idea al producto.</span></h2>
          <p className="text-xl md:text-2xl text-[#0f172a]/80 leading-relaxed">
            Transformo conceptos complejos en soluciones ejecutables aplicando pensamiento crítico y una comunicación asertiva. Con experiencia en liderar proyectos bajo presión, diseño productos pensados para el usuario y el mercado.
          </p>
        </motion.div>
      </section>

      {/* --- 3. PROYECTOS --- */}
      <section id="proyectos" className="py-32 bg-[#d3d3c8] px-6">
        <motion.div className="max-w-7xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold mb-16 text-center text-[#0f172a]">Proyectos Destacados</motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {misProyectos.map((proyecto) => (
              <motion.div 
                key={proyecto.id} 
                variants={fadeUp} 
                onClick={() => setProyectoAbierto(proyecto)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-transparent hover:border-[#4a6274]/30 flex flex-col"
              >
                <div className="h-72 md:h-96 overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src={proyecto.imagenPrincipal} alt={proyecto.titulo} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-[#0f172a]">{proyecto.titulo}</h3>
                  <p className="text-[#0f172a]/70 mb-6 flex-grow">{proyecto.resumen}</p>
                  <span className="inline-flex items-center text-[#4a6274] font-bold group-hover:text-[#0f172a] transition mt-auto">
                    Ver Detalles 
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- 4. QUIÉN SOY --- */}
      <section id="quien-soy" className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div className="flex-1" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-5xl md:text-7xl font-bold text-[#4a6274] mb-8">Quién soy</h2>
            <p className="text-xl text-[#0f172a]/80 mb-6 leading-relaxed">
              Me defino como un diseñador hacedor. Mi proceso no se queda en la superficie; inicia con un análisis riguroso y evoluciona hasta materializarse en el detalle técnico. En la Universidad ICESI, aprendí que la creatividad sin estructura es solo una idea, pero con el rigor del modelado 3D y el prototipado, se convierte en una solución real.
            </p>
            <p className="text-xl text-[#0f172a]/80 leading-relaxed">
              Soy quien conecta la visión estratégica con la ejecución tangible. Mi enfoque está en transformar la fricción del usuario en productos funcionales, integrando mi experiencia liderando equipos y procesos para asegurar que cada diseño cumpla su propósito en el mundo real.
            </p>
          </motion.div>
          
          <motion.div className="flex-1 relative w-full flex justify-center" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            {/* EL VIDEO OFICIAL (Link directo de Cloudinary) */}
            <video 
              src="https://res.cloudinary.com/dt0jylgrv/video/upload/WhatsApp_Video_2026-04-30_at_6.34.43_PM_wrkyg3.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="rounded-3xl shadow-2xl border-4 border-[#d3d3c8] relative z-10 w-full max-w-lg aspect-[4/5] object-cover bg-gray-100"
            />
          </motion.div>
        </div>
      </section>

      {/* --- 5. CONTACTO --- */}
      <section id="contacto" className="py-32 bg-[#0f172a] text-white px-6 text-center">
        <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-6xl md:text-8xl font-bold mb-8 text-[#d3d3c8]">Hablemos.</h2>
          <p className="text-2xl text-[#d3d3c8]/70 mb-12">
            ¿Tienes un proyecto en mente? Estoy disponible para colaboraciones, asesorías y proyectos de diseño.
          </p>
          
          <div className="flex justify-center gap-8 flex-wrap">
            {/* LINKEDIN */}
            <a href="https://www.linkedin.com/in/juan-camilo-sinisterra-sanclemente/" target="_blank" rel="noreferrer" className="p-5 bg-[#4a6274] rounded-full hover:bg-[#d3d3c8] hover:text-[#0f172a] transition transform hover:scale-110 shadow-lg" title="LinkedIn">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            {/* BEHANCE */}
            <a href="https://www.behance.net/juancasiniste2" target="_blank" rel="noreferrer" className="p-5 bg-[#4a6274] rounded-full hover:bg-[#d3d3c8] hover:text-[#0f172a] transition transform hover:scale-110 shadow-lg" title="Behance">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.546-1.436-2.35-2.461-2.35-1.378 0-2.339.96-2.504 2.35zm-8.533 9h-7.507v-16h7.273c4.12 0 6.001 2.705 5.473 5.473-.303 1.583-1.411 2.473-2.617 2.871 1.78.365 3.361 1.83 3.003 4.296-.445 3.075-3.056 3.36-5.625 3.36zm-4.507-6v4h2.932c1.786 0 2.733-.591 2.733-1.896 0-1.402-.857-2.104-2.822-2.104h-2.843zm0-8v4h2.51c1.554 0 2.428-.485 2.428-1.841 0-1.33-1.077-2.159-2.55-2.159h-2.388z"/></svg>
            </a>
            {/* INSTAGRAM */}
            <a href="https://www.instagram.com/jcs.art98?igsh=bTk5aXBlNTN1MWls&utm_source=qr" target="_blank" rel="noreferrer" className="p-5 bg-[#4a6274] rounded-full hover:bg-[#d3d3c8] hover:text-[#0f172a] transition transform hover:scale-110 shadow-lg" title="Instagram">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- MODAL (VENTANA EMERGENTE) --- */}
      <AnimatePresence>
        {proyectoAbierto && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]/80 p-4 md:p-10"
            onClick={cerrarModal}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }} 
              animate={{ y: 0, opacity: 1, scale: 1 }} 
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button 
                onClick={cerrarModal} 
                className="absolute top-6 right-6 p-4 bg-[#d3d3c8] text-[#0f172a] rounded-full hover:bg-[#4a6274] hover:text-white transition shadow-md z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="p-8 md:p-14">
                <h2 className="text-4xl md:text-6xl font-bold text-[#0f172a] mb-4">{proyectoAbierto.titulo}</h2>
                <p className="text-2xl text-[#4a6274] font-semibold mb-10">{proyectoAbierto.resumen}</p>
                
                <div className="w-full bg-gray-50 flex justify-center rounded-3xl overflow-hidden mb-10 shadow-lg">
                  <img src={proyectoAbierto.imagenPrincipal} alt={proyectoAbierto.titulo} className="w-full max-h-[500px] object-cover" />
                </div>
                
                <div className="bg-[#d3d3c8]/30 p-10 rounded-3xl shadow-sm mb-10">
                  <h3 className="text-3xl font-bold text-[#0f172a] mb-6">Sobre el Proyecto</h3>
                  <p className="text-xl text-[#0f172a]/80 leading-relaxed whitespace-pre-line">
                    {proyectoAbierto.detalleCompleto}
                  </p>
                </div>

                <h3 className="text-3xl font-bold text-[#0f172a] mb-6">Galería</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {proyectoAbierto.galeria.map((imgUrl, index) => (
                    <div key={index} className="w-full bg-gray-50 flex justify-center rounded-3xl overflow-hidden shadow-md">
                      <img src={imgUrl} alt={`Detalle ${index + 1}`} className="w-full h-80 object-cover hover:scale-105 transition duration-500" />
                    </div>
                  ))}
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