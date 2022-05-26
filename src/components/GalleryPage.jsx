import Layout from './Layout';
import styled from 'styled-components/macro';
import PortfolioPhotos from './PortfolioPhotos';

import heroPhoto from '../photos/galleryPhoto.png';
import Hero from './Hero';

import { portfolioPhotos } from '../data/PortfolioPhotos';

const GalleryPage = () => {
  return (
    <Layout>
      <Hero
        backgroundColor="var(--salmon)"
        imageUrl={heroPhoto}
        subHeading="let's see"
        heading="Our gallery"
        description="Phasellus cursus lorem metus, sed mollis enim consequat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget nibh. "
        link="/testimonials"
        linkLabel="read more"
      ></Hero>
      <Portfolio>
        <PortfolioPhotos photos={portfolioPhotos}></PortfolioPhotos>
      </Portfolio>
    </Layout>
  );
};

export const Portfolio = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export default GalleryPage;
