import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Product from '../components/Product';

const App = () => {
  return (
    // <div className={`bg-background grid gap-y-16 overflow-hidden`}>
    // lets go with blue background instead of bg-background
    <div className={`bg-blue-100 grid gap-y-16 overflow-hidden`}>
      {/* <div className={`relative bg-background`}> */}
      {/* also make this blue */}
      <div className={`relative bg-blue-100`}>
        {/* <div className="max-w-7xl mx-auto"> */}
        <div>
          <div>
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <section id="community">
        <LazyShow>
          <>
            <Product />
            <Canvas />
          </>
        </LazyShow>
      </section>
      <section id="resources">
        <LazyShow>
          <>
            <Features />
            {/* <Canvas /> */}
          </>
        </LazyShow>
        {/* <LazyShow>
        <Pricing />
      </LazyShow> */}
      </section>
      <LazyShow>
        <>
          {/* <Canvas /> */}
          <About />
        </>
      </LazyShow>
      <Analytics />
      <Canvas />
    </div>
  );
};

export default App;
