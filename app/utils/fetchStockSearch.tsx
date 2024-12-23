const API_KEY = "cticcj1r01qm6mummld0cticcj1r01qm6mummldg";

export async function fetchStockSearch(query: string) {
  const response = await fetch(
    `https://finnhub.io/api/v1/search?q=${query}&token=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error("Failed fetching stock data");
  }

  const data = await response.json();

  if (!data.result || data.result.length === 0) {
    throw new Error("No results found");
  }

  interface IStock {
    symbol: string;
    description?: string;
    mic?: string;
  }

  return data.result.map((stock: IStock) => {
    return {
      symbol: stock.symbol,
      name: stock.description || "Sin nombre",
      region: stock.mic || "Sin region"
    } ;
  });
}