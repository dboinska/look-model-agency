import { useState, useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const SinglePage = ({ id, currentPhoto, prevPhoto, nextPhoto }) => {
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

  //   useEffect(() => {
  //     return () => {
  //       setIsOpen({});
  //     };
  //   }, []);

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
      <Layout>
        <Portfolio>
          <FeatureSectionMotion
            height="calc(100vh - 100px)"
            min_height="600px"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <DivTxt variants={cardVariantsRight} className="onBig--order2">
              <Heading heading={currentPhoto.category}>
                <H2 variant="marginNone">{currentPhoto.title}</H2>
                <H3>Super model</H3>
              </Heading>
              <FeatureParagraph>
                Donec ac est vel justo cursus rutrum ac eleifend ex.
                Pellentesque dapibus venenatis enim. Praesent massa libero,
                porta eu dolor id, tristique rutrum lectus. Sed dapibus, sapien
                euismod tempus efficitur, sapien velit placerat lectus, eu
                lobortis enim nulla vel velit. Nulla non.
              </FeatureParagraph>
              <MyLinkLight to="/gallery">Back to gallery </MyLinkLight>
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
