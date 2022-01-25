import React from 'react';
import '../../App.css';
import Cards from '../Base/Cards/Cards';
import HeroSectionHome from '../Base/HeroSections/HeroSectionHome';
import Footer from '../Base/Build/Footer';

function Home() {
  return (
    <>
      <HeroSectionHome />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
