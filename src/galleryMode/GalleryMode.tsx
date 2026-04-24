import { useEffect, useEffectEvent, useRef, useState } from "react";
import galleryTree from "../assets/main/SVG/gallery-tree.svg";
import type { ArtItem } from "../data/artData";
import "./gallery-mode.css";

type GalleryModeProps = {
  art: ArtItem;
  allArts: ArtItem[];
  onBack: () => void;
  onArtChange: (art: ArtItem) => void;
};

const SLIDE_DURATION_MS = 300;

function GalleryMode({ art, allArts = [], onBack, onArtChange }: GalleryModeProps) {
  const [currentArt, setCurrentArt] = useState(art);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartY = useRef(0);
  const animationTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current !== null) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const currentIndex =
    allArts.length > 0 ? allArts.findIndex((item) => item.id === currentArt.id) : -1;

  const clearAnimationTimeout = () => {
    if (animationTimeoutRef.current !== null) {
      window.clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = null;
    }
  };

  const startTransition = (nextIndex: number, nextDirection: "left" | "right") => {
    const nextArt = allArts[nextIndex];
    if (!nextArt) return;

    clearAnimationTimeout();
    setDirection(nextDirection);
    setIsAnimating(true);
    animationTimeoutRef.current = window.setTimeout(() => {
      setCurrentArt(nextArt);
      onArtChange(nextArt);
      setDirection(null);
      setIsAnimating(false);
      animationTimeoutRef.current = null;
    }, SLIDE_DURATION_MS);
  };

  const nextArt = () => {
    if (allArts.length === 0) return;
    if (isAnimating || currentIndex >= allArts.length - 1) return;
    startTransition(currentIndex + 1, "left");
  };

  const prevArt = () => {
    if (allArts.length === 0) return;
    if (isAnimating || currentIndex <= 0) return;
    startTransition(currentIndex - 1, "right");
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (isAnimating) return;
    e.preventDefault();
    if (e.deltaY > 0) nextArt();
    if (e.deltaY < 0) prevArt();
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

  const onKeyDown = useEffectEvent((e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      nextArt();
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      prevArt();
    }
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => onKeyDown(e);
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      className="gallery-screen"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={`gallery-content ${direction ? `slide-${direction}` : ""}`}>
        <div className="left">
          <button
            type="button"
            className="back-button"
            aria-label="Back to gallery"
            onClick={onBack}
          >
            <img src={galleryTree} alt="" className="back-button-image" />
          </button>

          <h1 className="art-title">{currentArt.title}</h1>
          {allArts.length > 0 && (
            <div className="progress">
              {currentIndex + 1} / {allArts.length}
            </div>
          )}
        </div>

        <div className="right">
          <img src={currentArt.image} alt={currentArt.title} className="art-image" />
        </div>
      </div>
    </section>
  );
}

export default GalleryMode;
