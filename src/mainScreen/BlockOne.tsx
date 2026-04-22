// src/components/MainScreen/Block1.tsx
import root1 from "../assets/main/SVG/root1.svg";

interface ArtItem {
  id: number;
  thumbnail: string;
  image: string;
  title: string;
}

interface Block1Props {
  arts: ArtItem[];
  onArtClick: (art: ArtItem) => void;
}

// Координаты для Block1
const circlePositions = [
  { left: "7%", top: "16%" },  // circle-1
  { left: "86%", top: "7%" },  // circle-2
  { left: "68%", top: "44%" },  // circle-3
  { left: "7%", top: "54%" },  // circle-4
  { left: "32%", top: "69%" },  // circle-5 
  { left: "86%", top: "75%" },  // circle-6
];

function BlockOne({ arts, onArtClick }: Block1Props) {
  return (
    <div className="block block-1">
      <img src={root1} alt="Root 1" className="root-bg" />
      <div className="circles-container">
        {arts.slice(0, 6).map((art, index) => (
          <div 
            key={art.id}
            className="circle"
            style={{ left: circlePositions[index].left, top: circlePositions[index].top }}
            onClick={() => onArtClick(art)}
          >
            <img src={art.thumbnail} alt={art.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlockOne;