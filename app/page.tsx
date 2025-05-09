"use client"
import Header from './components/Header';
import Hero from './components/Hero';
import BackgroundStripes from './components/BackgroundStripes';
import ProjectsPageContainer from './components/projects/ProjectsPageContainer';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';

export default function Home() {

  return (
    <div className='relative scroll-smooth'>
      <div className="relative h-[100vh]">
        <BackgroundStripes />
        <Header />
        <Hero />
      </div>

      <main>
        <ProjectsPageContainer />
        <AboutPage />
        <ContactPage />
      </main>
    </div>
  );
}
