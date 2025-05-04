import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function WhoWeAre() {

    const { t } = useLanguage();

    return (
        <section
            id='whoweare'
            className='relative min-h-screen bg-gray-950 text-white px-6 py-20 flex items-center justify-center'
        >
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-950 to-transparent z-20 pointer-events-none" />


            <div className='max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12'>

                <div className='flex-1 space-y-5'>
                    <h2 className='text-2xl sm:text-4xl font-bold text-center md:text-left text-balance'>
                        <span className='font-playfair text-white'>KIAD </span>
                        <span className='text-neutral-300 font-semibold'>{t('startupFocus')}</span>
                    </h2>
                    <p className='text-[15px] sm:text-[18px] text-center md:text-left text-neutral-400'>
                        {t('offerSolutions')}
                    </p>


                    <div className='pt-2 max-w-3xl space-y-4'>
                        <p className='text-[15px] sm:text-[16px] tracking-wide text-center md:text-left text-neutral-400'>
                            <span className="text-white font-semibold">{t('weCombine')}</span>{t('toOffer')} <br />
                            {t('moreThan')}<span className="text-white font-semibold">{t('partner')}</span>: {t('weIntegrate')}
                        </p>
                        <p className='text-[14px] sm:text-[15px] tracking-wide text-center md:text-left'>
                            {t('weWereBorn')}
                        </p>
                        <p className='italic text-center md:text-left text-neutral-300 mt-6 text-[15px] md:text-lg'>
                            {t('weAreReady')} <br />
                            <span className="text-white font-semibold">{t('talkAboutProject')}</span>
                        </p>

                    </div>
                </div>

                <div className='flex-1'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 text-center'>
                        <div>
                            <div className="p-6 rounded-xl border border-white/20 hover:border-neutral-400 transition duration-300 backdrop-blur-sm bg-white/5">
                                <h3 className='text-[12px] md:text-xl font-bold italic'>{t('commitment')}</h3>
                                <p className='text-[12px] md:text-[15px] mt-2'>{t('getInvolved')}</p>
                            </div>
                        </div>
                        <div>
                            <div className="p-6 rounded-xl border border-white/20 hover:border-neutral-400 transition duration-300 backdrop-blur-sm bg-white/5">
                                <h3 className='text-[12px] md:text-xl font-bold italic'>{t('innovation')}</h3>
                                <p className='text-[12px] md:text-[15px] mt-2'>{t('sameOldThings')}</p>
                            </div>
                        </div>
                        <div>
                            <div className="p-6 rounded-xl border border-white/20 hover:border-neutral-400 transition duration-300 backdrop-blur-sm bg-white/5">
                                <h3 className='text-[12px] md:text-xl font-bold italic'>{t('transparency')}</h3>
                                <p className='text-[12px] md:text-[15px] mt-2'>{t('weWork')}</p>
                            </div>
                        </div>
                        <div>
                            <div className="p-6 rounded-xl border border-white/20 hover:border-neutral-400 transition duration-300 backdrop-blur-sm bg-white/5">
                                <h3 className='text-[12px] md:text-xl font-bold italic'>{t('closeness')}</h3>
                                <p className='text-[12px] md:text-[15px] mt-2'>{t('weCare')}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default WhoWeAre;
