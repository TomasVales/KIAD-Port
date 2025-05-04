import React from 'react'
import { useState, useEffect } from 'react';
import { ThreeDMarquee } from '../3DMarquee'
import powerfit from '../../assets/powerfit-landing.webp'
import portfoliogonza from '../../assets/portfolio-gonza.webp'
import portfoliotomi from '../../assets/portfolio-tomi.webp'
import estudiojuridico from '../../assets/estudiojuridico.webp'
import restaurante from '../../assets/essenza.webp'
import chronosphere from '../../assets/chronosphere.webp'
import illia from '../../assets/illia.webp'
import eclipse from '../../assets/eclipse.webp'
import automotora from '../../assets/automotora.webp'
import { useLanguage } from '../../context/LanguageContext'

function Home() {
    const images = [
        portfoliogonza,
        estudiojuridico,
        chronosphere,
        restaurante,
        illia,
        eclipse,
        automotora,
        powerfit,
        portfoliotomi
    ];

        const { t } = useLanguage();

        const [windowWidth, setWindowWidth] = useState(window.innerWidth);
        useEffect(() => {
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        const isMobile = windowWidth < 768;
    const displayedImages = isMobile ? images.slice(0, 6) : images;

    return (
        <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-t from-black to-gray-900 text-white px-4 relative overflow-hidden" id="home">
            <div className="max-w-4xl text-center relative z-20 select-none">
                <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight animate-fade-left animate-delay-1000">
                    {t('headline1')}
                </h1>
                <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight animate-fade-right animate-delay-1000 after:content-[''] after:block after:h-[1px] after:bg-white after:w-3/4 after:mx-auto after:mt-2">
                    {t('headline2')}
                </h1>
                <p className="text-sm sm:text-lg text-gray-200 font-semibold pt-8 animate-fade animate-delay-1500">
                    {t('paragraph')}
                </p>
                <div className="flex justify-center gap-4 mt-6">
                    <a href="#services" className="bg-white text-black px-4 py-2 text-sm sm:text-lg md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-300 hover:scale-105 transition animate-fade animate-delay-1600"> 
                        {t('discoverServices')}
                    </a>
                </div>
            </div>
            
            <div className="absolute inset-0 z-10 h-full w-full bg-black/60" />
            <ThreeDMarquee
                className="pointer-events-none absolute inset-0 h-full w-full z-0 animate-fade animate-delay-1000"
                images={displayedImages}
            />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </section>
    )
}

export default Home