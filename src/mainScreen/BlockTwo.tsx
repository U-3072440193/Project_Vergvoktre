import root2 from "../assets/main/SVG/root2.svg";
import type { ArtItem } from "../data/artData";

interface Block2Props {
  arts: ArtItem[];
  onArtClick: (art: ArtItem) => void;
}

const circlePositions = [
  { left: "10%", top: "23%", className: "circle-left-top" },
  { left: "83%", top: "16%" , className: "circle-right-top"},
  { left: "25%", top: "45%", className: "circle-left-top" },
  { left: "83%", top: "50%" , className: "circle-right-top"},
  { left: "11%", top: "67%" , className: "circle-left-top"},
  { left: "61%", top: "70%" , className: "circle-right-top"},
];

function BlockTwo({ arts, onArtClick }: Block2Props) {
  return (
    <div className="block block-2">
      <img src={root2} alt="Root 2" className="root-bg" />
      <div className="circles-container">
        {arts.slice(0, circlePositions.length).map((art, index) => (
          <div
            key={art.id}
            className={`circle ${circlePositions[index].className}`}
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

export default BlockTwo;
