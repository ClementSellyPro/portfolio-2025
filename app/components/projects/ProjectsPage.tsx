"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ProjectType } from '@/app/type/ProjectType';

type PropsType = {
  projectData: ProjectType, 
  numberOfProjects: number
} 

export default function ProjectsPage({projectData, numberOfProjects}: PropsType) {
  const [bgColor, setBgColor] = useState('#272727');
  const [textColor, settextColor] = useState('#FFFFFF');

  function onMouseEnter() {
    const newColor = projectData.color;
    setBgColor(newColor);
    settextColor('#272727');
  }

  function onMouseLeave() {
    setBgColor('#272727');
    settextColor('#FFFFFF');
  }

  return (
    <div id={`project${projectData.id}`} className="projects-page lg:h-[105vh] h-auto lg:pb-0 pb-20 text-white w-full flex flex-col items-center relative" style={{ backgroundColor: bgColor }}>
      <div className='flex flex-col lg:gap-10 gap-4'>
        {
          projectData.id === '1' ? <h2 className='page-title text-center pt-12 pb-0 lg:text-[64px] text-[36px]'>PROJETS</h2> 
          : <div className='h-28 w-full'></div>
        }
        
        <a href={projectData.link}  target='_blank'>
          <div className='relative group custom-cursor' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className='flex items-center gap-5 lg:text-[82px] text-[32px] absolute lg:top-50 lg:-left-60 top-70 left-1 z-10'>
              <h3 className='drop-shadow-2xl group-hover:left-10 transition-all duration-600 select-none'>{ projectData.title }</h3>
              <Image src={'/icon/cursor-sm.svg'} alt='Lien' width={20} height={20} />
            </div>

            <div className='relative lg:w-[824px] lg:h-[447px] w-[336px] h-[182px]'>
              <Image 
                className='filter brightness-80 rounded-md hover:brightness-65 transition-all duration-150' src={ projectData.image } 
                alt='Project illustration' 
                fill sizes="(max-width: 1024px) 336px, 824px" />
            </div>
            
          </div>
        </a>

        {/* Technologies */}
        <div className='flex items-center gap-5 flex-wrap lg:w-full w-[300px]' style={{ color: textColor }}>
          {
            projectData.technologies.map((techno, index) => (
              <span 
                key={index}
                className='border py-1 lg:px-4 px-3 rounded-full lg:text-base text-[10px]' style={{ color: textColor }}
                >
                {techno}
              </span>
            ))
          }
        </div>

        {/* Description */}
        <p className='lg:w-[820px] w-[320px] lg:-mt-5 mt-14 lg:text-base text-[12px]' style={{ color: textColor }}>
        { projectData.description }
        </p>
      </div>
      {/* Arrows */}
      <div className='absolute lg:top-[35vh] top-[70vh] lg:right-20 right-10 flex flex-col items-center gap-5'>
        {
          projectData.id === "1" ? null 
          : 
          <Link href={`#project${String(parseInt(projectData.id) - 1)}`}>
            <div className='w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] relative lg:block hidden'>
              <Image className='hover:-translate-y-2 transition-all' src={'/icon/arrow-up.svg'} alt='Arrow' fill sizes="(max-width: 1024px) 30px, 50px" />
            </div>
          </Link>
        }
          

          <p className='lg:text-[32px] text-[14px] project-indicator lg:block hidden'>
            <span>
              {projectData.id}</span>/<span>{numberOfProjects}
            </span>
          </p>

          {
            projectData.id === String(numberOfProjects) ? 
            null 
            : 
            <Link href={`#project${String(parseInt(projectData.id) + 1)}`}>
              <div className='w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] relative lg:block hidden'>
              <Image className='hover:translate-y-2 transition-all' src={'/icon/arrow-down.svg'} alt='Arrow' fill sizes="(max-width: 1024px) 30px, 50px" />
            </div>
          </Link>
          }
          
      </div>
    </div>
  )
}