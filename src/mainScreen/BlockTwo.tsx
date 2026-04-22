// src/components/MainScreen/Block2.tsx
import root2 from "../assets/main/SVG/root2.svg";

interface ArtItem {
  id: number;
  thumbnail: string;
  image: string;
  title: string;
}

interface Block2Props {
  arts: ArtItem[];
  onArtClick: (art: ArtItem) => void;
}

// Координаты для Block2 (свои)
const circlePositions = [
  { left: "10%", top: "23%" },  // circle-1
  { left: "83%", top: "16%" },  // circle-2
  { left: "25%", top: "45%" },  // circle-3
  { left: "83%", top: "50%" },  // circle-4
  { left: "11%", top: "67%" },  // circle-5
  { left: "61%", top: "70%" },  // circle-6
];

function BlockTwo({ arts, onArtClick }: Block2Props) {
  return (
    <div className="block block-2">
      <img src={root2} alt="Root 2" className="root-bg" />
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

export default BlockTwo;