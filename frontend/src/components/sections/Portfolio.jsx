import React from 'react'
import { Carousel } from '../CarouselPortfolio'
import terrazasdellago from '../../assets/terrazasdellago.webp'
import powerfit from '../../assets/powerfit-landing.webp'
import portfoliogonza from '../../assets/portfolio-gonza.webp'
import portfoliotomi from '../../assets/portfolio-tomi.webp'
import portfoliopolle from '../../assets/portfolio-polle.webp'
import estudiojuridico from '../../assets/estudiojuridico.webp'
import spikeboost from '../../assets/spikeboost.webp'
import essenza from '../../assets/essenza.webp'
import cloud from '../../assets/cloud.webp'
import chronosphere from '../../assets/chronosphere.webp'
import illia from '../../assets/illia.webp'
import eclipse from '../../assets/eclipse.webp'
import automotora from '../../assets/automotora.webp'
import afrofita from '../../assets/afrofita.webp'
import { useLanguage } from '../../context/LanguageContext'

function Portfolio() {

    const { t } = useLanguage();

    const slideData = [
        {
            title: "Chronosphere",
            src: chronosphere
        },
        {
            title: "Automotora",
            src: automotora
        },
        {
            title: "Eclipse",
            src: eclipse
        },
        {
            title: "Estudio Jurídico",
            src: estudiojuridico,
        },
        {
            title: "Afrofita",
            src: afrofita
        },
        {
            title: "PowerFit",
            src: powerfit,
        },
        {
            title: "Terrazas del Lago",
            src: terrazasdellago,
        },
        {
            title: "Portfolio",
            src: portfoliopolle
        },
        {
            title: "Portfolio",
            src: portfoliogonza,
        },
        {
            title: "Portfolio",
            src: portfoliotomi
        },
        {
            title: "El matador",
            src: illia
        },
        {
            title: "Essenza",
            src: essenza,
        },
        {
            title: "SpikeBoost",
            src: spikeboost,
        },
        {
            title: "Cloud Delivery",
            src: cloud
        }
    ];

    return (
        <section
        id="portfolio"
        className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-black to-gray-950 py-16 px-4 flex flex-col items-center justify-center text-white">
            <div className="mb-10 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6">{t('ourProjects')}</h1>
                <p className="text-gray-400 text-[15px] lg:text-[18px] max-w-xl mx-auto">
                    {t('learnAbout')}
                </p>
            </div>
            <div className="w-full max-w-6xl">
                <Carousel slides={slideData} />
            </div>
        </section>
    )
}

export default Portfolio
