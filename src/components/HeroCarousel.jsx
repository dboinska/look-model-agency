import React from 'react';
import Slider from 'react-slick';
import Hero from './Hero';
import heroPhoto from '../photos/heroPhoto.png';

import model from '../photos/model.png';
import modelHero2 from '../photos/modelHero2.png';
import styled from 'styled-components/macro';

const HeroContainer = styled(Slider)`
  width: 100%;
  overflow: hidden;
`;

const SETTINGS = {
  dots: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  appendDots: dots => (
    <Dots>
      <ul> {dots} </ul>
    </Dots>
  ),
};
const HeroCarousel = () => {
  return (
    <HeroContainer {...SETTINGS}>
      <Hero
        imageUrl={heroPhoto}
        subHeading="Welcome to professional"
        heading="Model Agency"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            volutpat dictum pretium. Mauris eu tincidunt felis. Duis facilisis
            urna ante, in dapibus ante dignissim id. Phasellus eu ligula
            maximus, fermentum risus quis, pellentesque neque."
        link="\"
        linkLabel="Read More"
      ></Hero>
      <Hero
        backgroundColor="var(--salmon)"
        flexDirection="row"
        padding="0 0 4rem 4rem"
        imageUrl={modelHero2}
        subHeading="Welcome to professional"
        heading="Model Agency"
        description="Nunc vel scelerisque turpis, lobortis ullamcorper quam. Maecenas interdum non leo non pellentesque. Quisque a quam dignissim nisi volutpat venenatis maximus eu velit. Morbi eget sollicitudin diam. Mauris mattis laoreet diam ac posuere."
        link="\"
        linkLabel="Read More"
      ></Hero>
      <Hero
        backgroundColor="var(--light-gray)"
        imageUrl={model}
        subHeading="Welcome to professional"
        heading="Model Agency"
        description="Nam tincidunt urna id porttitor posuere. Sed sodales ligula commodo dictum ultricies. Nam mattis erat sit amet odio ultrices dapibus. Mauris malesuada fermentum eleifend. Morbi eu sagittis elit, vitae aliquam orci. Vestibulum feugiat odio lacus, sed porta odio auctor in. "
        link="\"
        linkLabel="Read More"
      ></Hero>
    </HeroContainer>
  );
};
export default HeroCarousel;

const Dots = styled.div`
  position: relative;
  bottom: 80px;

  ul {
    padding: 0;
    button::before {
      font-size: 12px;
    }
  }
`;
