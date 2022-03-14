import { Helmet } from 'react-helmet-async';
import styled, { css } from 'styled-components/macro';
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
import Testimonials from './TestimonialsCarousel';
import TeamCarousel from './TeamCarousel';
import Link from './Link';

import models2SmallSize from '../photos/models2SmallSize.jpg';
import models2BigSize from '../photos/models2BigSize.jpg';
import fashion from '../photos/FASHION.png';

import { list } from '../data/ListAboutAgency';
import { portfolioPhotos } from '../data/PortfolioPhotos';
import { quotes } from '../data/quotes';
import { team } from '../data/team';

import { VscQuote } from 'react-icons/vsc';

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
        <ColumnSection backgroundColor="var(--main-color)">
          <div className="div__center">
            <VscQuoteStyled />
            <Heading heading="About us" headingPosition="center">
              <H2>What People say</H2>
            </Heading>
            <Testimonials quotes={quotes} />
          </div>
        </ColumnSection>
        <ColumnSection>
          <div className="div__center">
            <Heading heading="Team" headingPosition="center">
              <H2WithoutMargin>Super models</H2WithoutMargin>
            </Heading>
          </div>
          <TeamCarousel team={team} />
        </ColumnSection>
        <ColumnSection
          backgroundColor="var(--main-color)"
          justifyContent="space-evenly"
          backgroundImage="url('../photos/FASHION2.png')"
        >
          <div>
            <H2WithoutMargin>
              We have best of models from the fashion industry
            </H2WithoutMargin>
            <H3>who involved in the fashion week around the world</H3>
          </div>
          <div>
            <Link>Apply now</Link>
          </div>
        </ColumnSection>
      </main>
    </>
  );
};

const section = css`
  padding: 2rem;
`;

const VscQuoteStyled = styled(VscQuote)`
  font-size: 48px;
`;

const FeatureParagraph = styled(Paragraph)`
  margin: 32px 0;
`;

const ColumnSection = styled.section`
  display: flex;
  flex-direction: column;
  ${section}
  text-align: center;
  background-color: ${props => props.backgroundColor || 'var(--white)'};
  justify-content: ${props => props.justifyContent || 'auto'};
  background-image: ${props => props.backgroundImage || 'none'};
  min-height: 380px;
  background-position: center;
  background-repeat: repeat;

  .div__center {
    @media screen and (min-width: 992px) {
      margin: 0 auto;
      width: 60%;
      min-width: 350px;
    }
  }
`;

const FeatureSection = styled.section`
  display: flex;
  flex-direction: column;
  ${section}

  @media screen and (min-width: 992px) {
    margin: 40px 0;
  }

  .div__img {
    display: flex;
    justify-content: center;
  }
  picture {
    width: 300px;
    margin-top: 20px;

    img {
      object-fit: contain;
      width: 100%;
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
