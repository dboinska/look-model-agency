import styled from 'styled-components/macro';

const SocialIcons = styled.ul`
  display: ${props => props.display || 'none'};
  justify-content: 'left';
  padding: 0;

  li {
    list-style-type: none;
  }

  align-items: center;
  font-size: 1.2rem;

  a {
    margin: 0 8px;
    color: var(--black);
  }
  svg {
    fill: currentColor;
    transition: var(--transition);

    &:hover {
      color: var(--white);
    }
  }

  &.white {
    svg {
      fill: var(--white);
      transition: var(--transition);

      &:hover {
        fill: var(--main-color);
      }
    }
  }

  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export default SocialIcons;
