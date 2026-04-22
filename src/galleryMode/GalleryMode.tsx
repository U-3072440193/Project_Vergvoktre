import "./gallery-mode.css";
import { useState, useRef, useEffect } from "react";
import gallery_tree from "../assets/main/SVG/gallery-tree.svg"

type GalleryModeProps = {
    art: {
        id: number;
        thumbnail: string;
        image: string;
        title: string;
    };
    allArts: Array<{ id: number; thumbnail: string; image: string; title: string }>;
    onBack: () => void;
    onArtChange: (art: any) => void;
};

function GalleryMode({ art, allArts = [], onBack, onArtChange }: GalleryModeProps) {
    const [currentArt, setCurrentArt] = useState(art);
    const [direction, setDirection] = useState<"left" | "right" | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const touchStartY = useRef<number>(0);

    const currentIndex = allArts.length > 0 
        ? allArts.findIndex((a) => a.id === currentArt.id)
        : -1;

    const nextArt = () => {
        if (allArts.length === 0) return;
        if (isAnimating || currentIndex >= allArts.length - 1) return;
        setDirection("left");
        setIsAnimating(true);
        setTimeout(() => {
            const next = allArts[currentIndex + 1];
            setCurrentArt(next);
            onArtChange(next);
            setDirection(null);
            setIsAnimating(false);
        }, 300);
    };

    const prevArt = () => {
        if (allArts.length === 0) return;
        if (isAnimating || currentIndex <= 0) return;
        setDirection("right");
        setIsAnimating(true);
        setTimeout(() => {
            const prev = allArts[currentIndex - 1];
            setCurrentArt(prev);
            onArtChange(prev);
            setDirection(null);
            setIsAnimating(false);
        }, 1000);
    };

    const handleWheel = (e: React.WheelEvent) => {
        if (isAnimating) return;
        if (e.deltaY > 0) nextArt();
        else if (e.deltaY < 0) prevArt();
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (isAnimating) return;
        const diff = touchStartY.current - e.changedTouches[0].clientY;
        if (diff > 50) nextArt();
        if (diff < -50) prevArt();
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                nextArt();
            }
            if (e.key === "ArrowUp") {
                e.preventDefault();
                prevArt();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex, isAnimating]);

    return (
        <section 
            className="gallery-screen"
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* 👇 Весь контент оборачиваем в анимируемый контейнер */}
            <div className={`gallery-content ${direction ? `slide-${direction}` : ""}`}>
                <div className="left">
                    <img
                        src={gallery_tree}
                        alt="Back"
                        className="back-button"
                        onClick={onBack}
                    />
                    <h1 className="art-title">{currentArt.title}</h1>
                    {allArts.length > 0 && (
                        <div className="progress">
                            {currentIndex + 1} / {allArts.length}
                        </div>
                    )}
                </div>
                <div className="right">
                    <img 
                        src={currentArt.image} 
                        alt={currentArt.title} 
                        className="art-image" 
                    />
                </div>
            </div>
        </section>
    );
}

export default GalleryMode;