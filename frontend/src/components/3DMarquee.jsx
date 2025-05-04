import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const ThreeDMarquee = ({
    images,
    className
}) => {
    const chunkSize = Math.ceil(images.length / 4);
    const chunks = Array.from({ length: 4 }, (_, colIndex) => {
        const start = colIndex * chunkSize;
        return images.slice(start, start + chunkSize);
    });

    return (
        <div className={cn(
            "absolute inset-0 h-full w-full overflow-hidden",
            className
        )}>
            <div className="flex h-full w-full items-center justify-center">
                <div className="h-full w-full shrink-0">
                    <div
                        style={{
                            transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
                        }}
                        className="relative top-8 left-30 grid h-full w-full origin-center grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 transform-3d"
                    >
                        {chunks.map((subarray, colIndex) => (
                            <motion.div
                                animate={{ y: colIndex % 2 === 0 ? [0, -150, 0] : [0, 150, 0] }}
                                transition={{
                                    duration: colIndex % 2 === 0 ? 18 : 22,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                key={colIndex + "marquee"}
                                className="flex flex-col items-start gap-2"
                            >
                                {subarray.map((image, imageIndex) => (
                                    <div className="relative" key={imageIndex + image}>
                                        <motion.img
                                            loading="lazy"
                                            whileHover={{
                                                y: -15,
                                                scale: 1.08,
                                                zIndex: 10
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeInOut",
                                            }}
                                            src={image}
                                            alt={`Image ${imageIndex + 1}`}
                                            className="aspect-[2180/1180] rounded-lg object-cover ring-1 ring-white/20 hover:shadow-xl hover:ring-2 hover:ring-white/40 mb-4"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};