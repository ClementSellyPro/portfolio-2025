"use client"
import { motion } from 'framer-motion';
import { navContainer, navItem } from '@/app/animations/animations';
import { SetStateAction, Dispatch, useEffect } from 'react';
import Link from 'next/link';

type PropsType = {
  isOpen: boolean, 
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Menu({isOpen, setIsOpen}: PropsType) {
  const navLinks = [
    {title:'ACCUEIL', link: '/'}, 
    { title:'PROJETS', link: '#projects'}, 
    { title:'A PROPOS', link: '#about' }, 
    { title: 'CONTACT', link: '#contact' }];

  function openMenu (e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    const target = e.target as HTMLElement;

    if(!target.classList.contains('menu-btn') && isOpen){
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    function handleScroll() {
      if (isOpen) {
        setIsOpen(false);
      }
    }

    function handleEsc(e: KeyboardEvent) {
      if(e.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('keydown', (e: KeyboardEvent) => handleEsc(e));
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.addEventListener('keydown', (e: KeyboardEvent) => handleEsc(e));
    };
  }, [isOpen, setIsOpen]);

  return (
    <div onClick={(e: React.MouseEvent<HTMLDivElement>) => openMenu(e)} className={`${isOpen ? "lg:w-72 lg:h-80 w-56 h-60 rounded-3xl bg-gray-200" : "lg:w-26 lg:h-13 w-[50px] h-[28px] rounded-4xl" }  border-black border-1 hover:bg-gray-300 transition-all duration-300
    absolute right-0 top-0 flex justify-center items-center cursor-pointer menu-btn z-[70]`}>
      {
        isOpen &&
        <motion.nav 
          variants={navContainer}
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0 }}
          className={`flex flex-col gap-4 lg:text-4xl text-xl text-center`}>
            {
              navLinks.map((item, index) => (
                <Link href={item.link} key={index}>
                  <motion.span
                    variants={navItem}
                    className="nav-item text-[#272727] relative cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                      {item.title}
                  </motion.span>
                </Link>)
              )
            }
        </motion.nav>
      }
      <div className='flex flex-col gap-2 absolute lg:right-7.5 lg:top-4 right-3 top-2 cursor-pointer'>
        <div className={`lg:w-10 lg:h-1 w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`lg:w-10 lg:h-1 w-6 h-0.5 bg-black transition-transform furation-300 ${isOpen ?'-rotate-45 -translate-y-1.5' : ''}`}></div>
      </div>
    </div>
  )
}