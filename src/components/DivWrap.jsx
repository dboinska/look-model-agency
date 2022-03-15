import styled from 'styled-components';

const DivWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  width: 300px;
  /* width: 200px; */
  /* height: 500px; */
  position: relative;

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

  .socialIcons {
    a {
      color: var(--gray);
      padding-right: 1rem;
    }
  }

  H3 {
    font-size: 16px;
    margin: 1rem 0 0 0;
    padding: 0;
  }

  @media screen and (min-width: 769px) {
    /* width: 50%; */
    padding-right: 2rem;
  }
`;

export default DivWrap;
