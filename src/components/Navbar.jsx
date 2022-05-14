import { useState, useRef, useLayoutEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import Logo from './Logo';
import MenuButton from './MenuButton';
import Orchestration from './Orchestration';
import { useMediaQuery } from '../hooks/useMediaQuery';

import { links } from '../data/routes';

const Navbar = ({ socialIcons: SocialIcons }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [windowSize, setWindowSize] = useState(() => window?.innerWidth || 0);

  const linksContainerRef = useRef(null);
  const [colorChange, setColorchange] = useState(false);
  const isSmall = useMediaQuery('(max-width: 992px)');

  useLayoutEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener('scroll', changeNavbarColor);
  }, []);

  useLayoutEffect(() => {
    const size = () => setWindowSize(window.innerWidth);

    window.addEventListener('resize', size);

    if (showLinks) {
      linksContainerRef.current.style.height = '100vh';

      linksContainerRef.current.style.background = 'var(--main-color)';
      linksContainerRef.current.style.position = 'absolute';
      linksContainerRef.current.style.top = '0';
      linksContainerRef.current.style.width = '100%';
    } else {
      linksContainerRef.current.style.height = '0px';
    }

    if (windowSize > 1199) {
      setShowLinks(true);
      linksContainerRef.current.style = {
        height: 0,
      };
    }

    return () => {
      window.removeEventListener('resize', size);
    };
  }, [showLinks, windowSize]);

  return (
    <nav>
      <FloatMenu className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <NavHeader>
          <Logo />
          <div className="burgerContainer">
            <MenuButton
              isOpen={showLinks}
              onClick={() => setShowLinks(!showLinks)}
            />
          </div>
        </NavHeader>
        <LinksContainer ref={linksContainerRef}>
          {showLinks && <Orchestration isSmall={isSmall} links={links} />}
        </LinksContainer>

        <SocialIcons />
      </FloatMenu>
    </nav>
  );
};

const links_wrapper = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
`;

const FloatMenu = styled.div`
  background-color: ${props => props.background || 'transparent'};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  transition: all 0.3s ease;

  &.colorChange {
    background-color: var(--main-color);
  }
  @media screen and (min-width: 1200px) {
    ${links_wrapper}
  }

  & .burgerContainer {
    height: 80%;
    display: flex;
    align-items: center;
    z-index: 999;

    @media screen and (min-width: 1200px) {
      display: none;
    }
  }
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 0 20px;

  .nav-toggle {
    font-size: 1.5rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;

    &:hover {
      transform: rotate(90deg);
    }
  }

  @media screen and (min-width: 1200px) {
    justify-content: space-evenly;

    .nav-toggle {
      display: none;
    }
  }
`;

const LinksContainer = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  height: 0;
  overflow: hidden;
  transition: var(--transition);

  .links {
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;

    @media screen and (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding-top: 6rem;
    }

    a {
      color: var(--black);
      text-decoration: none;
      list-style-type: none;
      transition: var(--transition);

      &:hover {
        color: var(--white);
      }
    }
    li {
      list-style-type: none;
      padding: 1rem;
    }
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    height: auto !important;

    a {
      margin: 0 20px;
    }

    .links {
      ${links_wrapper}
    }
  }
`;

export default Navbar;
