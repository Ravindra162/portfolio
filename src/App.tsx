import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsSection from './components/skills/SkillsSection';
import TechStackSection from './components/skills/TechStackSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SkillsSection />
      <TechStackSection />
    </div>
  );
}

export default App;