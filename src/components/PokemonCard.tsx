interface PokemonProps {
    pokemon : {
        name: string;
        imgSrc?: string;
        alt?: string;
    }
}

function PokemonCard({ pokemon } : PokemonProps) {

    return (
      <>
        <figure>
            {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.alt} />) : (<p>???</p>) }
           <figcaption>{pokemon.name}</figcaption>
        </figure>
      </>
    )
  }
      

    export default PokemonCard