import React, { useState } from 'react'

const Pokémon = () => {
  const [pokémon, setPokémon] = useState([])
  
  const getAllPokémon = async (e) => {
    e.preventDefault()
    let allPokémon = [];
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    let data = await response.json();
    allPokémon = [...allPokémon, ...data.results];
    // let offset = 0;
    // const limit = 20;
    // // I didn't see until after that you can set the limit of pokemon that you can request at once,
    // // so I stuck with the default limit of 20, and requested all of the pokemon 20 at a time until
    // // data.next was null (at the last page).
    // let response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    // let data = await response.json();
    // allPokémon = [...allPokémon, ...data.results];
    // while (data.next) {
    //   offset += limit;
    //   response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    //   data = await response.json();
    //   allPokémon = [...allPokémon, ...data.results];
    // }
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