interface Pokemon {
  name: string;
  imgSrc?: string;
  alt?: string
}

interface NavBarProps {
  pokemonIndex: number;
  countPrev: (index: number) => void;
  pokemonList: Pokemon[];
}

export default function NavBar ({pokemonList, pokemonIndex, countPrev}: NavBarProps) {

const prevIndex = () => {
countPrev(pokemonIndex - 1);
};

const nextIndex = () => {
countPrev(pokemonIndex + 1);
};

    return (
        <>
        {pokemonIndex > 0 && <button type="button" onClick={prevIndex}>Précedent</button>}
        {pokemonIndex < pokemonList.length - 1 && <button type="button" onClick={nextIndex}>Suivant</button>}
        </>
    )
};
