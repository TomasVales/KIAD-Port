import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage } = useLanguage();

    const languages = ['ES', 'EN', 'PT', 'FR', 'DE'];

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (lang) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative text-white">
            <button 
                onClick={toggleDropdown} 
                className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-pointer"
            >
                <Globe className="w-5 h-5 text-white" />
                <span>{language}</span>
                <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-black border border-white/10 rounded shadow-lg z-50">
                    {languages.map((lang) => (
                        <button 
                            key={lang}
                            onClick={() => handleSelect(lang)}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors"
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageSelector;
