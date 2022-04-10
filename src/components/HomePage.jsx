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
import TeamCarousel from './TeamCarousel';
import MyLink from './MyLink';
import FeatureSection from './FeatureSection';
import Blog from './Blog';
import ColumnSection from './ColumnSection';

import models2SmallSize from '../photos/models2SmallSize.jpg';
import models2BigSize from '../photos/models2BigSize.jpg';

import { list } from '../data/ListAboutAgency';
import { portfolioPhotos } from '../data/PortfolioPhotos';
import { team } from '../data/team';
import { blog } from '../data/blog';

import TestimonialsPage from './TestimonialsPage';

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
        {/* <Hero
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
        <Hero
          backgroundColor="var(--salmon)"
          flexDirection="row"
          padding="0 0 4rem 4rem"
          imageUrl={modelHero2}
          subHeading="Welcome to professional"
          heading="Model Agency"
          description="Nunc vel scelerisque turpis, lobortis ullamcorper quam. Maecenas interdum non leo non pellentesque. Quisque a quam dignissim nisi volutpat venenatis maximus eu velit. Morbi eget sollicitudin diam. Mauris mattis laoreet diam ac posuere. Curabitur maximus nulla nec libero tincidunt, at tincidunt orci lobortis."
          link="\"
          linkLabel="Read More"
        ></Hero>
        <Hero
          backgroundColor="var(--light-gray)"
          imageUrl={model}
          subHeading="Welcome to professional"
          heading="Model Agency"
          description="Nam tincidunt urna id porttitor posuere. Sed sodales ligula commodo dictum ultricies. Nam mattis erat sit amet odio ultrices dapibus. Mauris malesuada fermentum eleifend. Morbi eu sagittis elit, vitae aliquam orci. Vestibulum feugiat odio lacus, sed porta odio auctor in. Nam vulputate ipsum dignissim erat ultricies, a vestibulum arcu consequat. "
          link="\"
          linkLabel="Read More"
        ></Hero> */}

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
              <H2 variant="marginNone">Super models</H2>
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
            <H2 variant="marginNone">
              We have best of models from the fashion industry
            </H2>
            <H3>who involved in the fashion week around the world</H3>
          </div>
          <div>
            <MyLink to="/apply">Apply now</MyLink>
            {/* <Link to="/apply">
              <MyLink>Apply now</MyLink>
            </Link> */}
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
  margin: 0;
  padding: 0;
  width: 100%;
`;

export default HomePage;
