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
`;

export const H3 = styled.h3`
  ${commonStyle}
  color: var(--gray);
  font-size: clamp(1.25rem, 2vw, 1.6rem);
  transition: all 0.3s ease;

  &:before {
    content: '';
    background-color: var(--main-color);
    font-weight: 700;
    width: 4px;
    height: 24px;
    display: inline-block;
    margin-right: 1rem;
  }

  &:hover {
    color: var(--main-color);
    transition: all 0.3s ease;
  }
`;
