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
import { H2, H2WithoutMargin, H3 } from './Headers';
import { SmallButton } from './Button';

import models2SmallSize from '../photos/models2SmallSize.jpg';
import models2BigSize from '../photos/models2BigSize.jpg';

import { list } from '../data/ListAboutAgency';
import { portfolioPhotos } from '../data/PortfolioPhotos';

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
        <FeatureSection>
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
        </FeatureSection>
        <Portfolio>
          <PortfolioPhotos photos={portfolioPhotos}></PortfolioPhotos>
        </Portfolio>
        <FeatureSection>
          <div className="div__txt onBig--order2">
            <Heading heading="Casting">
              <H2WithoutMargin>Do you want be a</H2WithoutMargin>
              <H3>Super model</H3>
            </Heading>
            <FeatureParagraph>
              Donec ac est vel justo cursus rutrum ac eleifend ex. Pellentesque
              dapibus venenatis enim. Praesent massa libero, porta eu dolor id,
              tristique rutrum lectus. Sed dapibus, sapien euismod tempus
              efficitur, sapien velit placerat lectus, eu lobortis enim nulla
              vel velit. Nulla non.
            </FeatureParagraph>
            <SmallButton>Discover more</SmallButton>
          </div>
          <div className="div__img onBig--order1">
            <picture>
              <source media="(min-width:577px)" srcSet={models2BigSize} />
              <img src={models2SmallSize} alt="model with afro hair" />
            </picture>
          </div>
        </FeatureSection>
      </main>
    </>
  );
};

const section = css`
  padding: 2rem;
`;

const FeatureParagraph = styled(Paragraph)`
  margin: 32px 0;
`;

const FeatureSection = styled.section`
  display: flex;
  flex-direction: column;

  /* max-height: 60vh; */
  /* min-height: 564px; */
  ${section}

  .div__img {
    display: flex;
    justify-content: center;
  }
  picture {
    width: 300px;
    margin-top: 20px;
    /* height: 500px; */

    img {
      object-fit: contain;
      width: 100%;
      /* height: 100%; */
    }
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
    padding: 2rem 4rem;

    picture {
      margin-top: 0;
    }

    .div__txt {
      width: 60%;
      padding-right: 2rem;
    }

    .div__img {
      width: 40%;
    }

    .onBig--order1 {
      order: 1;
    }

    .onBig--order2 {
      order: 2;
    }
  }
`;

const Portfolio = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export default HomePage;
