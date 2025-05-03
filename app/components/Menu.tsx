"use client"
import { motion } from 'framer-motion';
import { navContainer, navItem } from '@/app/animations/animations';
import { SetStateAction, Dispatch } from 'react';

type PropsType = {
  isOpen: boolean, 
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Menu({isOpen, setIsOpen}: PropsType) {
  const navLinks = ['ACCUEIL', 'PROJETS', 'A PROPOS', 'CONTACT'];

  function openMenu (e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    const target = e.target as HTMLElement;

    if(!target.classList.contains('menu-btn') && isOpen){
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <div onClick={(e: React.MouseEvent<HTMLDivElement>) => openMenu(e)} className={`${isOpen ? "w-72 h-80 rounded-3xl bg-gray-200" : "w-26 h-13 rounded-4xl" }  border-black border-1 hover:bg-gray-300 transition-all duration-300
    absolute right-0 top-0 flex justify-center items-center cursor-pointer menu-btn z-30`}>
      {
        isOpen &&
        <motion.nav 
          variants={navContainer}
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0 }}
          className={`flex flex-col gap-4 text-4xl text-center`}>
            {
              navLinks.map((item, index) => (
              <motion.span
                key={index}
                variants={navItem}
                className="nav-item relative cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                  {item}
              </motion.span>)
              )
            }
        </motion.nav>
      }
      <div className='flex flex-col gap-2 absolute right-7.5 top-4 cursor-pointer'>
        <div className={`w-10 h-1 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-10 h-1 bg-black transition-transform furation-300 ${isOpen ?'-rotate-45 -translate-y-1.5' : ''}`}></div>
      </div>
    </div>
  )
}