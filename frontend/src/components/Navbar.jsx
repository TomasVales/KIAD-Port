import React, { useState, lazy } from 'react';
import Logo from '/Logo.webp';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
const LanguageSelector = lazy(() => import('./LanguageSelector.jsx'));

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const { t } = useLanguage();
    return (
        <header className='fixed w-full bg-gray-950/50 backdrop-blur-lg border-b border-white/10 shadow-lg z-50'>
            <div className='max-w-[90vw] mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="transition-all duration-500 group-hover:translate-x-0 group-hover:scale-75">
                            <img src={Logo} alt="Logo" className="w-10" loading='lazy' />
                        </div>
                        <span className="text-white font-semibold font-playfair text-2xl opacity-0 group-hover:opacity-100 -translate-x-6 group-hover:-translate-x-2 transition-all duration-500">
                            KIAD
                        </span>
                    </a>

                    <div className="hidden md:flex items-center space-x-8">
                    {['home', 'whoweare', 'services', 'portfolio', 'contact'].map((item) => (
                        <a
                        key={item}
                        href={`#${item}`}
                        className="text-[13px] lg:text-[18px] relative group text-gray-300 hover:text-white"
                        >
                            {t(item)}
                        </a>
                    ))}
                    <LanguageSelector />
                    </div>
                    <div className="flex md:hidden">
                    <button
                    onClick={toggleMenu}
                    className="text-white focus:outline-none"
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-gray-950/95 backdrop-blur-lg border-t border-white/10">
                    <div className="flex flex-col items-center space-y-6 py-6">
                    {['home', 'whoweare', 'services', 'portfolio', 'contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item}`}
                        className="nav-link text-gray-300"
                        onClick={toggleMenu}
                    >
                        {t(item)}
                    </a>
                    ))}
                        <LanguageSelector />
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar;
