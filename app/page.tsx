"use client"
import Header from './components/Header';
import Hero from './components/Hero';
import BackgroundStripes from './components/BackgroundStripes';

export default function Home() {

  return (
    <div>
      <Header />
      <main>
        <BackgroundStripes />
        <Hero />
        
      </main>
      
    </div>
  );
}
