import './App.css'
import MyTitle from './components/MyTitle'
import PokemonCard from './components/PokemonCard'

function App() {
  
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
    }
];

  return (
    <>
      <div>
        <MyTitle />
        <PokemonCard pokemon={ pokemonList[1] } />
      </div>        
    </>
  )
}

export default App

