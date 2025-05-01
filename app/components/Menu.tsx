"use client"
import { useState } from 'react'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu () {
    setIsOpen(!isOpen);
  }

  return (
    <div onClick={openMenu} className={`${isOpen ? "w-72 h-80 rounded-3xl" : "w-26 h-13 rounded-full" } bg-gray-300  border-black border-1 cursor-pointer hover:bg-gray-400 transition-all duration-150
    absolute right-0 top-0 flex justify-center items-center`}>
      <nav className={`${isOpen ? "flex" : "hidden"} flex-col gap-4 text-4xl text-center`}>
        <span className='nav-item'>ACUEIL</span>
        <span className='nav-item'>PROJETS</span>
        <span className='nav-item'>A PROPOS</span>
        <span className='nav-item'>CONTACT</span>
      </nav>
    </div>
  )
}