export interface ArtItem {
  id: number;
  thumbnail: string;
  image: string;
  title: string;
  description?: string;  // опционально для будущего
  date?: string;         // дата добавления
  category?: string;     // категория арта
}

export const artItems: ArtItem[] = [
  { id: 1, thumbnail: "/artworks/one.jpg", image: "/artworks/one.jpg", title: "Picture" },
  { id: 2, thumbnail: "/artworks/one.jpg", image: "/art2.jpg", title: "vergvoktre@gmail.com" },
  { id: 3, thumbnail: "/artworks/one.jpg", image: "/art3.jpg", title: "Арт 3" },
  { id: 4, thumbnail: "/artworks/one.jpg", image: "/art4.jpg", title: "Арт 4" },
  { id: 5, thumbnail: "/artworks/one.jpg", image: "/art5.jpg", title: "Арт 5" },
  { id: 6, thumbnail: "/artworks/one.jpg", image: "/art6.jpg", title: "Арт 6" },
];