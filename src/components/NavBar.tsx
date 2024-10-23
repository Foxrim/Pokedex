import { useState } from "react";
import PokemonCard from "./PokemonCard";

export default function NavBar () {


const [pokemonIndex, countPrev] = useState(0);

const prevIndex = () => {
countPrev(pokemonIndex - 1);
};

const nextIndex = () => {
countPrev(pokemonIndex + 1);
};

    return (
        <>
        <PokemonCard pokemon = { pokemonList[pokemonIndex] } />
        {pokemonIndex > 0 && <button type="button" onClick={prevIndex}>Précedent</button>}
        {pokemonIndex < pokemonList.length - 1 && <button type="button" onClick={nextIndex}>Suivant</button>}
        </>
    )
};


const pokemonList = [
    {
      name: "Salamèche",
      imgSrc:"./public/Salamèche.png",
      alt: "Salamèche"
    },
    {
      name: "Mew",
      imgSrc:"./public/Mew.png",
      alt: "Mew"
    },
    {
      name: "Bulbizar",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Carapuce",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "Pikachu",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "Mewtoo",
    }
  ];