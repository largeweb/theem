import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-16 lg:px-8 xl:mt-20">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{' '}
          <br className="hidden lg:inline" />
          <div style={{ position: 'relative' }}>
            {/* <span className={`block xl:inline`} style={{position: 'absolute', left: '5px', top: '0px', color:"rgb(255, 0, 255)", fontSize: "5rem"}}> */}
            <span
              className={`block xl:inline`}
              style={{
                position: 'absolute',
                left: '5px',
                top: '0px',
                color: 'rgb(255, 0, 255)',
                fontSize: '5rem',
              }}
            >
              {mainHero.subtitle}
            </span>
            {/* <span className={`block xl:inline`} style={{position: 'absolute', left: '10px', top: '0px', color:"black", fontSize: "5rem"}}> */}
            <span
              className={`block xl:inline`}
              style={{
                position: 'absolute',
                left: '10px',
                top: '0px',
                color: 'black',
                fontSize: '5rem',
              }}
            >
              {mainHero.subtitle}
            </span>
            {/* <span className={`block xl:inline`} style={{position: 'absolute', left: '15px', top: '0px', color:"cyan", fontSize: "5rem"}}> */}
            <span
              className={`block xl:inline`}
              style={{
                position: 'absolute',
                left: '15px',
                top: '0px',
                color: 'cyan',
                fontSize: '5rem',
              }}
            >
              {mainHero.subtitle}
            </span>
            {/* <span className={`block xl:inline`} style={{ position: 'relative', color: "transparent", fontSize: "5rem" }}>asd</span> */}
            {/* <span className={`block xl:inline`} style={{ position: 'relative', color: 'transparent', fontSize: '5rem', }}> */}
            {/* <span className={`block xl:inline`} style={{ position: 'relative', color: 'transparent', fontSize: '5rem', }}> */}
            <span
              className={`block xl:inline`}
              style={{
                position: 'relative',
                color: 'transparent',
                fontSize: '5rem',
              }}
            >
              test
            </span>
          </div>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
