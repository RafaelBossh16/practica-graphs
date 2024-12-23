"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { NavbarItem } from './components/NavbarItem';
import { TITLE } from './constants';
import { CiHome } from 'react-icons/ci';
import { MdCatchingPokemon } from "react-icons/md";
import { FaBitcoin } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import { useAuth } from '@/app/context/AuthContext';

export const Navbar = () => {
  const router = useRouter();
  const { logout } = useAuth();

  const navItems = [
    {
      path: "/dashboard/home",
      name: "Home",
      description: "Home description",
      icon: <CiHome className="w-6 h-6 text-white" />
    },
    {
      path:"/dashboard/pokemons",
      name: "Pokemons",
      description: "Pokemons description",
      icon: <MdCatchingPokemon className="w-6 h-6 text-white" />
    },
    {
      path: "/dashboard/crypto",
      name: "Crypto",
      description: "Crypto description",
      icon: <FaBitcoin className="w-6 h-6 text-white" />
    },
    {
      path: "/dashboard/stocks",
      name: "Stocks",
      description: "Stocks description",
      icon: <IoIosBusiness className="w-6 h-6 text-white" />
    }
  ]

  const handleLogout = () => {
    logout();
    router.push('/login');
  };
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">Dash<span className="text-blue-500">8</span>.</h1>
        <p className="text-slate-500 text-sm">{TITLE}</p>
        <button onClick={handleLogout} className="bg-red-500 text-white rounded px-5 py-2"
        >
          Cerrar sesion
        </button>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt=""
              width={32}
              height={32}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Rafael Huamani
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {
          navItems.map((item) => {
            return <NavbarItem key={item.name} {...item} />;
          })}
      </div>
    </div>
  );
};
