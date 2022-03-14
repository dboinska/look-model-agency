import styled from 'styled-components/macro';
import Slider from 'react-slick';
import TeamMember from './TeamMember';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamContainer = styled(Slider)`
  margin: 0 auto 1rem auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (min-width: 992px) {
    width: 76%;
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
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Dots = styled.div`
  /* margin: -1rem; */
  ul {
    margin: 0;
  }
`;

const Pagination = styled.div`
  font-size: 24px;
  color: var(--gray);
  background-color: #ddd;
  border-radius: 10px;
  margin: 1rem;

  .slick-active & {
    color: var(--black);
  }
`;

const TeamCarousel = ({ team }) => {
  return (
    <div>
      <TeamContainer {...SETTINGS}>
        {team.map(({ id, imgSmallSize, employee, name }) => (
          <TeamMember
            key={id}
            imgSmallSize={imgSmallSize}
            employee={employee}
            name={name}
          />
        ))}
      </TeamContainer>
    </div>
  );
};

export default TeamCarousel;
