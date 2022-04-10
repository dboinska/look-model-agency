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
  transform: var(--transition);
  transition: all 0.3s ease;

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

export default MyLink;
