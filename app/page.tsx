"use client"
import Header from './components/Header';
import Hero from './components/Hero';
import BackgroundStripes from './components/BackgroundStripes';
import ProjectsPageContainer from './components/projects/ProjectsPageContainer';

export default function Home() {

  return (
    <div className='relative'>
      <div className="relative h-[100vh]">
        <BackgroundStripes />
        <Header />
        <Hero />
      </div>

      <main>
        <ProjectsPageContainer />
      </main>
      
    </div>
  );
}
