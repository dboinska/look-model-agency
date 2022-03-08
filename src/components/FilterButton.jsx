import styled, { css } from 'styled-components/macro';

const activeStyle = css`
  color: var(--main-color);
  transition: all 0.3s ease;

  &:before {
    content: '';
    background-color: var(--main-color);
    font-weight: bold;
    width: 4px;
    height: 16px;
    display: inline-block;
    margin-right: 1rem;
  }
`;

const FilterButton = styled.button`
  color: var(--gray);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  background-color: transparent;
  padding: 0 1.6rem;
  transition: all 0.3s ease;

  &:before {
    margin-right: 0;
  }

  &:hover {
    ${activeStyle}
  }

  ${props => props.active && activeStyle}
`;

export default FilterButton;
