import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Logo = ({ variant }) => (
  <LogoStyled variant={variant} as="h2">
    <Link to="/">
      <span>LOOK</span>
      <span>Model agency</span>
    </Link>
  </LogoStyled>
);

const LogoStyled = styled.div`
  align-items: center;
  display: flex;
  height: 56px;
  display: inline-block;

  a {
    text-decoration: none;
    color: ${props =>
      props.variant === 'light' ? 'var(--white)' : 'var(--black)'};
    display: flex;
    flex-direction: column;
  }

  span:first-of-type {
    text-transform: uppercase;
    font-family: 'Cinzel', serif;
    font-size: 32px;
    font-weight: 400;
  }
  span:last-of-type {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    font-family: 'Arsenal', sans-serif;
    transform: translate(5px, -16px);
  }
`;

export default Logo;
