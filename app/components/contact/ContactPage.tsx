"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const address = "clement.selly@gmail.com";
  const letterDelay = 0.1;
  const pauseDelay = 1;
  
  // État pour contrôler l'animation en cours
  const [isAnimating, setIsAnimating] = useState(true);
  
  // Calcul de la durée totale d'un cycle avant pause
  const animationDuration = address.length * letterDelay + 0.5;
  
  // Gérer les cycles d'animation avec pause entre chaque cycle
  useEffect(() => {
    let timer;
    
    if (!isAnimating) {
      timer = setTimeout(() => {
        setIsAnimating(true);
      }, pauseDelay * 1000); // Pause avant de redémarrer
    } else {
      timer = setTimeout(() => {
        setIsAnimating(false);
      }, animationDuration * 1000); // Durée pour terminer un cycle complet
    }
    
    return () => clearTimeout(timer);
  }, [isAnimating, pauseDelay, animationDuration]);
  
  return (
    <div id='contact' className='flex flex-col items-center justify-around h-[100vh] bg-[#272727] text-white'>
      <h2 className='page-title text-center'>CONTACT</h2>

      <div>
        <p className='contact-message text-[22px] text-center'>N’hésitez pas à me contacter directement via mon adresse mail</p>
        {/* link to mailto */}
        <motion.a className='contact-mail text-[128px] hover:border rounded-full px-18 pb-4' href='mailto:clement.selly@gmail.com'>
          {
            address.split("").map((char, i) => (
              <motion.span
              key={`${char}-${i}`}
              animate={isAnimating ? {
                y: [0, -20, 0],
                transition: {
                  duration: 0.5,
                  delay: i * letterDelay,
                  ease: "easeInOut",
                }
              } : { y: 0 }}
              className="inline-block"
              >
                {char}
              </motion.span>
            ))
          }
        </motion.a>
      </div>
          
      {/* little bottom message with the heart */}
      <div className='flex items-center gap-4  -mb-10'>
        <p className='contact-message text-[20px]'>Designé et développé avec passion</p>
        <motion.p
          className='-mb-2'
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <Image src={'/icon/heart.png'} alt='Coeur' width={20} height={20} />
        </motion.p>
      </div>

      {/* button back to the top */}
      <Link className='absolute right-20 bottom-10' href={'/'}>
          <Image  src={'/icon/arrow-up.svg'} alt='Arrow' width={50} height={50} />
      </Link>
    </div>
  )
}

// address.split("").map((char, index, arr) => (
//   <motion.span 
//   key={index}
//   animate={{ y: [0, -10, 0] }}
//   transition={{
//     duration: 1,
//     repeat: Infinity,
//     repeatType: "loop",
//     ease: "easeInOut",
//     delay: index * 0.1,
//     repeatDelay: index === arr.length - 1 ? 1 : 0}}
//   style={{ display: 'inline-block' }}
//   >
//     {char}
//   </motion.span>
// ))