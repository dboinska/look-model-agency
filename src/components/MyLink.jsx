import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MyLink = styled(Link)`
  background-color: var(--black);
  text-transform: uppercase;
  font-weight: 500;
  padding: 6px 12px;
  color: var(--white);
  font-size: 1rem;
  text-decoration: none;
  transition: var(--transition);

  &:hover {
    background-color: var(--second-color);
    color: var(--black);
  }

  @media screen and (min-width: 992px) {
    margin-top: 24px;
    padding: 12px 24px;
    font-size: 1.2rem;
  }
`;

export const MyLinkLight = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--gray);
  font-size: clamp(1.25rem, 2vw, 1.6rem);
  transition: all 0.3s ease;
  border: none;

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
export default MyLink;
