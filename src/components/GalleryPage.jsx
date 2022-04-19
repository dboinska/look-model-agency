import Layout from './Layout';
import styled from 'styled-components/macro';
import PortfolioPhotos from './PortfolioPhotos';

import { portfolioPhotos } from '../data/PortfolioPhotos';

const GalleryPage = () => {
  return (
    <Layout>
      <Portfolio>
        <PortfolioPhotos photos={portfolioPhotos}></PortfolioPhotos>
      </Portfolio>
      {/* {portfolioPhotos.map(portfolioPhoto => {
        const { id, imgSmallSize, title } = portfolioPhoto;
        return (
          <PortfolioImg className="portfolio__img" key={id}>
            <PortfolioPhoto img={imgSmallSize} alt={title} />
          </PortfolioImg>
        );
      })} */}
    </Layout>
  );
};

const Portfolio = styled.section`
  margin: 0;
  padding: 0;
  padding-top: 100px;
  width: 100%;
`;

export default GalleryPage;
