import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import powerfit from '../../assets/1212.png';
import automotora from '../../assets/im1.png';
import terrazas from '../../assets/im2.png';
import { useLanguage } from '../../context/LanguageContext';

const slides = [
  { image: terrazas },
  { image: automotora },
  { image: powerfit }
];

export default function WhatWeDo() {
  const { t } = useLanguage();
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
    <section id='whoweare'
      ref={ref}
      className="w-full min-h-screen bg-gray-950 text-white px-6 py-20 md:py-32 flex items-center justify-center relative"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600 blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-800 blur-3xl opacity-15 animate-pulse delay-300"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* Texto */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <span className="inline-block px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium tracking-wider">
              {t('digitalPower')}
            </span>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              dangerouslySetInnerHTML={{
                __html: `${t('transformBusiness')} <span class="text-blue-400">${t('webSolutions')}</span>`
              }}
            />
          </div>

          <motion.p
            className="text-lg text-gray-300 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            dangerouslySetInnerHTML={{
              __html: t('kiadDescription')
            }}
          />

          <div className="grid grid-cols-1 gap-4">
            {t('benefits', { returnObjects: true }).map((item, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-start gap-4 p-4 border-b border-gray-800/50 group-hover:border-blue-400/30 transition">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:scale-125 transition"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-blue-400 transition">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-lg transition-all duration-300 transform hover:scale-105 mt-6"
            >
              {t('talkAboutProject')}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Carrusel */}
        <motion.div
          className="relative w-full aspect-video max-w-2xl mx-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute -inset-2 rounded-2xl bg-blue-900/10 blur-lg z-0"></div>

          <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-800 shadow-2xl z-10">
            <AnimatePresence custom={direction}>
              <motion.img
                key={currentSlide}
                src={slides[currentSlide].image}
                alt={t(`slideAlts.${currentSlide}`)}
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
                  aria-label={`${t('slideControls.goToSlide')} ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/50 hover:bg-gray-800/80 p-2 rounded-full z-20 transition-all"
              aria-label={t('slideControls.previous')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/50 hover:bg-gray-800/80 p-2 rounded-full z-20 transition-all"
              aria-label={t('slideControls.next')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}