import './App.css'
import MyTitle from './components/MyTitle'
import NavBar from './components/NavBar';
import { useState } from "react";
import PokemonCard from './components/PokemonCard';


export default function App() {

const [pokemonIndex, countPrev] = useState(0);

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

  return (
    <>
      <div>
        <MyTitle />
        <PokemonCard pokemon = { pokemonList[pokemonIndex] } />
        <NavBar pokemonList={pokemonList} pokemonIndex={pokemonIndex} countPrev={countPrev} />
      </div>        
    </>
  )
};
