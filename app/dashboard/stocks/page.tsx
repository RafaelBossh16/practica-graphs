"use client";

import { fetchStockSearch } from "@/app/utils/fetchStockSearch";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

interface IStock {
  name: string;
  symbol: string;
  region: string;
}

export default function StocksPage() {
  const [query, setQuery] = useState("");

  const {
    data: stocks,
    isLoading,
    error,
    refetch
  } = useQuery<IStock[]>({
    queryKey: ["stocksSearch", query],
    queryFn: () => fetchStockSearch(query),
    enabled: false
  });

  const handleSearch = () => {
    if (query.trim()) {
      refetch();
    }
  };

  return (
    <div>
      <h1>Stocks</h1>
      <div className="mt-4">
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Buscar por nombre" 
          className="p-2 border border-gray-300 rounded" 
        />
        <button 
        onClick={handleSearch}
        className="ml-2 p-2 bg-blue-600 text-white rounded-md">
          Buscar
        </button>
      </div>

      {isLoading && <p>Cargando...</p>}

      {error && <p>Hubo un error</p>}

      {stocks && stocks.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {stocks.map((stock) => (
            <div key={stock.symbol} className="p-4 bg-white shadow-md rounded-md">
              <h2>{stock.name}</h2>
              <p>{stock.symbol}</p>
              <p>{stock.region}</p>
              <Link 
                href={`/dashboard/stocks/${stock.symbol}`}
                className="text-blue-500 mt-2 block"
              >
                Ver Detalles
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
