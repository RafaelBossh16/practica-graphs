export async function fetchCryptoHistory(coinId: string) {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=365&interval=daily`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch crypto history");
  }

  const data = await response.json();
  
  const monthlyData:{month: string; average: number }[] = [];
  const groupedByMonth: {[month: string]: number[]} = {};

  data.prices.forEach(([timeStamp, price]: [number, number]) => {
    const date = new Date(timeStamp);
    const month = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}`;

    if (!groupedByMonth[month]) {
      groupedByMonth[month] = [];
    }

    groupedByMonth[month].push(price);
  });

  for (const [month, prices] of Object.entries(groupedByMonth)) {
    const average = prices.reduce((a, b) => a + b, 0) / prices.length;
    monthlyData.push({ month, average });
  }

  return monthlyData;
} 