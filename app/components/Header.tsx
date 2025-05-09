import Image from 'next/image';
import Menu from './Menu';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu () {
    setIsOpen(false)
  }

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut'}}
      className='flex justify-between lg:px-24 px-10 lg:pt-18 pt-8'>
      <div className='logo-name select-none flex flex-col lg:text-4xl text-xl h-fit relative z-30'><span>CLEMENT</span> <span>SELLY</span></div>
      <div className='flex items-center gap-14 relative z-30'>
        <a className='absolute top-0 lg:right-40 right-20 lg:w-[53px] lg:h-[53px] w-[30px] h-[30px]' href={'https://github.com/ClementSellyPro'} target='_blank'>
          <Image 
            className='hover:opacity-70 transition-all duration-150 object-contain' 
            src={'/icon/github.png'} 
            alt='github logo' 
            fill
            sizes="(max-width: 640px) 30px, 53px" />
        </a>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        {
          isOpen && (
          <div
            onClick={closeMenu}
            className="fixed inset-0 z-10 h-screen pointer-events-auto"
          />
        )}
      </div>
    </motion.header>
  )
}