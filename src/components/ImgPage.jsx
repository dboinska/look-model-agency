import { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { MyLinkLight } from './MyLink';
import Layout from './Layout';
import { Portfolio } from './GalleryPage';
import { FeatureSectionMotion } from './FeatureSection';
import {
  DivTxt,
  DivImg,
  cardVariantsRight,
  cardVariantsLeft,
} from './FeatureSection';
import Modal from './Modal';

import Paragraph from './Paragraph';
import { H2, H3 } from './Headers';
import Heading from './Heading';
import { portfolioPhotos } from '../data/PortfolioPhotos';

import { IoCloseOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
// import { motion, AnimatePresence } from 'framer-motion';

const ImgPage = () => {
  const { id } = useParams();
  const portfolioPhoto = portfolioPhotos.find(photo => photo.id === id);
  const photoIndex = portfolioPhotos.findIndex(photo => photo.id === id);
  const lastIndex = portfolioPhotos.length - 1;
  const prevPhoto =
    portfolioPhotos[photoIndex > 0 ? photoIndex - 1 : lastIndex];
  const nextPhoto =
    portfolioPhotos[photoIndex < lastIndex ? photoIndex + 1 : 0];

  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style = {};
    };
  }, [isOpen]);

  const handleOnClose = () => {
    setIsOpen(false);
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
            <picture onClick={() => setIsOpen(currentState => !currentState)}>
              <source
                media="(min-width:577px)"
                srcSet={`.${portfolioPhoto.imgBigSize}`}
              />
              <img
                src={`.${portfolioPhoto.imgSmallSize}`}
                alt={`.${portfolioPhoto.title}`}
              />
            </picture>
            {isOpen && (
              <Modal onClose={handleOnClose}>
                <div className="modalContainer">
                  <Link to={`/gallery/${prevPhoto.id}`}>
                    <MdKeyboardArrowLeft className="modalArrow" />
                  </Link>

                  <div className="closeModalBtn">
                    <button onClick={handleOnClose}>
                      <IoCloseOutline />
                    </button>
                  </div>
                  <picture>
                    <source
                      media="(min-width:577px)"
                      srcSet={`.${portfolioPhoto.imgBigSize}`}
                    />
                    <img
                      src={`.${portfolioPhoto.imgSmallSize}`}
                      alt={portfolioPhoto.title}
                    />
                  </picture>

                  <Link to={`/gallery/${nextPhoto.id}`}>
                    <MdKeyboardArrowRight className="modalArrow" />
                  </Link>
                </div>
              </Modal>
            )}
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
