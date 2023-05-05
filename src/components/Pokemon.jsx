import React, { useState } from 'react'

const Pokémon = () => {
  const [pokémon, setPokémon] = useState([])
  
  const getAllPokémon = async (e) => {
    e.preventDefault()
    let allPokémon = [];
    let offset = 0;
    const limit = 20;
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    let data = await response.json();
    allPokémon = [...allPokémon, ...data.results];
    while (data.next) {
      offset += limit;
      response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
      data = await response.json();
      allPokémon = [...allPokémon, ...data.results];
    }
    setPokémon(allPokémon)
    return
  }

  return (
    <div className='container'>
      <h1>Pokémon</h1>
      <button onClick={getAllPokémon}>Fetch Pokémon</button>
      <ol type='1'>
        {pokémon.map((pokemon, index) => (
        <li key={index}>
          <span>{pokemon.name}</span>
        </li>
        ))}
      </ol>
    </div>
  )
}
export default Pokémon