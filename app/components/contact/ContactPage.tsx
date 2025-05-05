import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'

export default function ContactPage() {
  const address = "clement.selly@gmail.com"

  return (
    <div id='contact' className='flex flex-col items-center justify-around h-[100vh] bg-[#272727] text-white'>
      <h2 className='page-title text-center'>CONTACT</h2>

      <div>
        <p className='contact-message text-[32px]'>N’hésitez pas à me contacter directement via mon adresse mail</p>
        {/* link to mailto */}
        <motion.a className='contact-mail text-[128px]' href='mailto:clement.selly@gmail.com'>
          {
            address.split("").map((char, index) => (
              <motion.span 
              key={index}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: index * 0.1}}
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