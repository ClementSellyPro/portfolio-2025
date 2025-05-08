import Toolbox from './Toolbox'

export default function AboutPage() {
  return (
    <div id='about' className='h-[110vh] text-[#272727] bg-white relative'>
      <h2 className='page-title text-center pt-12'>A PROPOS</h2>
      <p className='about-text text-[56px] px-50 leading-22'>
        <span className='about-stylish-word text-[82px]'>Bonjour,</span><br/>
        Je suis développeur fullstack,
        passionné par le developpement web,
        ayant également des attraits pour le <span className='about-stylish-word  text-[96px]'>design</span>.
      </p>
      <Toolbox />
    </div>
  )
}