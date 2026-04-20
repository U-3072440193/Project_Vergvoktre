import { useState } from 'react'
import OpeningScreen from './openingScreen/OpeningScreen'
import MainScreen from './mainScreen/MainScreen'

function App() {
  const [scene, setScene] = useState<"opening" | "main">("opening");

  return (
    <>
      {scene === "opening" && <OpeningScreen setScene={setScene} />}
      {scene === "main" && <MainScreen />}
    </>
  );
}

export default App;