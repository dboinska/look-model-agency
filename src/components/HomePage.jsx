import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import Layout from './Layout';
import afroModelBigSize from '../photos/afroModel2BigSize.jpg';
import afroModelSmallSize from '../photos/afroModel2SmallSize.jpg';
import Heading from './Heading';
import Paragraph from './Paragraph';
import List from './List';
import PortfolioPhotos from './PortfolioPhotos';
import { H2, H3 } from './Headers';
import { SmallButton } from './Button';
import MyLink from './MyLink';
import Blog from './Blog';
import ColumnSection from './ColumnSection';
import ModelsTeam from './ModelsTeam';
import {
  DivTxt,
  DivImg,
  FeatureSectionMotion,
  cardVariantsRight,
  cardVariantsLeft,
} from './FeatureSection';

import models2SmallSize from '../photos/models2SmallSize.jpg';
import models2BigSize from '../photos/models2BigSize.jpg';

import { list } from '../data/ListAboutAgency';
import { portfolioPhotos } from '../data/PortfolioPhotos';
import { blog } from '../data/blog';

import TestimonialsSubpage from './Testimonials';

import HeroCarousel from './HeroCarousel';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>LOOK Model Agency</title>
        <meta name="description" content="LOOK Model Agency" />
      </Helmet>
      <Layout>
        <HeroCarousel />
        <FeatureSectionMotion
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          <DivTxt variants={cardVariantsLeft}>
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
          </DivTxt>
          <DivImg variants={cardVariantsRight}>
            <picture>
              <source media="(min-width:577px)" srcSet={afroModelBigSize} />
              <img src={afroModelSmallSize} alt="model with afro hair" />
            </picture>
          </DivImg>
        </FeatureSectionMotion>
        <Portfolio>
          <PortfolioPhotos photos={portfolioPhotos} limit={9}></PortfolioPhotos>
        </Portfolio>

        <FeatureSectionMotion
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          <DivTxt variants={cardVariantsRight} className="onBig--order2">
            <Heading heading="Casting">
              <H2 variant="marginNone">Do you want be a</H2>
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
          </DivTxt>
          <DivImg variants={cardVariantsLeft} className="onBig--order1">
            <picture>
              <source media="(min-width:577px)" srcSet={models2BigSize} />
              <img src={models2SmallSize} alt="model with afro hair" />
            </picture>
          </DivImg>
        </FeatureSectionMotion>
        <TestimonialsSubpage></TestimonialsSubpage>
        <ModelsTeam></ModelsTeam>
        <ColumnSection
          backgroundColor="var(--main-color)"
          justifyContent="space-evenly"
          backgroundImage="url('../photos/FASHION2.png')"
        >
          <div>
            <H2 variant="marginNone" padding="2rem 0">
              We have best of models from the fashion industry
            </H2>
            <H3>who involved in the fashion week around the world</H3>
          </div>
          <div>
            <MyLink to="/apply">Apply now</MyLink>
          </div>
        </ColumnSection>
        <Blog posts={blog} />
      </Layout>
    </>
  );
};

const FeatureParagraph = styled(Paragraph)`
  margin: 32px 0;
`;

const Portfolio = styled.section`
  padding: 0;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  background-color: var(--light-gray);
`;

export default HomePage;
