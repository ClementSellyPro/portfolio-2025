import { motion } from 'framer-motion';
import { titleContainer, letter } from '../animations/animations';

export default function Hero() {
  const title = "PORTFOLIO";

  return (
    <section className='h-full w-full -mt-48 flex flex-col justify-center items-center pointer-events-none relative z-30'>
      <div className='flex items-center'>

        <motion.h1 
          className='portfolio-title flex space-x-1 lg:text-[256px] text-[96px] text-[#272727]' 
          variants={titleContainer} 
          initial="hidden" 
          animate="visible">
          {
            title.split("").map((char, index) => (
              <motion.span 
                key={index}
                variants={letter}
                >
                {char}
              </motion.span>
            ))
          }
        </motion.h1>

        <motion.p 
          className='portfolio-date lg:mt-42 mt-14 lg:text-[16px] text-[12px]'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x:0, transition: {delay: 0.9} }}>
            2025
        </motion.p>
      </div>
      <motion.h2 
        className='portfolio-subtitle lg:-mt-14 -mt-5 lg:text-[36px] text-[16px]'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y:0, transition: {delay: 1.2} }}
        >
        Développeur Web Fullstack
      </motion.h2>
      <motion.p 
        className='portfolio-bottom-text absolute bottom-2 lg:text-[24px] text-[14px]'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y:0, transition: {delay: 2} }}
        >
        Découvrons ensemble mes projets et mon savoir faire
      </motion.p>
    </section>
  )
}