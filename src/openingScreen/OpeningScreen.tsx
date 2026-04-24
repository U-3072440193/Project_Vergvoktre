import { useEffect, useRef, useState } from "react";
import mainjpg from "../assets/opening-hero.jpg";
import MainScreen from "../mainScreen/MainScreen";
import "./opening-screen.css";

type Props = {
  setScene: React.Dispatch<React.SetStateAction<"opening" | "main">>;
};

const GROW_DURATION_MS = 2000;
const WHITE_LAYER_DELAY_MS = 1000;
const FADE_DURATION_MS = 1000;

function OpeningScreen({ setScene }: Props) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [showMain, setShowMain] = useState(false);
  const enterIconRef = useRef<HTMLButtonElement>(null);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [hideIcons, setHideIcons] = useState(false);
  const timeoutIdsRef = useRef<number[]>([]);

  const clearQueuedTimeouts = () => {
    timeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    timeoutIdsRef.current = [];
  };

  useEffect(() => {
    return clearQueuedTimeouts;
  }, []);

  const queueTimeout = (callback: () => void, delay: number) => {
    const timeoutId = window.setTimeout(callback, delay);
    timeoutIdsRef.current.push(timeoutId);
  };

  const handleVisitSite = () => {
    if (isAnimating) return;

    if (enterIconRef.current) {
      const rect = enterIconRef.current.getBoundingClientRect();
      setIconPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }

    setIsAnimating(true);
    setHideIcons(true);
    setAnimationStep(1);

    queueTimeout(() => {
      setAnimationStep(2);
      setShowMain(true);

      queueTimeout(() => {
        setAnimationStep(3);

        queueTimeout(() => {
          setScene("main");
        }, FADE_DURATION_MS);
      }, WHITE_LAYER_DELAY_MS);
    }, GROW_DURATION_MS);
  };

  const handleExit = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.replace("about:blank");
  };

  return (
    <section className="opening-screen">
      {showMain && (
        <div className="main-wrapper">
          <MainScreen />
        </div>
      )}

      {!showMain && (
        <img src={mainjpg} alt="Welcome" className="background-image" />
      )}

      <div
        className={`black-layer ${animationStep >= 2 ? "active slide-left" : ""}`}
      />

      <div
        className={`white-layer ${animationStep >= 2 ? "show" : ""} ${
          animationStep === 3 ? "fade-out" : ""
        }`}
      />

      <div
        className={`growing-rectangle ${animationStep === 1 ? "grow" : ""} ${
          animationStep === 2 ? "stay-black" : ""
        }`}
        style={{
          left: iconPosition.x,
          top: iconPosition.y,
        }}
      />

      <div className={`icons-line ${hideIcons ? "hidden" : ""}`}>
        <button
          type="button"
          className="icon-button"
          aria-label="Exit site"
          onClick={handleExit}
        >
          <img src="/icons/exit.svg" alt="" className="icon exit-icon" />
        </button>

        <button
          type="button"
          className="icon-button enter-wrapper"
          ref={enterIconRef}
          aria-label="Enter site"
          onClick={handleVisitSite}
        >
          <img src="/icons/enter.svg" alt="" className="icon enter-icon" />
        </button>
      </div>
    </section>
  );
}

export default OpeningScreen;
