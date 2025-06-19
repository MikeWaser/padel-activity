import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { GameProvider } from "./src/context/GameContext";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <PaperProvider>
      <GameProvider>
        <Navigation />
      </GameProvider>
    </PaperProvider>
  );
}
