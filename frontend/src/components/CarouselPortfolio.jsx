import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId } from "react";

const Slide = ({ slide, index, current, handleSlideClick }) => {
    const slideRef = useRef(null);

    const imageLoaded = (event) => {
        event.currentTarget.style.opacity = "1";
    };

    const { src, title } = slide;

    return (
        <div className="[perspective:1200px] [transform-style:preserve-3d] h-full">
            <li
                ref={slideRef}
                className="group flex flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[80vmin] h-[45vmin] mx-[2vmin] z-10"
                onClick={() => handleSlideClick(index)}
                style={{
                    transform: current !== index 
                        ? "scale(0.95) rotateX(5deg)" 
                        : "scale(1) rotateX(0deg)",
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    transformOrigin: "bottom",
                    willChange: "transform",
                }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-lg overflow-hidden transition-all duration-150 ease-out shadow-lg"
                    style={{
                        transform: "none", // Imagen estática
                    }}
                >
                    <img
                        className="absolute inset-0 w-full h-full object-contain opacity-100 transition-opacity duration-600 ease-in-out bg-black"
                        style={{
                            opacity: current === index ? 1 : 0.7,
                            backfaceVisibility: "hidden",
                        }}
                        alt={title}
                        src={src}
                        onLoad={imageLoaded}
                        loading="lazy"
                        decoding="async"
                    />
                    {current === index && (
                        <div className="absolute inset-0 bg-black/20 transition-all duration-1000" />
                    )}
                </div>

                <article
                    className="absolute inset-0 flex items-center justify-center p-[3vmin] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none"
                >
                    <h2 className="text-lg md:text-2xl text-neutral-400 font-semibold font-playfair bg-black/60 p-2 rounded-lg">
                        {title}
                    </h2>
                </article>
            </li>
        </div>
    );
};

const CarouselControl = ({
    type,
    title,
    handleClick
    }) => {
    return (
        <button
        className={`w-10 h-10 flex items-center cursor-pointer mx-2 justify-center bg-neutral-800 border-3 border-transparent rounded-full focus:border-gray-700 focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
            type === "previous" ? "rotate-180" : ""
        }`}
        title={title}
        onClick={handleClick}>
        <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
        </button>
    );
};

export function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const carouselRef = useRef(null);

    const handlePreviousClick = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNextClick = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const handleSlideClick = (index) => {
        if (current !== index) {
            setCurrent(index);
        }
    };

    const id = useId();

    return (
        <div 
            className="relative w-full h-full mx-auto"
            aria-labelledby={`carousel-heading-${id}`}
            ref={carouselRef}
        >
            <ul
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${current * (100 / slides.length)}%)`,
                    width: `${slides.length * 100}%`
                }}
            >
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className="flex-shrink-0 flex items-center justify-center"
                        style={{ width: `${100 / slides.length}%` }}
                    >
                        <Slide
                            slide={slide}
                            index={index}
                            current={current}
                            handleSlideClick={handleSlideClick}
                        />
                    </div>
                ))}
            </ul>
            <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
                <CarouselControl
                    type="previous"
                    title="Go to previous slide"
                    handleClick={handlePreviousClick}
                />
                <CarouselControl 
                    type="next" 
                    title="Go to next slide" 
                    handleClick={handleNextClick} 
                />
            </div>
        </div>
    );
}