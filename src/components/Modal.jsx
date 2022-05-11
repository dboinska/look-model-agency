import { Portal } from 'react-portal';
import styled from 'styled-components/macro';

const Modal = ({ children }) => {
  return (
    <Portal>
      <StyledModal>{children}</StyledModal>
    </Portal>
  );
};

const StyledModal = styled.div`
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

  /* } */

  img {
    height: calc(100vh - 40px);
    transform: translateX(0);
    object-fit: cover;
    padding: 0.25rem;
    border: 2px solid var(--light-gray);
    max-width: 90vw;

    @media screen and(min-width:992px) {
      min-height: 600px;
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
      top: 1rem;
      right: 3.6rem;

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
