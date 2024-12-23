"use client";
import dynamic from "next/dynamic";
import { fetchStockQuote } from "@/app/utils/fetchStockQuote";
import { useQuery } from "@tanstack/react-query";
import { use } from "react";

const StockDayChart = dynamic(
  () => import("@/app/components/StockDayChart/StockDayChart"),
  {
    loading: () => <p>Cargando el grafico...</p>
  }
);

export default function StocksDetailPage({
  params
}: {
  params: Promise<{ symbol: string }>;
}) {
  const { symbol } = use(params);

  const {
    data: stock,
    isLoading,
    error
  } = useQuery({
    queryKey: ["stockQuote", symbol],
    queryFn: () => fetchStockQuote(symbol)
  });

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Hubo un error</p>;
  }

  return (
    <div>
      <h1>Stocks Detail Page</h1>
      <div>
        <p>Precio Actual {stock?.currentPrice}</p>
        <p>Precio Apertura {stock?.openPrice}</p>
        <p>Maximo del Dia {stock?.highPrice}</p>
        <p>Minimo del Dia {stock?.lowPrice}</p>
        {/* <p>Cambio Porcentual {stock?.changePercent}</p> */}
      </div>
      <StockDayChart
        openPrice={stock?.openPrice}
        highPrice={stock?.highPrice}
        lowPrice={stock?.lowPrice}
        currentPrice={stock?.currentPrice}
      />
    </div>
  );
}