import React, { Component } from "react";
import { mockPokemonsData } from "../mock/pokeData";

export class PokeCard extends Component {
  onMouseEnter(id, sprites) {
    var image = sprites.front_default;
    if (image === undefined) {
      image = sprites.back_default;
    }
    var Image_Id = document.getElementById(id);
    Image_Id.src = image;
  }

  onMouseLeave(id, sprites) {
    var image = sprites.front_shiny;
    if (image === undefined) {
      image = sprites.back_shiny;
    }
    var Image_Id = document.getElementById(id);
    Image_Id.src = image;
  }

  render() {
    const sortedPokemon = mockPokemonsData.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );

    return (
      <ul>
        {sortedPokemon.map((pokemon) => (
          <div
            onMouseEnter={() =>
              this.onMouseEnter(pokemon.name, pokemon.sprites)
            }
            onMouseLeave={() =>
              this.onMouseLeave(pokemon.name, pokemon.sprites)
            }
          >
            <h1>{pokemon.name}</h1>

            <br />
            <img
              src={
                pokemon.sprites.front_default != null
                  ? pokemon.sprites.front_default
                  : pokemon.sprites.back_default
              }
              id={pokemon.name}
              alt={pokemon.name}
            />
            <br />
            <a href={pokemon.videoLink} target="_blank">
              Video
            </a>
          </div>
        ))}
      </ul>
    );
  }
}

export default PokeCard;
