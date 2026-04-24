import root1 from "../assets/main/SVG/root-down.svg";
import type { ArtItem } from "../data/artData";

interface RootDownProps {
  arts: ArtItem[];
  onArtClick: (art: ArtItem) => void;
}

const circlePositions = [
  { left: "12%", top: "12%" },
  { left: "80%", top: "35%" },
  { left: "50%", top: "80%" },
];

function RootDown({ arts, onArtClick }: RootDownProps) {
  return (
    <div className="block block-down">
      <img src={root1} alt="Root 1" className="root-bg" />
      <div className="circles-container">
        {arts.slice(0, circlePositions.length).map((art, index) => (
          <div
            key={art.id}
            className="circle"
            style={{ left: circlePositions[index].left, top: circlePositions[index].top }}
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

export default RootDown;
