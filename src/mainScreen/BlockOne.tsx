import root1 from "../assets/main/SVG/root1.svg";
import type { ArtItem } from "../data/artData";

interface Block1Props {
  arts: ArtItem[];
  onArtClick: (art: ArtItem) => void;
}

const circlePositions = [
  { left: "7%", top: "16%" },
  { left: "86%", top: "7%" },
  { left: "68%", top: "44%" },
  { left: "7%", top: "54%" },
  { left: "32%", top: "69%" },
  { left: "86%", top: "75%" },
];

function BlockOne({ arts, onArtClick }: Block1Props) {
  return (
    <div className="block block-1">
      <img src={root1} alt="Root 1" className="root-bg" />
      <div className="circles-container">
        {arts.slice(0, circlePositions.length).map((art, index) => (
          <div
            key={art.id}
            className="circle"
            style={{
              left: circlePositions[index].left,
              top: circlePositions[index].top,
            }}
            onClick={() => onArtClick(art)}
          >
            <img
              src={art.thumbnail}
              alt={art.title}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlockOne;
