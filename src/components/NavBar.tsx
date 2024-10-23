interface pokemon {
  name: string;
  imgSrc?: string;
  alt?: string
}

interface navBarProps {
  pokemonIndex: number;
  pokemonList: pokemon[];
  setPokemonIndex: (index: number) => void;
}

export default function NavBar ({pokemonList, setPokemonIndex}: navBarProps) {


    return (
        <>
            {pokemonList.map((article, index) => (
              <button key={index} onClick={() => setPokemonIndex(index)}>{article.name}</button>
            ))}
        </>
    )
  };
  