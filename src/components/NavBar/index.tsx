"use client";
import React from 'react'
import {  useRouter } from "next/navigation";
import { adminNavOptions, clientNavOptions } from '@/constants';
import { MenuICON } from '@/assets/icons';

const NavBar = () => {
    const router = useRouter();
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div
        onClick={() => router.push("/")}
        className="flex items-center cursor-pointer"
      >
        <span className="self-center text-black text-2xl font-semibold whitespace-nowrap">
          ShopMate
        </span>
      </div>
      <div className="flex md:order-2 gap-2">
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <MenuICON />
        </button>
      </div>
      <NavItems isAdmin={false} />
    </div>
  </nav>
  )
}

export default NavBar

const NavItems = ({isAdmin}:any) => {
    const router = useRouter();

    return (
        <div
      className={`items-center justify-between w-full md:flex md:w-auto`}
      id="nav-items"
    >
      <ul
        className={`flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white`}
      >
        {isAdmin
          ? adminNavOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </li>
            ))
          : clientNavOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </li>
            ))}
      </ul>
    </div>
    )
}
