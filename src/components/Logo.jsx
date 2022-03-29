import styled from 'styled-components/macro';
import { Routes, Route, Link } from 'react-router-dom';

const Logo = ({ variant }) => (
  <LogoStyled variant={variant}>
    <Link to="/">
      <h2>LOOK</h2>
      <span>Model agency</span>
    </Link>
  </LogoStyled>
);

const LogoStyled = styled.div`
  height: 86px;

  a {
    text-decoration: none;
    color: ${props =>
      props.variant === 'light' ? 'var(--white)' : 'var(--black)'};
  }

  h2 {
    text-transform: uppercase;
    font-family: 'Cinzel', serif;
    font-size: 32px;
    font-weight: 400;
  }

  span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    font-family: 'Arsenal', sans-serif;
    transform: translate(5px, -50px);
    display: inline-block;
  }
`;

export default Logo;
