import React from "react";
import { PokeCard } from "./components/PokeCards";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>2o. Challenge: Loops</h1>

      {
        <PokeCard />
        /**
        Render here the list of pokemons
      */
      }
    </div>
  );
}
