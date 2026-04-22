// src/components/MainScreen/Block1.tsx
import root1 from "../assets/main/SVG/root-down.svg";

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
  { left: "12%", top: "12%" },  // circle-1
  { left: "80%", top: "35%" },  // circle-2
  { left: "50%", top: "80%" },  // circle-3
  
];

function RootDown({ arts, onArtClick }: Block1Props) {
  return (
    <div className="block block-down">
      <img src={root1} alt="Root 1" className="root-bg" />
      <div className="circles-container">
        {arts.slice(0, 3).map((art, index) => (
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

export default RootDown;