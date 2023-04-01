"use client";
import React, { useState } from "react";
import Image from "next/image";

export const NavBar = () => {
  const [opened, setOpened] = useState(false);
  return (
    <nav className="bg-gray-800 p-5 flex justify-center items-center">
      <div className=" flex w-96 gap-2 border border-solid border-neutral-300 rounded-md bg-transparent p-2 text-white items-center">
        <input
          placeholder="Search songs"
          className="flex-1 outline-none bg-transparent"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            fill="white"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </nav>
  );
};
