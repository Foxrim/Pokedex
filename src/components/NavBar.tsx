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

  const handleButtonClick = (index: number, name: string) => {
    setPokemonIndex(index);
    if (name === 'Pikachu') {
      alert('PIKA PIKA !!!!!');
    }
  };

    return (
        <>
           {pokemonList.map((article, index) => (
              <button key={index} onClick={() => handleButtonClick(index, article.name)}>{article.name}</button>
            ))}
        </>
    )
  };
  