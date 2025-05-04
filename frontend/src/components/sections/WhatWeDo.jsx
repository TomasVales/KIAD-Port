import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import powerfit from '../../assets/im1.png';
import automotora from '../../assets/im2.png';
import terrazas from '../../assets/im3.png';

const slides = [
    { image: terrazas, alt: "Proyecto Terrazas - Diseño web premium" },
    { image: automotora, alt: "Automotora Virtual - Plataforma de ventas" },
    { image: powerfit, alt: "PowerFit - Aplicación fitness interactiva" }
];

const benefits = [
    {
        title: "Diseño web premium",
        desc: "Sitios responsive que se adaptan perfectamente a cualquier dispositivo",
        icon: ""
    },
    {
        title: "SEO avanzado",
        desc: "Posicionamos tu marca en los primeros resultados de búsqueda",
        icon: ""
    },
    {
        title: "Tecnología de punta",
        desc: "React, Next.js, Tailwind CSS y las últimas herramientas del mercado",
        icon: ""
    },
    {
        title: "Rendimiento garantizado",
        desc: "Webs ultrarrápidas con optimización de Core Web Vitals",
        icon: ""
    },
];

export default function WhatWeDo() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section
            ref={ref}
            className="w-full min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white px-6 py-20 md:py-32 flex items-center justify-center overflow-hidden relative scroll-smooth"
        >
            {/* Efectos de fondo */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-kiad-cyan blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-kiad-purple blur-3xl opacity-20 animate-pulse delay-300"></div>
            </div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Texto */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="space-y-4">
                        <span className="inline-block px-3 py-1 bg-gray-800/50 text-kiad-cyan rounded-full text-sm font-medium mb-2">
                            Transformación Digital
                        </span>

                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Potencia tu negocio en <span className="text-kiad-cyan">digital</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        className="text-xl text-gray-300 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        En <span className="font-semibold text-white">KIAD</span> no solo creamos webs impactantes,
                        sino <span className="text-kiad-cyan">experiencias digitales</span> que generan resultados
                        tangibles para tu empresa.
                    </motion.p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((item, index) => (
                            <motion.li
                                key={index}
                                className="p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-kiad-cyan/30 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <h3 className="font-semibold text-white">{item.title}</h3>
                                        <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.li>
                        ))}
                    </ul>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <a
                            href="#contact"
                            className="group mt-8 inline-block px-8 py-4 rounded-xl bg-[#030712] hover:bg-gray-900 text-white font-semibold text-lg shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-kiad-cyan/40 relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center">
                                Hablemos de tu proyecto
                                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </a>

                    </motion.div>
                </motion.div>

                {/* Carrusel mejorado */}
                <motion.div
                    className="relative w-full aspect-video max-w-4xl mx-auto"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-kiad-cyan to-kiad-purple opacity-20 blur-lg z-0 animate-pulse"></div>

                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-800/50 shadow-2xl z-10">
                        <AnimatePresence custom={direction}>
                            <motion.img
                                key={currentSlide}
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].alt}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                custom={direction}
                                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                            />
                        </AnimatePresence>

                        {/* Controles del carrusel */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentSlide ? 1 : -1);
                                        setCurrentSlide(index);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-gray-500/50'}`}
                                    aria-label={`Ir al slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/50 hover:bg-gray-800/80 p-2 rounded-full z-20 transition-all"
                            aria-label="Slide anterior"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/50 hover:bg-gray-800/80 p-2 rounded-full z-20 transition-all"
                            aria-label="Siguiente slide"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
