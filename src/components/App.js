import React from 'react';

import Navbar from './Navbar';
import Hero from './Hero';
import heroPhoto from '../heroPhoto.png';
import afroModelBigSize from '../photos/afroModelBigSize.jpg';
import afroModelSmallSize from '../photos/afroModelSmallSize.jpg';
import Heading from './Heading';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import './app.scss';
import Paragraph from './Paragraph';
import List from './List';
import { list } from '../data/ListAboutAgency';
import PortfolioPhotos from './PortfolioPhotos';
import { portfolioPhotos } from '../data/PortfolioPhotos';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          imageUrl={heroPhoto}
          subHeading="Welcome to professional"
          heading="Model Agency"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            volutpat dictum pretium. Mauris eu tincidunt felis. Duis facilisis
            urna ante, in dapibus ante dignissim id. Phasellus eu ligula
            maximus, fermentum risus quis, pellentesque neque. Pellentesque
            hendrerit molestie eros vitae vehicula."
          link="\"
          linkLabel="Read More"
        ></Hero>
        <section className="aboutAgency">
          <div className="div__txt">
            <Heading heading="History">
              <h2 className="h2">About our Agency</h2>
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              est vel justo cursus rutrum ac eleifend ex. Pellentesque dapibus
              venenatis enim. Praesent massa libero, porta eu dolor id,
              tristique rutrum lectus. Sed dapibus, sapien euismod tempus
              efficitur, sapien velit placerat lectus, eu lobortis enim nulla
              vel velit. Nulla non.
            </Paragraph>
            <List items={list}></List>
          </div>
          <div className="div__img">
            <picture>
              <source media="(min-width:577px)" srcSet={afroModelBigSize} />
              <img
                className=""
                src={afroModelSmallSize}
                alt="model with afro hair"
              />
            </picture>
          </div>
        </section>
        <section className="portfolio">
          <PortfolioPhotos photos={portfolioPhotos}></PortfolioPhotos>
        </section>
      </main>
    </>
  );
}

export default App;
