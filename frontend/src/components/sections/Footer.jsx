import React from 'react'
import Logo from '/Logo.webp'
import { Linkedin, Instagram, Mail } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

function Footer() {

    const { t } = useLanguage();

    return (
        <footer className='relative bg-black text-white w-full'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row justify-between items-center py-5 border-b border-white/50 gap-4'>
                    <div className='w-12'><img src={Logo} alt="logo" className='w-full h-auto' /></div>
                    <div className='text-center md:text-left'>
                        <span className='font-medium text-base sm:text-lg'>
                            {t('motto')}
                        </span>
                    </div>
                </div>
                
                <div className='flex flex-col-reverse sm:flex-row justify-between items-center py-5 gap-4'>
                    <p className='text-white/50 text-sm sm:text-base'>
                        &copy; 2025 KIAD. All rights reserved.
                    </p>
                    <div className='flex gap-4'>
                        <a href='https://www.linkedin.com/company/kiad-dev/' target='_blank' rel='noopener noreferrer'>
                            <Linkedin className='text-white/80 hover:text-white cursor-pointer w-5 h-5 sm:w-6 sm:h-6' />
                        </a>
                        <a href='https://www.instagram.com/kiad.dev/' target='_blank' rel='noopener noreferrer'>
                            <Instagram className='text-white/80 hover:text-white cursor-pointer w-5 h-5 sm:w-6 sm:h-6' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer