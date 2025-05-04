import React from 'react'
import { MacbookScroll } from '../MacbookComponent'
import { useLanguage } from '../../context/LanguageContext'
import image from '../../assets/terrazas.webp'

function Macbook() {

    const { t } = useLanguage();

    return (
        <div className="overflow-hidden bg-gradient-to-b from-gray-950 to-black w-full">
        <MacbookScroll
            src={image}
            title={t('weTransform')}
            showGradient={true}
        />
        </div>
    )
}

export default Macbook