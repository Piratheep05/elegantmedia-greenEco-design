import { useState } from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import CountSection from './components/CountSection';
import MissionSection from './components/MissionSection';
import ContributionSection from './components/ContributionSection';
import AppSection from './components/AppSection';

function App() {
 return (
    <>
      <Header />
      <HomeSection />
      <CountSection />
      <MissionSection />
      <ContributionSection />
      <AppSection />
    </>
  )
}

export default App
