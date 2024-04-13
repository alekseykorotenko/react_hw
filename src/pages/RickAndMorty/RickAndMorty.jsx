import React from 'react';
import useFetch from '../../hooks/useFetch';

const RickAndMorty = () => {
  const { data, isLoading } = useFetch('https://rickandmortyapi.com/api/character');

  // console.log(isLoading);
  // console.log(data);

  return (
    <div>
      {isLoading && <h1>Loading... Please wait...</h1>}

      {!!data.results &&
        data.results.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <br />
            {character.name}
          </li>
        ))}
    </div>
  );
};

export default RickAndMorty;
