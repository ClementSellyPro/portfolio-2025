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

  function onMouseEnter() {
    const newColor = projectData.color;
    setBgColor(newColor);
  }

  function onMouseLeave() {
    setBgColor('#272727');
  }

  return (
    <div id={`project${projectData.id}`} className="projects-page h-[105vh] text-white w-full flex flex-col items-center relative" style={{ backgroundColor: bgColor }}>
      <div className='flex flex-col gap-10'>
        {
          projectData.id === '1' ? <h2 className='page-title text-center pt-12 pb-0 lg:text-[64px] text-[36px]'>PROJETS</h2> 
          : <div className='h-28 w-full'></div>
        }
        
        <a href={projectData.link}  target='_blank'>
          <div className='relative group custom-cursor' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <h3 className='text-[82px] absolute top-50 -left-60 z-10 drop-shadow-2xl group-hover:left-10 transition-all duration-600 select-none'>{ projectData.title }</h3>

            <div className='relative lg:w-[824px] lg:h-[447px] w-[336px] h-[182px]'>
              <Image 
                className='filter brightness-80 rounded-md hover:brightness-65 transition-all duration-150' src={ projectData.image } 
                alt='Project illustration' 
                fill sizes="(max-width: 1024px) 336px, 824px" />
            </div>
            
          </div>
        </a>

        {/* Technologies */}
        <div className='flex items-center gap-5'>
          {
            projectData.technologies.map((techno, index) => (
              <span 
                key={index}
                className='border border-white py-1 px-4 rounded-full lg:text-base text-[10px]'
                >
                {techno}
              </span>
            ))
          }
        </div>

        {/* Description */}
        <p className='w-[820px] -mt-5 lg:text-base text-[12px]'>
        { projectData.description }
        </p>
      </div>
      {/* Arrows */}
      <div className='absolute lg:top-[35vh] top-[60vh] lg:right-20 right-10 flex flex-col items-center gap-5'>
        {
          projectData.id === "1" ? null 
          : 
          <Link href={`#project${String(parseInt(projectData.id) - 1)}`}>
            <Image className='hover:-translate-y-2 transition-all' src={'icon/arrow-up.svg'} alt='Arrow navigation' width={50} height={50} />
          </Link>
        }
          

          <p className='text-[32px] project-indicator'><span>{projectData.id}</span>/<span>{numberOfProjects}</span></p>

          {
            projectData.id === String(numberOfProjects) ? 
            null 
            : 
            <Link href={`#project${String(parseInt(projectData.id) + 1)}`}>
              <Image className='hover:translate-y-2 transition-all' src={'icon/arrow-down.svg'} alt='Arrow navigation' width={50} height={50} />
          </Link>
          }
          
      </div>
    </div>
  )
}