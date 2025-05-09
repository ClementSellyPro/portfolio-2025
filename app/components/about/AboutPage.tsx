import Toolbox from './Toolbox'

export default function AboutPage() {
  return (
    <div id='about' className='lg:h-[110vh] h-[105vh] text-[#272727] bg-white relative'>
      <h2 className='page-title text-center pt-12 lg:text-[64px] text-[36px]'>A PROPOS</h2>
      <p className='about-text lg:text-[56px] text-[24px] lg:px-50 px-10 pt-5 lg:leading-22 leading-14'>
        <span className='about-stylish-word lg:text-[96px] text-[48px]'>Bonjour,</span><br/>
        Je suis développeur fullstack,
        passionné par le developpement web,
        ayant également des attraits pour le <span className='about-stylish-word lg:text-[96px] text-[48px]'>design</span>.
      </p>
      <Toolbox />
    </div>
  )
}