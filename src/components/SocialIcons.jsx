import styled from 'styled-components/macro';
import { social } from '../data/socialmediaLinks';

const StyledSocialIcons = styled.ul`
  display: ${props => props.display || 'none'};
  justify-content: 'left';
  padding: 0;
  list-style-type: none;

  align-items: center;
  font-size: 1.2rem;

  a {
    margin: 0 8px;
    color: var(--black);
  }
  svg {
    fill: ${props =>
      props.variant === 'gray' ? 'var(--gray)' : 'currentColor'};
    transition: var(--transition);

    &:hover {
      fill: ${props =>
        props.variant === 'gray' ? 'var(--black)' : 'var(--white)'};
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

  @media screen and (min-width: 992px) {
    display: ${props => (props.variant === 'gray' ? 'flex' : 'none')};
  }

  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

const SocialIcons = ({ variant }) => {
  return (
    <StyledSocialIcons variant={variant}>
      {social.map(socialIcon => {
        const { id, url, icon } = socialIcon;
        return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        );
      })}
    </StyledSocialIcons>
  );
};

export default SocialIcons;
