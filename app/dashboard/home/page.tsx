"use client";
import { StockBarChart } from "@/app/components/StockBarChart/StockBarChart";
import { useAuth } from "@/app/context/AuthContext";

const indices = [
    {name: "DEMO 1", value: 4500},
    {name: "DEMO 2", value: 15000},
    {name: "DEMO 3", value: 35000},
  ];

export default function Home() {
  const { user } = useAuth();

  return ( 
    <>
      <h1>Home bienvenido {user?.name}</h1>
      <p>{user?.email}</p>
      <StockBarChart indices={indices} />
    </>
  );
}