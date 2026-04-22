import { useState, useRef } from "react";
import mainjpg from "../assets/opening.jpg";
import "./opening-screen.css";

// Предположим, что главный экран – отдельный компонент MainScreen
import MainScreen from "../mainScreen/MainScreen";

type Props = {
  setScene: React.Dispatch<React.SetStateAction<"opening" | "main">>;
};

function OpeningScreen({ setScene }: Props) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [showMain, setShowMain] = useState(false); // ← новое состояние
  const enterIconRef = useRef<HTMLDivElement>(null);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [hideIcons, setHideIcons] = useState(false);

  const handleVisitSite = () => {
    if (isAnimating) return;

    // запоминаем центр иконки «Enter», чтобы от него отрастал квадрат
    if (enterIconRef.current) {
      const rect = enterIconRef.current.getBoundingClientRect();
      setIconPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }

    setIsAnimating(true);
    setHideIcons(true);
    setAnimationStep(1);               // старт «растущего прямоугольника»

    // 1‑й таймаут – рост квадрата
    setTimeout(() => {
      setAnimationStep(2);             // чёрный слой начинает уезжать влево

      // Сразу показываем главный экран под белым слоем
      setShowMain(true);

      // 2‑й таймаут – небольшая пауза, потом плавное исчезновение белого
      setTimeout(() => {
        setAnimationStep(3);           // включаем fade‑out у белого слоя

        // 3‑й таймаут – после завершения fade‑out переключаем сцену
        setTimeout(() => {
          setScene("main");            // полностью убираем OpeningScreen
        }, 1000); // длительность fade‑out (см. CSS transition)
      }, 1000); // задержка перед fade‑out, можно подстроить
    }, 2000); // время роста квадрата (как было)
  };

  const handleExit = () => {
    window.close();
  };

  return (
    <section className="opening-screen">
      {/* -------------- Главный контент (под всеми слоями) -------------- */}
      {showMain && (
        <div className="main-wrapper">
          <MainScreen />
        </div>
      )}

      {/* -------------- Фон «opening» (виден только до появления main) -------------- */}
      {!showMain && (
        <img src={mainjpg} alt="Welcome" className="background-image" />
      )}

      {/* Чёрный слой */}
      <div
        className={`black-layer ${animationStep >= 2 ? "active slide-left" : ""
          }`}
      />

      {/* Белый слой */}
      <div
        className={`white-layer ${animationStep >= 2 ? "show" : ""
          } ${animationStep === 3 ? "fade-out" : ""}`}
      />

      {/* Растущий прямоугольник */}
      <div
        className={`growing-rectangle ${animationStep === 1 ? "grow" : ""
          } ${animationStep === 2 ? "stay-black" : ""}`}
        style={{
          left: iconPosition.x,
          top: iconPosition.y,
        }}
      />

      {/* Иконки */}
      <div className={`icons-line ${hideIcons ? "hidden" : ""}`}>
        <img
          src="/icons/exit.svg"
          alt="Exit"
          className="icon exit-icon"
          onClick={handleExit}
        />
        <div className="enter-wrapper" ref={enterIconRef}>
          <img
            src="/icons/enter.svg"
            alt="Enter"
            className="icon enter-icon"
            onClick={handleVisitSite}
          />
        </div>
      </div>
    </section>
  );
}

export default OpeningScreen;
