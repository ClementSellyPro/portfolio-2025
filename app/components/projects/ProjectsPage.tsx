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
    <div id={`project${projectData.id}`} className="projects-page lg:h-[105vh] h-auto lg:pb-0 pb-20 text-white w-full flex flex-col items-center relative" style={{ backgroundColor: bgColor, color: textColor }} >
      <div className='flex flex-col lg:gap-10 gap-4'>
        {
          projectData.id === '1' ? <h2 className='page-title text-center pt-12 pb-0 lg:text-[64px] text-[36px]'>PROJETS</h2> 
          : <div className='h-28 w-full'></div>
        }
        
        <a href={projectData.link}  target='_blank'>
          <div className='relative group custom-cursor' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className='flex items-center gap-5 lg:text-[82px] text-[32px] absolute lg:top-50 lg:-left-60 top-70 group-hover:lg:left-10 transition-all duration-600 left-1 z-10'>
              <h3 className='drop-shadow-2xl group-hover:left-10 transition-all duration-600 select-none' style={{ color: "#FFFFFF" }}>{ projectData.title }</h3>
              <div className='block lg:hidden'>
                <Image src={'/icon/cursor-sm.svg'} alt='Lien' width={20} height={20} />
              </div>
            </div>

            <div className='relative lg:w-[824px] lg:h-[447px] w-[336px] h-[182px] rounded-md group-hover:shadow-2xl'>
              <Image 
                className='filter brightness-80 rounded-md hover:brightness-65 transition-all duration-150' src={ projectData.image } 
                alt='Project illustration' 
                fill sizes="(max-width: 1024px) 336px, 824px" />
            </div>
            
          </div>
        </a>

        {/* Technologies */}
        <div className='flex items-center gap-5 flex-wrap lg:w-full w-[300px]'>
          {
            projectData.technologies.map((techno, index) => (
              <span 
                key={index}
                className='border py-1 lg:px-4 px-3 rounded-full lg:text-base text-[10px]'
                >
                {techno}
              </span>
            ))
          }
        </div>

        {/* Description */}
        <p className='lg:w-[820px] w-[320px] lg:-mt-5 mt-14 lg:text-base text-[12px]' >
        { projectData.description }
        </p>
      </div>
      {/* Arrows */}
      <div className='absolute lg:top-[35vh] top-[70vh] lg:right-20 right-10 flex flex-col items-center gap-5'>
        {
          projectData.id === "1" ? null 
          : 
          <Link href={`#project${String(parseInt(projectData.id) - 1)}`}>
            <div className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] relative lg:block hidden">
              <svg
                viewBox="0 0 50 50"
                className="w-full h-full hover:-translate-y-2 transition-all"
                style={{ color: textColor }}
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
              <div className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] relative lg:block hidden">
                <svg
                  viewBox="0 0 50 50"
                  className="w-full h-full hover:translate-y-2 transition-all"
                  style={{ color: textColor }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <circle
                    cx="25"
                    cy="25"
                    r="24"
                    transform="rotate(-180 25 25)"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="39.3572"
                    y="20.3295"
                    width="20.7472"
                    height="2.50215"
                    transform="rotate(135 39.3572 20.3295)"
                    fill="currentColor"
                  />
                  <rect
                    x="12.3467"
                    y="19.1274"
                    width="19.9492"
                    height="2.49778"
                    transform="rotate(45 12.3467 19.1274)"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>
          }
          
      </div>
    </div>
  )
}
{/* <Link href={`#project${String(parseInt(projectData.id) - 1)}`}>
  <div className='w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] relative lg:block hidden'>
    <Image className='hover:-translate-y-2 transition-all' src={'/icon/arrow-up.svg'} alt='Arrow' fill sizes="(max-width: 1024px) 30px, 50px" />
  </div>
</Link> */}

{/* <Link href={`#project${String(parseInt(projectData.id) + 1)}`}>
  <div className='w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] relative lg:block hidden'>
  <Image className='hover:translate-y-2 transition-all' src={'/icon/arrow-down.svg'} alt='Arrow' fill sizes="(max-width: 1024px) 30px, 50px"  style={{ color: textColor }} />
  </div>
</Link> */}