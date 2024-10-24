function PokemonCard() {
    const pokemon = pokemonList[0];

    return (
      <>
        <figure>
            {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt="Salamèche" />) : (<p>???</p>) }
           <figcaption>{pokemon.name}</figcaption>
        </figure>
      </>
    )
  }
  
  const pokemonList = [
      {
          name: "Salamèche",
          imgSrc:"./public/Salamèche.png",
        },
        {
          name: "mew",
        }
    ];
    
    export default PokemonCard
