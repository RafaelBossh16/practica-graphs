"use client"
import React from 'react'
import { IItem } from './types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavbarItem = ({ name, description, icon, path }: IItem) => {
  const currentPath = usePathname();
  return (
    <Link href={path} className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3
      ${currentPath === path ? "bg-blue-800" : ""}`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{name}</span>
        {/* <Text text={name} /> */}
        <span className="text-sm text-white/50 hidden md:block">{description}</span>
      </div>
    </Link>
  );
};
