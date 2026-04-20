import mainjpg from "../assets/opening.png";
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

      <div className="icon-wrapper exit-wrapper" onClick={handleExit}>
        <div className="exit"></div>
      </div>

      <div className="icon-wrapper enter-wrapper" onClick={handleVisitSite}>
        <div className="enter"></div>
      </div>
    </section>
  );
}

export default OpeningScreen;