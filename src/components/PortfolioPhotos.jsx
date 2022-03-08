import { useState } from 'react';
import styled, { css } from 'styled-components/macro';

import PortfolioPhoto from './PortfolioPhoto';
import Heading from './Heading';
import { H2, H3 } from './Headers';
import FilterButton from './FilterButton';

const PortfolioPhotos = ({ photos }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const photoCategories = photos.map(photo => photo.category);
  const categories = Array.from(new Set(photoCategories));
  categories.unshift('all');
  console.log(categories);

  const [filteredPhotos, setFilteredPhotos] = useState(photos);

  const handleSelectCategory = category => {
    setSelectedCategory(category);
    console.log(category, selectedCategory);
    const selectedPhotos =
      category === 'all'
        ? photos
        : photos.filter(photo => photo.category === category);
    setFilteredPhotos(selectedPhotos);
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
          <PortfolioPhoto img={imgSmallSize} alt={title} />
        </PortfolioImg>
      ))}

      <PortfolioImg>
        <H3>Load more works</H3>
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

  &:first-child,
  &:last-child {
    ${gray_background};
  }
`;

const PortfolioImg = styled.div`
  width: 50%;
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
