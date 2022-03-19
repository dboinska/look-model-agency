import styled from 'styled-components/macro';

const Logo = ({ variant }) => (
  <LogoStyled variant={variant}>
    <h2>LOOK</h2>
    <span>Model agency</span>
  </LogoStyled>
);

const LogoStyled = styled.div`
  color: ${props =>
    props.variant === 'light' ? 'var(--white)' : 'var(--black)'};
  height: 86px;

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
