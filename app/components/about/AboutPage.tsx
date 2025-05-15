import Image from 'next/image'
import Toolbox from './Toolbox'

export default function AboutPage() {
  return (
    <div id='about' className='lg:h-[130vh] h-[145vh] text-[#272727] bg-white relative'>
      <h2 className='page-title text-center pt-12 lg:text-[64px] text-[36px]'>A PROPOS</h2>
      <p className='about-text lg:text-[56px] text-[24px] lg:px-50 px-10 pt-5 lg:leading-22 leading-14'>
        <span className='about-stylish-word lg:text-[96px] text-[48px]'>Bonjour,</span><br/>
        Je suis développeur fullstack,
        passionné par le developpement web,
        ayant également des attraits pour le <span className='about-stylish-word lg:text-[96px] text-[48px]'>design</span>. Grâce à ma formation 
        <span className='inline-block align-middle relative w-[120px] h-[40px] lg:w-[350px] lg:h-[50px]'>
          <Image 
            src={'/icon/openclassrooms.png'} 
            alt='Openclassrooms' 
            fill
            className='object-contain' />
        </span>(2025), j’ai pu renforcer mes compétences et les développer davantage. 
      </p>
      <Toolbox />
    </div>
  )
}