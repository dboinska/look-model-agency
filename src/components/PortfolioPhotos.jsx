import { useState } from 'react';
import styled, { css } from 'styled-components/macro';

import PortfolioPhoto from './PortfolioPhoto';
import Heading from './Heading';
import { H2 } from './Headers';
import FilterButton from './FilterButton';
import { MyLinkLight } from './MyLink';

import { Link } from 'react-router-dom';

const PortfolioPhotos = ({ photos, limit }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const photoCategories = photos.map(photo => photo.category);
  const categories = Array.from(new Set(photoCategories));
  categories.unshift('all');

  const reducedPhotos = limit && limit > 0 ? photos.slice(0, limit) : photos;
  const [filteredPhotos, setFilteredPhotos] = useState(reducedPhotos);

  const handleSelectCategory = category => {
    setSelectedCategory(category);
    const selectedPhotos =
      category === 'all'
        ? photos
        : photos.filter(photo => photo.category === category);
    const reducedSelectedPhotos =
      limit && limit > 0 ? selectedPhotos.slice(0, limit) : selectedPhotos;
    setFilteredPhotos(reducedSelectedPhotos);
  };
  return (
    <PortfolioImages>
      <PortfolioImg>
        <Heading heading="Portfolio">
          <H2>Our beautiful works</H2>
          {categories.map(category => (
            <FilterButton
              key={category}
              active={category === selectedCategory}
              onClick={() => handleSelectCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </Heading>
      </PortfolioImg>
      {filteredPhotos.map(({ id, imgSmallSize, title }) => (
        <PortfolioImg className="portfolio__img" key={id}>
          <Link to={`/gallery/${id}`}>
            <PortfolioPhoto img={imgSmallSize} alt={title} />
          </Link>
        </PortfolioImg>
      ))}

      <PortfolioImg>
        <MyLinkLight to="/gallery">Load more works</MyLinkLight>
        {/* <Button>
          <MyLink to="/gallery">Load more works</MyLink>
        </Button> */}
      </PortfolioImg>
    </PortfolioImages>
  );
};

const gray_background = css`
  background-color: var(--light-gray);
`;

const PortfolioImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
  overflow: hidden;

  &:first-child,
  &:last-child {
    ${gray_background};
  }
`;

export const PortfolioImg = styled.div`
  width: 50%;
  translate: all 0.3 ease;

  &:not(:first-of-type) {
    aspect-ratio: 1/1;
  }

  &:first-of-type {
    width: 100%;
    padding: 2rem;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:last-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 auto;
  }
  &:hover:not(:first-of-type):not(:last-of-type) {
    scale: 1.01;
  }

  @media screen and (min-width: 992px) {
    width: calc(100% / 4);
    &:not(:first-of-type) {
      aspect-ratio: 1/1;
    }

    &:first-of-type {
      width: calc(100% / 2);
    }
  }
`;

export default PortfolioPhotos;
