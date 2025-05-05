"use client"
import Header from './components/Header';
import Hero from './components/Hero';
import BackgroundStripes from './components/BackgroundStripes';
import ProjectsPage from './components/projects/ProjectsPage';

export default function Home() {

  return (
    <div className='relative'>
      <div className="relative h-[100vh]">
        <BackgroundStripes />
        <Header />
        <Hero />
      </div>

      <main>
        <ProjectsPage />
      </main>
      
    </div>
  );
}
