import { createContext, useState, useContext } from 'react';
import translations from '../translations/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('ES');
    const t = (key) => {
        return translations[language][key] || key;
    };
    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
        {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);