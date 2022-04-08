import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { FaBars } from 'react-icons/fa';
import { links } from '../data/routes';
import { social } from '../data/socialmediaLinks';
import Logo from './Logo';
import SocialIcons from './SocialIcons';

import Orchestration from './Orchestration';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  useEffect(() => {
    // const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      console.log(linksContainerRef);
      linksContainerRef.current.style.height = '100vh';
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <FloatMenu className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <NavHeader>
          <Logo />
          {/* <img src={logo} alt="logo" /> */}
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </NavHeader>
        <LinksContainer ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map(link => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </LinksContainer>

        <SocialIcons>
          {social.map(socialIcon => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </SocialIcons>
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
  background-color: transparent;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  /* border-bottom: 1px solid var(--second-color); */

  &.colorChange {
    background-color: var(--main-color);
  }
  @media screen and (min-width: 1200px) {
    ${links_wrapper}
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
