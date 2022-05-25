import { useState, useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
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

import { IoCloseOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import GoToTop from './GoToTop';

const SinglePage = ({
  id,
  currentPhoto,
  prevPhoto,
  nextPhoto,
  featureParagraph,
  header,
  link,
  backTo,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = e => {
      if (isOpen) {
        switch (e.key) {
          case 'ArrowLeft':
            console.log({ prevPhoto });
            navigate(prevPhoto);
            break;
          case 'ArrowRight':
            console.log({ nextPhoto });
            navigate(nextPhoto);
            break;
          default:
            break;
        }
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [nextPhoto, prevPhoto, navigate, isOpen]);

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
    <motion.div
      key={isOpen}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <GoToTop />
      <Layout>
        <Portfolio>
          <FeatureSectionMotion
            padding="6rem 2rem 2rem 2rem"
            height="calc(100vh - 100px)"
            min_height="600px"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <DivTxt variants={cardVariantsRight} className="onBig--order2">
              <Heading heading={currentPhoto.category}>
                <H2 variant="marginNone">{currentPhoto.title}</H2>
                <H3>{header}</H3>
              </Heading>
              <FeatureParagraph>{featureParagraph}</FeatureParagraph>
              <MyLinkLight to={link}>Back to {backTo} </MyLinkLight>
            </DivTxt>

            <DivImg variants={cardVariantsLeft} className="onBig--order1">
              <picture onClick={() => setIsOpen(currentState => !currentState)}>
                <source
                  media="(min-width:577px)"
                  srcSet={`.${currentPhoto.imgBigSize}`}
                />
                <img
                  src={`.${currentPhoto.imgSmallSize}`}
                  alt={`.${currentPhoto.title}`}
                />
              </picture>
              {isOpen && (
                <Modal onClose={handleOnClose}>
                  <AnimatePresence exitBeforeEnter>
                    <div className="modalContainer">
                      <motion.div
                        key={id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        src={`.${currentPhoto.imgSmallSize}`}
                        alt={currentPhoto.title}
                      >
                        <Link to={prevPhoto}>
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
                            srcSet={`.${currentPhoto.imgBigSize}`}
                          />
                          <img
                            src={`.${currentPhoto.imgSmallSize}`}
                            alt={currentPhoto.title}
                          />
                        </picture>

                        <Link to={nextPhoto}>
                          <MdKeyboardArrowRight className="modalArrow" />
                        </Link>
                      </motion.div>
                    </div>
                  </AnimatePresence>
                </Modal>
              )}
            </DivImg>
          </FeatureSectionMotion>
        </Portfolio>
      </Layout>
    </motion.div>
  );
};

const FeatureParagraph = styled(Paragraph)`
  margin: 32px 0;
`;

export default SinglePage;
