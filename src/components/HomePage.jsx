import { Helmet } from 'react-helmet-async';

import Navbar from './Navbar';
import Hero from './Hero';
import heroPhoto from '../photos/heroPhoto.png';
import afroModelBigSize from '../photos/afroModel2BigSize.jpg';
import afroModelSmallSize from '../photos/afroModel2SmallSize.jpg';
import Heading from './Heading';
import Paragraph from './Paragraph';
import List from './List';
import PortfolioPhotos from './PortfolioPhotos';
import { H2 } from './Headers';

import { list } from '../data/listAboutAgency';
import { portfolioPhotos } from '../data/portfolioPhotos';

import styled, { css } from 'styled-components/macro';
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>LOOK Model Agency</title>
        <meta name="description" content="LOOK Model Agency" />
      </Helmet>
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
        <AboutAgency>
          <div className="div__txt">
            <Heading heading="History">
              <H2>About our Agency</H2>
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
              <img src={afroModelSmallSize} alt="model with afro hair" />
            </picture>
          </div>
        </AboutAgency>
        <Portfolio>
          <PortfolioPhotos photos={portfolioPhotos}></PortfolioPhotos>
        </Portfolio>
      </main>
    </>
  );
};

const section = css`
  padding: 2rem;
`;

const AboutAgency = styled.section`
  display: flex;
  flex-direction: column;
  /* max-height: 60vh; */
  min-height: 564px;
  ${section};

  .div__img {
    display: flex;
    justify-content: center;
  }
  picture {
    width: 300px;
    height: 500px;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
    padding: 2rem 4rem;

    .div__txt {
      width: 70%;
      padding-right: 2rem;
    }

    .div__img {
      width: 30%;
    }
  }
`;

const Portfolio = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export default HomePage;
