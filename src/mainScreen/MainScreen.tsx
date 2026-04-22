import { useState } from "react";
import "./main-screen.css";
import backgroundimg from "../assets/main/background.png";
import world from "../assets/main/world.jpg";
import tree from "../assets/main/SVG/tree.svg";

import GalleryMode from "../galleryMode/GalleryMode";
import Block1 from "./BlockOne";
import Block2 from "./BlockTwo";
import RootDown from "./RootDown";

import { artItems } from "../data/artData";

function MainScreen() {
    const [selectedArt, setSelectedArt] = useState<null | typeof artItems[0]>(null);

    if (selectedArt) {
        return (
            <GalleryMode
                art={selectedArt}
                allArts={artItems}      // 👈 передаём массив
                onBack={() => setSelectedArt(null)}
                onArtChange={(newArt) => setSelectedArt(newArt)}  // 👈 передаём callback
            />
        );
    }

    return (
        <section className="main-screen">
            <div className="top-section">
                <img src={world} alt="Top background" className="top-bg" />
            </div>

            <img src={tree} alt="Center image" className="center-image" />

            <div className="bottom-section">
                <img src={backgroundimg} alt="Bottom background" className="bottom-bg" />

                <div className="blocks-container">
                    <Block1 arts={artItems} onArtClick={setSelectedArt} />
                    <Block2 arts={artItems} onArtClick={setSelectedArt} />
                    <Block1 arts={artItems} onArtClick={setSelectedArt} />
                    <Block2 arts={artItems} onArtClick={setSelectedArt} />
                    <RootDown arts={artItems} onArtClick={setSelectedArt} />
                </div>
            </div>
        </section>
    );
}

export default MainScreen;