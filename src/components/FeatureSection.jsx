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

// const FeatureSection = styled.section`
//   overflow: hidden;
//   display: flex;
//   flex-direction: ${props => props.flexDirection || 'column'};
//   padding: ${props => props.padding || '2rem'};
//   flex-wrap: ${props => props.flexWrap || 'nowrap'};
//   justify-content: space-evenly;
//   color: ${props =>
//     props.variant === 'dark' ? 'var(--medium-gray)' : 'var(--black)'};
//   background-color: ${props =>
//     props.variant === 'dark' ? 'var(--dark-gray)' : 'transparent'};

//   .div__img {
//     display: flex;
//     justify-content: center;
//   }
//   picture {
//     width: 300px;
//     margin-top: 1.25rem;

//     img {
//       object-fit: contain;
//       width: 100%;
//     }
//   }

//   @media screen and (min-width: 769px) {
//     background-image: ${props => props.backgroundImage || 'none'};
//     background-position: right;
//     background-size: contain;
//     background-repeat: no-repeat;
//   }

//   @media screen and (min-width: 992px) {
//     flex-direction: ${props => props.flexDirection || 'row'};
//     flex-wrap: nowrap;
//     padding: ${props => props.padding || '2rem 4rem'};
//     margin: ${props => props.margin || '2.5rem 0'};
//     margin: 0 auto;

//     picture {
//       margin-top: 0;
//     }

//     .div__txt {
//       width: 60%;
//       padding-right: 2rem;
//     }

//     .div__img {
//       width: 40%;

//       &.column {
//         flex-direction: column;
//       }
//     }

//     .onBig--order1 {
//       order: 1;
//     }

//     .onBig--order2 {
//       order: 2;
//     }
//   }
// `;

export const FeatureSectionMotion = styled(motion.section)`
  overflow: hidden;
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  padding: ${props => props.padding || '2rem'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  justify-content: space-evenly;
  color: ${props =>
    props.variant === 'dark' ? 'var(--medium-gray)' : 'var(--black)'};
  background-color: ${props =>
    props.variant === 'dark' ? 'var(--dark-gray)' : 'transparent'};

  .div__img {
    display: flex;
    justify-content: center;
  }
  picture {
    width: 300px;
    margin-top: 1.25rem;

    img {
      object-fit: contain;
      width: 100%;
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
    align-items: center;
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
`;

export const DivImg = styled(motion.div)`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 992px) {
    width: 40%;

    &.column {
      flex-direction: column;
    }
  }
`;

export const DivTxt = styled(motion.div)`
  @media screen and (min-width: 992px) {
    width: 60%;
    padding-right: 2rem;
  }
`;

// export default FeatureSection;
