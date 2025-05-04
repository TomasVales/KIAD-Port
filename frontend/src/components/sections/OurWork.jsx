import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import powerfit from '../../assets/im1.png';
import automotora from '../../assets/im2.png';
import terrazas from '../../assets/im3.png';

const slides = [
  { image: terrazas, alt: 'Proyecto Terrazas - Diseño web premium' },
  { image: automotora, alt: 'Automotora Virtual - Plataforma de ventas' },
  { image: powerfit, alt: 'PowerFit - Aplicación fitness interactiva' },
];

export default function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [trafficData, setTrafficData] = useState([30, 45, 60, 90, 120, 150, 180]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficData(prev => {
        const newData = [...prev];
        const lastValue = newData[newData.length - 1];
        newData.shift();
        newData.push(Math.max(50, lastValue + (Math.random() * 40 - 20)));
        return newData;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Normalizamos los datos para el SVG
  const normalizedData = trafficData.map(v => {
    const clamped = Math.max(0, Math.min(v, 200));
    return 100 - ((clamped / 200) * 80 + 10); // escala vertical de 10 a 90
  });

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-gray-950 text-white px-6 py-24 flex items-center justify-center relative overflow-hidden"
    >
      {/* Efectos de fondo similares a Who We Are */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600 blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-800 blur-3xl opacity-15 animate-pulse delay-300"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT TEXT */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="space-y-4">
            <span className="inline-block px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium tracking-wider">
              NUESTRO IMPACTO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug text-white">
              Soluciones digitales que generan <span className="text-blue-400">resultados medibles</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
              En KIAD no solo creamos sitios web, construimos sistemas que impulsan el crecimiento de tu negocio con datos reales.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
              <div className="ml-4">
                <h4 className="text-white font-medium">Crecimiento orgánico</h4>
                <p className="text-gray-400 text-sm mt-1">Estrategias SEO que aumentan tu visibilidad y tráfico cualificado.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
              <div className="ml-4">
                <h4 className="text-white font-medium">Experiencia fluida</h4>
                <p className="text-gray-400 text-sm mt-1">Diseños optimizados que mantienen a tus visitantes comprometidos.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
              <div className="ml-4">
                <h4 className="text-white font-medium">Conversión inteligente</h4>
                <p className="text-gray-400 text-sm mt-1">Técnicas comprobadas que transforman visitantes en clientes.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT - WIDGET DE TRÁFICO */}
        <motion.div
          className="relative w-full max-w-xl mx-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-blue-800/10 rounded-xl" />

          <div className="relative bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-xl z-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg">Tráfico en tiempo real</h3>
                <p className="text-blue-400 text-sm">Últimos 7 días</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">+42%</div>
                <p className="text-green-400 text-xs">vs. período anterior</p>
              </div>
            </div>

            <div className="h-40 relative">
              <svg 
                className="w-full h-full"
                viewBox="0 0 300 100"
                preserveAspectRatio="none"
              >
                <path
                  d={`M0,${normalizedData[0]} ${normalizedData.map((val, i) => `L${i * (300 / (normalizedData.length - 1))},${val}`).join(' ')}`}
                  stroke="#3B82F6"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d={`M0,${normalizedData[0]} ${normalizedData.map((val, i) => `L${i * (300 / (normalizedData.length - 1))},${val}`).join(' ')} L300,100 L0,100 Z`}
                  fill="url(#gradient)"
                  fillOpacity="0.2"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400">
                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                  <span key={i}>{day}</span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm text-gray-300">
                <span className="text-white font-medium">{trafficData[trafficData.length - 1].toFixed(1)}K</span> visitas hoy
              </div>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition">
                Ver detalles →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}