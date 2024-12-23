'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

const getPokemons = async ({ 
  limit = 20, 
  offset = 0 
}: { 
  limit?: number; 
  offset?: number; 
}): Promise<Pokemons> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  return response.json();
};

type Pokemon = {
  id: number;
  name: string;
  url: string;
};

type Pokemons = {
  results: Pokemon[];
};

export default function Pokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getPokemons({ limit: 150, offset: 0 });
        const pokemons = data.results.map((pokemon: Pokemon) => {
          return {
            id: Number(pokemon.url.split("/").at(-2)),
            name: pokemon.name,
            url: pokemon.url
          };
        });
        setPokemons(pokemons);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemons();
  }, []);
  return ( 
    <div>
      <h1>Pokemons</h1>
      <ul className="flex flex-wrap gap-4">
        {pokemons.map((pokemon) => {
          return (
          <li key={pokemon.name}>
            <div className="mx-auto right-0 mt-2 w-60">
                <div className="bg-white rounded overflow-hidden shadow-lg">
                    <div className="text-center p-6 bg-gray-800 border-b">
                    <Image 
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                      alt={pokemon.name}
                      width={200}
                      height={200}
                      priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50">
                      {pokemon.name}
                    </p>
                  </div>
                </div>
            </div>
          </li>
        );
        })}
      </ul>
    </div>
  );
}
