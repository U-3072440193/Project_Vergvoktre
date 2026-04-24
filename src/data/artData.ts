// artData.ts
export interface ArtItem {
  id: number;
  thumbnail: string;
  image: string;
  title: string;
}

// Данные: id, title
const artData = [
  { id: 1, title: "26236346" },
  { id: 2, title: "28096669" },
  { id: 3, title: "186664444" },
  { id: 4, title: "7896660" },
  { id: 5, title: "26236346" },
  { id: 6, title: "28096669" },
  { id: 7, title: "186664444" },
  { id: 8, title: "02" },
  { id: 9, title: "1192011444433" },
  { id: 10, title: "676311201306" },
  { id: 11, title: "VENI VIDI VICI" },
  { id: 12, title: "02" },
  { id: 13, title: "080420160494" },
  { id: 14, title: "106660404044" },
  { id: 15, title: "0442308160606" },
  { id: 16, title: "The Purifying Flame" },
  { id: 17, title: "Peak Hour" },
  { id: 18, title: "022305202152-1" },
  { id: 19, title: "022305202152-2" },
  { id: 20, title: "Dies Tubae Et Clangoris" },
  { id: 21, title: "041705201500" },
  { id: 22, title: "28096669" },
  { id: 23, title: "0188381800701" },
  { id: 24, title: "230080189071" },
  { id: 25, title: "003021866646" },
  { id: 26, title: "6116134678172" },
  { id: 27, title: "211205012099" },
  { id: 28, title: "6910081644644" },
  { id: 29, title: "Atack of anal bulls" },
  { id: 30, title: "IDI SUDA NAHUI" },
  { id: 31, title: "There is subway lower of Hell " },
  { id: 32, title: "065676456940" },
  { id: 33, title: "Where are your comrades?" },
  { id: 34, title: "KOT" },
  { id: 35, title: "900290800183" },
  { id: 36, title: "New Head" },
  { id: 37, title: "Inevitable Total Nuclear Genocide Song" },
  { id: 38, title: "Triumvirate" },
  { id: 39, title: "You never was" },
  { id: 40, title: "621390519459" },
  { id: 41, title: "773888442326" },
  { id: 42, title: "604821905181" },
  { id: 43, title: "It's coming" },
  { id: 44, title: "Disgruntled  Kitty" },
];

export const artItems: ArtItem[] = artData.map(item => ({
  id: item.id,
  thumbnail: `/thumbnail/${item.id}.jpg`,
  image: `/artworks/${item.id}.webp`,
  title: item.title,
}));
