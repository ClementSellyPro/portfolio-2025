export default function Hero() {
  return (
    <section className='h-[100vh] w-full -mt-48 flex flex-col justify-center items-center pointer-events-none relative z-30'>
      <div className='flex items-center'>
        <h1 className='portfolio-title'>PORTFOLIO</h1>
        <p className='portfolio-date mt-42'>2025</p>
      </div>
      <h2 className='portfolio-subtitle -mt-14'>Développeur Web Fullstack</h2>
      <p  className='portfolio-bottom-text absolute bottom-2'>Découvrons ensemble mes projets et mon savoir faire</p>
    </section>
  )
}