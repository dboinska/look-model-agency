import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { MyLinkLight } from './MyLink';
import Layout from './Layout';
import { Portfolio } from './GalleryPage';
import { FeatureSectionMotion } from './FeatureSection';
import {
  DivTxt,
  DivImg,
  // FeatureSectionMotion,
  cardVariantsRight,
  cardVariantsLeft,
} from './FeatureSection';

import Paragraph from './Paragraph';
import { H2, H3 } from './Headers';
import Heading from './Heading';
import { portfolioPhotos } from '../data/PortfolioPhotos';

const ImgPage = () => {
  const { id } = useParams();
  const portfolioPhoto = portfolioPhotos.find(photo => photo.id === id);
  console.log(portfolioPhoto);
  const imageClick = () => {
    console.log('Click!!!!');
  };
  return (
    <Layout>
      <Portfolio>
        <FeatureSectionMotion
          height="calc(100vh - 100px)"
          min_height="600px"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <DivTxt variants={cardVariantsRight} className="onBig--order2">
            <Heading heading={portfolioPhoto.category}>
              <H2 variant="marginNone">{portfolioPhoto.title}</H2>
              <H3>Super model</H3>
            </Heading>
            <FeatureParagraph>
              Donec ac est vel justo cursus rutrum ac eleifend ex. Pellentesque
              dapibus venenatis enim. Praesent massa libero, porta eu dolor id,
              tristique rutrum lectus. Sed dapibus, sapien euismod tempus
              efficitur, sapien velit placerat lectus, eu lobortis enim nulla
              vel velit. Nulla non.
            </FeatureParagraph>
            <MyLinkLight to="/gallery">Back to gallery </MyLinkLight>
          </DivTxt>
          <DivImg variants={cardVariantsLeft} className="onBig--order1">
            <picture onClick={imageClick}>
              <source
                media="(min-width:577px)"
                srcSet={`.${portfolioPhoto.imgBigSize}`}
              />
              <img
                src={`.${portfolioPhoto.imgSmallSize}`}
                alt={`.${portfolioPhoto.title}`}
              />
            </picture>
          </DivImg>
        </FeatureSectionMotion>
      </Portfolio>
    </Layout>
  );
};

const FeatureParagraph = styled(Paragraph)`
  margin: 32px 0;
`;

export default ImgPage;
