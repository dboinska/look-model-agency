import styled, { css } from 'styled-components/macro';

const commonStyle = css`
  text-transform: uppercase;
  font-weight: 700;
`;

export const H2 = styled.h2`
  ${commonStyle}
  color: var(--black);
  font-size: 2rem;
  margin-top: 0.5rem;

  @media screen and (min-width: 1200px) {
    font-size: 2.4rem;
  }
`;

export const H2WithoutMargin = styled(H2)`
  margin: 0;
`;
export const H3 = styled.h3`
  ${commonStyle}
  color: var(--gray);
  margin: 0 0 1rem 0;
  letter-spacing: 0.2em;
  font-size: clamp(1.25rem, 2vw, 1.6rem);
`;

export const H4 = styled.h4`
  font-size: 16px;
  text-transform: uppercase;
  margin: 0.5rem 0;
`;
