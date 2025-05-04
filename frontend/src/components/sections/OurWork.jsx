import React from 'react';
import devImage from '../../assets/polle.jpg';



const items = [
    { title: "Landing pages efectivas", desc: "Diseñadas para convertir visitantes en clientes." },
    { title: "Tiendas online escalables", desc: "Optimización total en velocidad, UX y ventas." },
    { title: "Automatización de procesos", desc: "Gestión de turnos, pedidos, stock y más." },
    { title: "Portfolios profesionales", desc: "Tu talento necesita presencia de alto impacto." },
    { title: "Reservas y pedidos online", desc: "Digitalizá tu negocio local sin depender de Instagram." },
    { title: "Seguridad web total", desc: "Protección contra amenazas y cumplimiento legal." }
];

export default function OurWork() {
    return (
        <section className="bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white py-24 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <p className="text-kiad-cyan uppercase font-semibold text-sm mb-2">Tenemos más</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Y eso no es todo…</h2>
                <p className="text-gray-400 text-md mb-12 max-w-xl">
                    Sea cual sea tu negocio, en KIAD tenemos las soluciones digitales que estás buscando.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10">
                    {items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-kiad-cyan flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Imagen decorativa */}
                <div className="mt-16 rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
                    <img
                        src={devImage}
                        alt="Desarrollador trabajando"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
