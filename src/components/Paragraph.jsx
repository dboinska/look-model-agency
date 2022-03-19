import styled from 'styled-components/macro';

const Paragraph = styled.p`
  text-transform: none;
  font-size: 1rem;

  /* @media screen and (min-width: 700px) {
    margin: 0 50px 20px 50px;
  } */

  @media screen and (min-width: 1200px) {
    margin: 16px 0;
    line-height: 1.8;
  }
`;

export default Paragraph;
