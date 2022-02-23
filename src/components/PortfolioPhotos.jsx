import PortfolioPhoto from './PortfolioPhoto';
import './portfolio.scss';
import Heading from './Heading';

const PortfolioPhotos = ({ photos }) => {
  return (
    <div className="portfolio__images">
      <div className="portfolio__img portfolio__img--first">
        <Heading heading="Portfolio">
          <h2>Our beautiful works</h2>
        </Heading>
      </div>
      {photos.map(({ id, imgSmallSize, title }) => (
        <div className="portfolio__img" key={id}>
          <PortfolioPhoto img={imgSmallSize} alt={title} />
        </div>
      ))}

      <div className="portfolio__img portfolio__img--last">
        <h3>Load more works</h3>
      </div>
    </div>
  );
};

export default PortfolioPhotos;
