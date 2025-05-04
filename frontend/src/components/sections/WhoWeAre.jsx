import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function WhoWeAre() {
    const { t } = useLanguage();

    return (
        <section id='whoweare' className='relative bg-gray-950 text-white py-12 px-4 sm:px-6 lg:py-24'>
            <div className='max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 items-center'>

                {/* LEFT - Visual Widgets (Mobile First) */}
                <div className='relative w-full h-[300px] sm:h-[480px] order-2 lg:order-1'>
                    {/* Widget Principal - Versión móvil simplificada */}
                    <div className='bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-4 w-full max-w-[280px] mx-auto sm:w-72 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30'>
                        <h3 className='text-xs font-semibold text-gray-300 mb-2'>Sitio desplegado</h3>
                        <div className='text-blue-400 font-bold text-xl mb-2'>kiad.dev</div>
                        <div className='flex items-center text-xs text-gray-400 mb-3'>
                            <span className='w-2 h-2 bg-green-400 rounded-full mr-2'></span>
                            <span>Online - Actualizado hace 3 min</span>
                        </div>
                        <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm transition-all duration-300'>
                            Ver sitio en vivo
                        </button>
                    </div>

                    {/* Widget Secundario Móvil - Solo muestra uno adicional importante */}
                    <div className='lg:hidden bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-4 w-full max-w-[240px] absolute bottom-0 right-4 z-20'>
                        <h3 className='text-xs font-semibold text-gray-300 mb-2'>Rendimiento</h3>
                        <div className='flex justify-between items-center mb-1'>
                            <span className='text-2xs text-gray-400'>Visitas:</span>
                            <span className='text-sm font-bold text-green-400'>+3.2K</span>
                        </div>
                        <div className='h-1.5 bg-gray-700 rounded-full mb-1'>
                            <div className='h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full' style={{ width: '78%' }}></div>
                        </div>
                    </div>

                    {/* Widgets Desktop (se mantienen exactamente igual) */}
                    <div className='hidden lg:block bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-5 w-64 absolute top-0 left-0 z-20 hover:z-40 transition-all duration-300 hover:shadow-xl'>
                        <h3 className='text-sm font-semibold text-gray-300 mb-3'>Configuración rápida</h3>
                        <ul className='text-sm text-gray-300 space-y-2 mb-4'>
                            <li className='flex items-center'>
                                <span className='w-4 h-4 bg-green-400/20 rounded-full flex items-center justify-center mr-2'>
                                    <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                                </span>
                                <span>Diseño activado</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='w-4 h-4 bg-blue-400/20 rounded-full flex items-center justify-center mr-2'>
                                    <span className='w-2 h-2 bg-blue-400 rounded-full'></span>
                                </span>
                                <span>3 secciones activas</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center mr-2'>
                                    <span className='w-2 h-2 bg-gray-600 rounded-full'></span>
                                </span>
                                <span>Blog (inactivo)</span>
                            </li>
                        </ul>
                        <button className='w-full border border-blue-400 text-blue-400 hover:bg-blue-400/10 py-2 rounded-lg text-sm transition'>
                            Personalizar
                        </button>
                    </div>

                    <div className='hidden lg:block bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-5 w-64 absolute bottom-0 right-0 z-20 hover:z-40 transition-all duration-300 hover:shadow-xl'>
                        <h3 className='text-sm font-semibold text-gray-300 mb-3'>Rendimiento</h3>
                        <div className='flex justify-between items-center mb-2'>
                            <span className='text-xs text-gray-400'>Visitas:</span>
                            <span className='text-lg font-bold text-green-400'>+3.2K</span>
                        </div>
                        <div className='flex justify-between items-center mb-4'>
                            <span className='text-xs text-gray-400'>Conversión:</span>
                            <span className='text-lg font-bold text-blue-400'>4.8%</span>
                        </div>
                        <div className='h-2 bg-gray-700 rounded-full mb-1'>
                            <div className='h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full' style={{ width: '78%' }}></div>
                        </div>
                        <p className='text-xs text-gray-400 text-right'>+17% vs semana pasada</p>
                    </div>

                    <div className='hidden lg:block bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-5 w-60 absolute top-0 right-0 z-10 hover:z-40 transition-all duration-300 hover:shadow-xl'>
                        <h3 className='text-sm font-semibold text-gray-300 mb-3'>Soporte 24/7</h3>
                        <div className='flex items-center mb-4'>
                            <div className='bg-blue-400/10 p-2 rounded-lg mr-3'>
                                <svg className='w-5 h-5 text-blue-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className='text-xs text-gray-400'>Asistencia técnica</p>
                                <p className='text-sm text-white'>Disponible ahora</p>
                            </div>
                        </div>
                        <button className='w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm transition'>
                            Contactar
                        </button>
                    </div>

                    <div className="hidden lg:block bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-5 w-60 absolute bottom-0 left-0 z-10 hover:z-40 transition-all duration-300 hover:shadow-xl">
                        <h3 className="text-sm font-semibold text-gray-300 mb-3">Protección activa</h3>
                        <div className="flex items-center mb-3">
                            <div className="bg-green-400/10 p-2 rounded-lg mr-3">
                                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-1 2v3m-6-5c0-4.418 3.582-8 8-8s8 3.582 8 8c0 2.209-.895 4.209-2.343 5.657L12 21 5.343 16.657A7.963 7.963 0 016 13z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-white">Firewall activo</p>
                                <p className="text-xs text-gray-400">Sistema monitorizado 24/7</p>
                            </div>
                        </div>
                        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm transition">
                            Más info
                        </button>
                    </div>
                </div>

                {/* RIGHT - Texto explicativo */}
                <div className='order-1 lg:order-2'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight'>
                        Controla y optimiza tu <span className='text-blue-400'>presencia digital</span> en tiempo real
                    </h1>
                    <p className='text-base lg:text-lg text-gray-300 mb-6 lg:mb-8 leading-relaxed'>
                        Con KIAD transformamos semanas de desarrollo en cuestión de horas. Nuestra plataforma automatiza los procesos técnicos mientras tú te enfocas en hacer crecer tu negocio.
                    </p>

                    <div className='space-y-6 lg:space-y-8'>
                        <div>
                            <h3 className='text-lg lg:text-xl font-bold mb-2 lg:mb-3 flex items-center'>
                                <span className='w-5 h-5 lg:w-6 lg:h-6 bg-blue-400/20 rounded-full flex items-center justify-center mr-2 lg:mr-3'>
                                    <svg className='w-3 h-3 text-blue-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                Diseño profesional
                            </h3>
                            <p className='text-sm lg:text-base text-gray-400 pl-7 lg:pl-9'>
                                Más de 40 plantillas premium adaptables. Cada diseño está optimizado para conversión y rendimiento.
                            </p>
                        </div>
                        <div>
                            <h3 className='text-lg lg:text-xl font-bold mb-2 lg:mb-3 flex items-center'>
                                <span className='w-5 h-5 lg:w-6 lg:h-6 bg-blue-400/20 rounded-full flex items-center justify-center mr-2 lg:mr-3'>
                                    <svg className='w-3 h-3 text-blue-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                Implementación express
                            </h3>
                            <p className='text-sm lg:text-base text-gray-400 pl-7 lg:pl-9'>
                                Tu sitio online en tiempo récord, con todas las funcionalidades que tu negocio necesita.
                            </p>
                        </div>
                    </div>

                    <div className='mt-8 lg:mt-12'>
                        <button className='w-full lg:w-auto px-6 py-3 lg:px-8 lg:py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl'>
                            Descubre cómo podemos ayudarte →
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default WhoWeAre;