import mainjpg from "../assets/opening.jpg";
import "./opening-screen.css";

type Props = {
  setScene: React.Dispatch<React.SetStateAction<"opening" | "main">>;
};

function OpeningScreen({ setScene }: Props) {
  const handleVisitSite = () => {
    setScene("main");
  };

  const handleExit = () => {
    window.close();
  };

  return (
    <section className="opening-screen">
      <img src={mainjpg} alt="Welcome" className="background-image" />

      {/* Контейнер для иконок в линию */}
      <div className="icons-line">

        <img
          src="/icons/exit.svg"         // 👈 из папки public
          alt="Exit"
          className="icon exit-icon"
          onClick={handleExit}
        />
        <img
          src="/icons/enter.svg"        // 👈 из папки public
          alt="Enter"
          className="icon enter-icon"
          onClick={handleVisitSite}
        />
      </div>
    </section>
  );
}

export default OpeningScreen;