'use strict';

const pokemons = [];

async function fetchPokemons() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/pokemons.json')
        const data = await response.json();
        // tägg till pokemons

        pokemons.push(data);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

fetchPokemons();