import styled from 'styled-components/macro';

const DivWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  width: 300px;
  position: relative;
  align-self: flex-start;

  .socialIcons {
    padding: 0;
    a {
      color: var(--gray);
      padding-right: 1rem;
    }
  }

  H3 {
    font-size: 16px;
    margin: 1rem 0;
    padding: 0;
  }

  .div__column {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 2rem;
  }

  .div__top {
    @media screen and (min-width: 727px) {
      position: absolute;
      top: 0;
    }
  }
`;

export default DivWrap;
