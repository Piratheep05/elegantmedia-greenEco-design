import { useState } from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import CountSection from './components/CountSection';
import MissionSection from './components/MissionSection';
import ContributionSection from './components/ContributionSection';

function App() {
 return (
    <>
      <Header />
      <HomeSection />
      <CountSection />
      <MissionSection />
      <ContributionSection />
    </>
  )
}

export default App
