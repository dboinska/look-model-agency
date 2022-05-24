import styled from 'styled-components/macro';
import Slider from 'react-slick';
import TeamMember from './TeamMember';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';

const TeamContainer = styled(Slider)`
  margin: 0 auto 1rem auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (min-width: 992px) {
    width: 76%;
    max-width: 1000px;
  }
`;
const SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  appendDots: dots => (
    <Dots>
      <ul> {dots} </ul>
    </Dots>
  ),
  customPaging: i => <Pagination>{i + 1}</Pagination>,
  autoplay: true,
  autoplaySpeed: 4000,

  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Dots = styled.div`
  position: relative;
  bottom: 0;

  ul {
    padding: 0;
  }
`;

const Pagination = styled.div`
  font-size: clamp(0.9rem, 2vw, 1.6rem);
  color: var(--gray);

  .slick-active & {
    color: var(--black);
  }
`;

const TeamCarousel = ({ team }) => {
  return (
    <div>
      <TeamContainer {...SETTINGS}>
        {team.map(({ id, imgSmallSize, category, title }) => (
          <Link to={`/models/${id}`}>
            <TeamMember
              key={id}
              imgSmallSize={imgSmallSize}
              category={category}
              title={title}
            />
          </Link>
        ))}
      </TeamContainer>
    </div>
  );
};

export default TeamCarousel;
