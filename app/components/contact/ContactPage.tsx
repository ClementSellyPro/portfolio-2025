"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const address = "clement.selly@gmail.com";
  const letterDelay = 0.1;
  const pauseDelay = 1;
  
  const animationDuration = address.length * letterDelay + 0.5;
  
  useEffect(() => {
    let timer;
    
    if (!isAnimating) {
      timer = setTimeout(() => {
        setIsAnimating(true);
      }, pauseDelay * 500); 
    } else {
      timer = setTimeout(() => {
        setIsAnimating(false);
      }, animationDuration * 1000);
    }
    
    return () => clearTimeout(timer);
  }, [isAnimating, pauseDelay, animationDuration]);

  function copyToClipboard() {
    navigator.clipboard.writeText(address)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy email:', err);
      });
  }
  
  return (
    <div id='contact' className='flex flex-col items-center justify-around h-[100vh] bg-[#272727] text-white'>
      <h2 className='page-title text-center lg:text-[64px] text-[36px]'>CONTACT</h2>

      <div className='flex flex-col items-center'>
        <p className='contact-message lg:text-[22px] text-[16px] text-center lg:w-full w-2/3'>N’hésitez pas à me contacter directement via mon adresse mail</p>
        {/* link to mailto */}
        <motion.a className='contact-mail lg:text-[128px] text-[48px] border border-transparent hover:border-white rounded-full lg:px-18 px-8 pb-4' href='mailto:clement.selly@gmail.com'>
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
        {/* button to copy the address */}
        <button
        onClick={copyToClipboard}
        className="text-white px-5 py-2 mt-5 rounded-full border hover:border-transparent transition-all text-sm cursor-pointer"
        >
          {copied ? 'Copié!' : 'Copier dans le presse-papier'}
        </button>
      </div>
          
      {/* little bottom message with the heart */}
      <div className='flex items-center gap-4  lg:-mb-10 -mb-15'>
        <p className='contact-message lg:text-[20px] text-[14px]'>Designé et développé avec passion</p>
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
      <Link className='absolute lg:right-20 right-6 lg:bottom-10 bottom-6' href={'/'}>
        <div className='w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] relative'>
          <svg
            viewBox="0 0 50 50"
            className="w-full h-full hover:-translate-y-2 transition-all"
            style={{ color: "#FFFFFF" }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              cx="25"
              cy="25"
              r="24"
              stroke="currentColor"
              strokeWidth="2"
            />
            <rect
              x="10.6428"
              y="29.6705"
              width="20.7472"
              height="2.50215"
              transform="rotate(-45 10.6428 29.6705)"
              fill="currentColor"
            />
            <rect
              x="37.6533"
              y="30.8726"
              width="19.9492"
              height="2.49778"
              transform="rotate(-135 37.6533 30.8726)"
              fill="currentColor"
            />
          </svg>
        </div>
      </Link>
    </div>
  )
}