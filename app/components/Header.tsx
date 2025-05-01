import Image from 'next/image';
import Menu from './Menu';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3, ease: 'easeOut'}}
      className='flex justify-between px-24 py-18'>
      <div className='logo-name flex flex-col text-4xl'><span>CLEMENT</span> <span>SELLY</span></div>
      <div className='flex items-center gap-14 relative'>
        <a className='absolute top-0 right-40 w-13 h-13' href={'https://github.com/ClementSellyPro'} target='_blank'>
          <Image className='hover:opacity-70 transition-all duration-150' src={'/icon/github.png'} alt='github logo' width={53} height={53} />
        </a>
        <Menu />
      </div>
    </motion.header>
  )
}
