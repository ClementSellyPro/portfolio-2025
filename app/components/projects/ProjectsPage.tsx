"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectsPage({titlePage}: {titlePage: string}) {
  const [bgColor, setBgColor] = useState('#272727');
  const techno = ['NEXT JS', "TYPESCRIPT", "TAILWINDCSS", "DESIGN"];

  function onMouseEnter() {
    setBgColor('#E9AC44');
  }

  function onMouseLeave() {
    setBgColor('#272727');
  }

  return (
    <div className="projects-page h-[105vh] text-white w-full flex flex-col items-center relative" style={{ backgroundColor: bgColor }}>
      <div className='flex flex-col gap-10'>
        <h2 className='page-title text-center pt-12 pb-0 text-white'>{titlePage}</h2>
        <a href={"https://kalipro.re"}  target='_blank'>
          <div className='relative group custom-cursor' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <h3 className='text-[96px] absolute top-50 -left-60 z-10 drop-shadow-2xl group-hover:left-10 transition-all duration-600 select-none'>Kalipro.re</h3>
            <Image className='filter brightness-50 rounded-md hover:brightness-80 transition-all duration-150' src={'/picture/kalipro.png'} alt='Project illustration' width={820} height={450} />
          </div>
        </a>

        {/* Technologies */}
        <div className='flex items-center gap-5'>
          {
            techno.map((techno, index) => (
              <span 
                key={index}
                className='border border-white py-1 px-4 rounded-full'
                >
                {techno}
              </span>
            ))
          }
        </div>

        {/* Description */}
        <p className='w-[800px]'>
        Mon premier gros projet, que j’ai réalisé en NextJS. Il s’agit d’une plateforme qui met en lien les artisans et les clients.
        Ce projet m’a permis d’apprendre énormément, notamment configurer un serveur VPS.
        </p>
      </div>
      {/* Arrows */}
      <div className='absolute top-[35vh] right-20 flex flex-col items-center gap-5'>
          <Link href="">
            <Image className='hover:-translate-y-2 transition-all' src={'icon/arrow-up.svg'} alt='Arrow navigation' width={50} height={50} />
          </Link>

          <p className='text-[32px] project-indicator'><span>1</span>/<span>3</span></p>

          <Link href="">
            <Image className='hover:translate-y-2 transition-all' src={'icon/arrow-down.svg'} alt='Arrow navigation' width={50} height={50} />
          </Link>
      </div>
    </div>
  )
}