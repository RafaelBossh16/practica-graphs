const API_KEY = "cticcj1r01qm6mummld0cticcj1r01qm6mummldg";

export async function fetchStockQuote(symbol: string) {
  const response = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error ("Error fetching stock data");
  }

  const data = await response.json();

  if (!data.c) {
    throw new Error ("No results found");
  }

  return {
    currentPrice: data.c,
    openPrice: data.o,
    highPrice: data.h,
    lowPrice: data.l,
    // percentChange: data.dp
  };
}