import { Portal } from 'react-portal';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

const Modal = ({ children }) => {
  return (
    <Portal>
      <StyledModal
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        {children}
      </StyledModal>
    </Portal>
  );
};

const StyledModal = styled(motion.div)`
  position: absolute;
  top: 0;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and(min-width:992px) {
    min-height: 700px;
  }

  img {
    transform: translateX(0);
    object-fit: cover;
    padding: 0.25rem;
    border: 2px solid var(--light-gray);
    max-width: 72%;
    /* height: calc(100vh - 40px); */

    @media screen and (min-width: 768px) {
      height: calc(100vh - 40px);
      /* min-height: 600px; */
      /* max-width: auto; */
      max-width: 100%;
    }
  }

  .modalContainer {
    position: relative;
    picture {
      filter: drop-shadow(10px 10px 1px rgba(0, 0, 0, 0.3));
    }

    .closeModalBtn {
      position: absolute;
      color: var(--white);

      z-index: 999;
      font-size: 2rem;
      top: 0.4rem;
      right: 4rem;

      @media screen and (min-width: '1200px') {
        top: 1rem;
        right: 3.6rem;
      }

      path {
        filter: drop-shadow(10px 30px 10px rgba(0, 0, 0, 0.4));
      }

      button {
        border: none;
      }
      svg {
      }
    }

    & .modalArrow {
      font-size: 3rem;
      color: var(--gray);
      filter: drop-shadow(3px 7px 1px rgba(0, 0, 0, 0.1));
    }
  }
`;

export default Modal;
