import { useState } from "react";
import backgroundimg from "../assets/main/background.png";
import world from "../assets/main/world.jpg";
import tree from "../assets/main/SVG/tree.svg";
import { artItems, type ArtItem } from "../data/artData";
import GalleryMode from "../galleryMode/GalleryMode";
import Block1 from "./BlockOne";
import Block2 from "./BlockTwo";
import "./main-screen.css";
import RootDown from "./RootDown";

const galleryArts = [...artItems].reverse();

function MainScreen() {
  const [selectedArt, setSelectedArt] = useState<ArtItem | null>(null);

  if (selectedArt) {
    return (
      <GalleryMode
        art={selectedArt}
        allArts={galleryArts}
        onBack={() => setSelectedArt(null)}
        onArtChange={(newArt) => setSelectedArt(newArt)}
      />
    );
  }

  return (
    <section className="main-screen">
      <div className="top-section">
        <img src={world} alt="Top background" className="top-bg" />
        <div className="email-top-right">
          <a href="mailto:vergvoktre@gmail.com">vergvoktre@gmail.com</a>
        </div>
      </div>

      <img src={tree} alt="Center image" className="center-image" />

      <div className="bottom-section">
        <img src={backgroundimg} alt="Bottom background" className="bottom-bg" />

        <div className="blocks-container">
          <Block1 arts={galleryArts.slice(0, 6)} onArtClick={setSelectedArt} />
          <Block2 arts={galleryArts.slice(6, 12)} onArtClick={setSelectedArt} />
          <Block1 arts={galleryArts.slice(12, 18)} onArtClick={setSelectedArt} />
          <Block2 arts={galleryArts.slice(18, 24)} onArtClick={setSelectedArt} />
          <Block1 arts={galleryArts.slice(24, 30)} onArtClick={setSelectedArt} />
          <Block2 arts={galleryArts.slice(30, 36)} onArtClick={setSelectedArt} />
          <Block1 arts={galleryArts.slice(36, 42)} onArtClick={setSelectedArt} />
          <RootDown arts={galleryArts.slice(42, 44)} onArtClick={setSelectedArt} />
        </div>
      </div>
    </section>
  );
}

export default MainScreen;
