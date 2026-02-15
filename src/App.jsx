import { useState } from "react";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import CountSection from "./components/CountSection";
import MissionSection from "./components/MissionSection";
import ContributionSection from "./components/ContributionSection";
import AppSection from "./components/AppSection";
import HashtagSection from "./components/HashtagSection";
import PartnerSection from "./components/PartnerSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HomeSection />
      <CountSection />
      <MissionSection />
      <ContributionSection />
      <AppSection />
      <HashtagSection />
      <PartnerSection />
      <NewsSection />
      <Footer />
    </>
  );
}

export default App;
