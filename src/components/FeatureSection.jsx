import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

const commonVariant = {
  x: 0,
  transition: {
    type: 'spring',
    bounce: 0.2,
    duration: 1.2,
  },
};

export const cardVariantsRight = {
  offscreen: {
    x: 900,
  },
  onscreen: commonVariant,
};

export const cardVariantsLeft = {
  offscreen: {
    x: -900,
  },
  onscreen: commonVariant,
};

export const FeatureSectionMotion = styled(motion.section)`
  overflow: hidden;
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  padding: ${props => props.padding || '2rem'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  justify-content: space-between;
  color: ${props =>
    props.variant === 'dark' ? 'var(--medium-gray)' : 'var(--black)'};
  background-color: ${props =>
    props.variant === 'dark' ? 'var(--dark-gray)' : 'transparent'};
  #map {
    height: 400px;
  }

  .div__img {
    display: flex;
    justify-content: center;
  }
  picture {
    width: 300px;
    margin-top: 1.25rem;

    img {
      object-fit: contain;
      width: ${props => props.imgwidth || '100%'};
    }
  }

  @media screen and (min-width: 769px) {
    background-image: ${props => props.image || 'none'};
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 992px) {
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.alignItems || 'center'};
    flex-wrap: nowrap;
    padding: ${props => props.padding || '2rem 4rem'};
    margin: ${props => props.margin || '2.5rem 0'};
    margin: 0 auto;
    height: ${props => props.height || 'auto'};
    min-height: ${props => props.min_height || 'auto'};

    picture {
      margin-top: 0;
    }

    .div__txt {
      width: 60%;
      padding-right: 2rem;
    }

    .div__img {
      width: 40%;

      &.column {
        flex-direction: column;
      }
    }

    .onBig--order1 {
      order: 1;
    }

    .onBig--order2 {
      order: 2;
    }
  }

  @media screen and (min-width: 992px) {
    max-width: 1500px;
  }
`;

export const DivImg = styled(motion.div)`
  display: flex;
  justify-content: center;
  /* background-color: ${props => props.colorx || 'transparent'}; */

  @media screen and (min-width: 992px) {
    width: ${props => props.width || '40%'};
    /* width: 40%; */

    &.column {
      flex-direction: column;
    }
  }
`;

export const DivTxt = styled(motion.div)`
  padding: ${props => props.padding || 'auto'};
  margin: ${props => props.margin || 'auto'};
  min-width: 300px;
  width: ${props => props.width || '100%'};

  @media screen and (min-width: 992px) {
    width: 60%;
    padding-right: 2rem;
  }
`;

// export default FeatureSection;
