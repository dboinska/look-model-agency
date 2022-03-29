import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
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
import TeamCarousel from './TeamCarousel';
import MyLink from './MyLink';
import FeatureSection from './FeatureSection';
import Blog from './Blog';
import Footer from './Footer';
import ColumnSection from './ColumnSection';

import models2SmallSize from '../photos/models2SmallSize.jpg';
import models2BigSize from '../photos/models2BigSize.jpg';

import { list } from '../data/ListAboutAgency';
import { portfolioPhotos } from '../data/PortfolioPhotos';
import { team } from '../data/team';
import { blog } from '../data/blog';

import { Link } from 'react-router-dom';

import TestimonialsPage from './TestimonialsPage';

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
        <TestimonialsPage></TestimonialsPage>
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
            <Link to="/apply">
              <MyLink>Apply now</MyLink>
            </Link>
          </div>
        </ColumnSection>
        <Blog posts={blog} />
        <Footer />
      </main>
    </>
  );
};

const FeatureParagraph = styled(Paragraph)`
  margin: 32px 0;
`;

const Portfolio = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export default HomePage;
