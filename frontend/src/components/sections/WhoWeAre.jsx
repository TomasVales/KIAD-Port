import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function WhoWeAre() {
    const { t } = useLanguage();

    return (
        <section id='whoweare' className='relative bg-gray-950 text-white py-12 md:py-24 px-4 sm:px-6'>
            <div className='max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 items-center'>

                {/* LEFT - Visual Widgets (Mobile First) */}
                <div className='relative w-full h-[380px] sm:h-[480px] order-2 lg:order-1'>
                    {/* Widget 1 - Sitio desplegado (centrado en mobile, ajustado en desktop) */}
                    <div className='bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-4 sm:p-5 w-full sm:w-72 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30'>
                        <h3 className='text-xs sm:text-sm font-semibold text-gray-300 mb-1 sm:mb-2'>Sitio desplegado</h3>
                        <div className='text-blue-400 font-bold text-xl sm:text-2xl mb-1'>kiad.dev</div>
                        <div className='flex items-center text-xs text-gray-400 mb-3 sm:mb-4'>
                            <span className='w-2 h-2 bg-green-400 rounded-full mr-2'></span>
                            <span>Online - Actualizado hace 3 min</span>
                        </div>
                        <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-all duration-300 transform hover:scale-[1.02]'>
                            Ver sitio en vivo
                        </button>
                    </div>

                    {/* Widget 2 - Configurador (visible solo en desktop) */}
                    <div className='hidden lg:block bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-4 sm:p-5 w-56 sm:w-64 absolute top-0 left-0 z-20 hover:z-40 transition-all duration-300 hover:shadow-xl'>
                        <h3 className='text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3'>Configuración rápida</h3>
                        <ul className='text-xs sm:text-sm text-gray-300 space-y-1 sm:space-y-2 mb-3 sm:mb-4'>
                            <li className='flex items-center'>
                                <span className='w-3 h-3 sm:w-4 sm:h-4 bg-green-400/20 rounded-full flex items-center justify-center mr-2'>
                                    <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full'></span>
                                </span>
                                <span>Diseño activado</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/20 rounded-full flex items-center justify-center mr-2'>
                                    <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full'></span>
                                </span>
                                <span>3 secciones activas</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='w-3 h-3 sm:w-4 sm:h-4 bg-gray-600 rounded-full flex items-center justify-center mr-2'>
                                    <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full'></span>
                                </span>
                                <span>Blog (inactivo)</span>
                            </li>
                        </ul>
                        <button className='w-full border border-blue-400 text-blue-400 hover:bg-blue-400/10 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition'>
                            Personalizar
                        </button>
                    </div>

                    {/* Widget 3 - Métricas (visible solo en desktop) */}
                    <div className='hidden lg:block bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-4 sm:p-5 w-56 sm:w-64 absolute bottom-0 right-0 z-20 hover:z-40 transition-all duration-300 hover:shadow-xl'>
                        <h3 className='text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3'>Rendimiento</h3>
                        <div className='flex justify-between items-center mb-1 sm:mb-2'>
                            <span className='text-xs text-gray-400'>Visitas:</span>
                            <span className='text-base sm:text-lg font-bold text-green-400'>+3.2K</span>
                        </div>
                        <div className='flex justify-between items-center mb-3 sm:mb-4'>
                            <span className='text-xs text-gray-400'>Conversión:</span>
                            <span className='text-base sm:text-lg font-bold text-blue-400'>4.8%</span>
                        </div>
                        <div className='h-1.5 sm:h-2 bg-gray-700 rounded-full mb-1'>
                            <div className='h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full' style={{width: '78%'}}></div>
                        </div>
                        <p className='text-xs text-gray-400 text-right'>+17% vs semana pasada</p>
                    </div>

                    {/* Widget 4 - Soporte (visible solo en desktop) */}
                    <div className='hidden lg:block bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-4 sm:p-5 w-52 sm:w-60 absolute top-0 right-0 z-10 hover:z-40 transition-all duration-300 hover:shadow-xl'>
                        <h3 className='text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3'>Soporte 24/7</h3>
                        <div className='flex items-center mb-3 sm:mb-4'>
                            <div className='bg-blue-400/10 p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3'>
                                <svg className='w-4 h-4 sm:w-5 sm:h-5 text-blue-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                                </svg>
                            </div>
                            <div>
                                <p className='text-2xs sm:text-xs text-gray-400'>Asistencia técnica</p>
                                <p className='text-xs sm:text-sm text-white'>Disponible ahora</p>
                            </div>
                        </div>
                        <button className='w-full bg-gray-700 hover:bg-gray-600 text-white py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition'>
                            Contactar
                        </button>
                    </div>
                </div>

                {/* RIGHT - Texto explicativo (primero en mobile) */}
                <div className='order-1 lg:order-2'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight'>
                        Controla y optimiza tu <span className='text-blue-400'>presencia digital</span> en tiempo real
                    </h1>
                    <p className='text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed'>
                        Con KIAD transformamos semanas de desarrollo en cuestión de horas. Nuestra plataforma automatiza los procesos técnicos mientras tú te enfocas en hacer crecer tu negocio.
                    </p>

                    <div className='space-y-6 sm:space-y-8'>
                        <div>
                            <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center'>
                                <span className='w-5 h-5 sm:w-6 sm:h-6 bg-blue-400/20 rounded-full flex items-center justify-center mr-2 sm:mr-3'>
                                    <svg className='w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                </span>
                                Diseño profesional
                            </h3>
                            <p className='text-sm sm:text-base text-gray-400 pl-7 sm:pl-9'>
                                Más de 40 plantillas premium adaptables. Cada diseño está optimizado para conversión y rendimiento.
                            </p>
                        </div>
                        <div>
                            <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center'>
                                <span className='w-5 h-5 sm:w-6 sm:h-6 bg-blue-400/20 rounded-full flex items-center justify-center mr-2 sm:mr-3'>
                                    <svg className='w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                </span>
                                Implementación express
                            </h3>
                            <p className='text-sm sm:text-base text-gray-400 pl-7 sm:pl-9'>
                                Tu sitio online en tiempo récord, con todas las funcionalidades que tu negocio necesita.
                            </p>
                        </div>
                    </div>

                    <div className='mt-8 sm:mt-12'>
                        <button className='w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl'>
                            Descubre cómo podemos ayudarte →
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default WhoWeAre;