import { useState } from 'react';
import styled from 'styled-components/macro';

import Heading from './Heading';
import { SmallButton } from './Button';
import { H2, H3 } from './Headers';
import { FeatureSectionMotion } from './FeatureSection';
import FilterButton from './FilterButton';
import Container from './Container';
import SocialIcons from './SocialIcons';

const Blog = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const postCategories = posts.map(post => post.category);
  const categories = Array.from(new Set(postCategories));
  categories.unshift('all');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSelectCategory = category => {
    setSelectedCategory(category);
    const selectedPosts =
      category === 'all'
        ? posts
        : posts.filter(post => post.category === category);
    setFilteredPosts(selectedPosts);
  };

  return (
    <FeatureSectionMotion direction="row" wrap="wrap">
      <Container>
        <div className="div__top">
          <Heading heading="Blog">
            <H2>Last news</H2>
          </Heading>
          <div className="div__column">
            {categories.map(category => (
              <FilterButton
                padding="0"
                textAlign="left"
                flexDirection="column"
                key={category}
                active={category === selectedCategory}
                onClick={() => handleSelectCategory(category)}
              >
                {category}
              </FilterButton>
            ))}
          </div>

          <SmallButton>Discover more</SmallButton>
        </div>
      </Container>
      {filteredPosts.map(
        ({
          id,
          photo,
          heading,
          category,
          urlFb,
          iconFb,
          urlTwitter,
          iconTwitter,
          urlIg,
          iconIg,
        }) => (
          <ContainerBlog key={id}>
            <img src={photo} alt={heading} />
            <div className="div__blogTxt">
              <span>{category}</span>
              <H3>{heading}</H3>
              <SocialIcons variant="gray">
                <a href={urlFb}>{iconFb}</a>
                <a href={urlTwitter}>{iconTwitter}</a>
                <a href={urlIg}>{iconIg}</a>
              </SocialIcons>
            </div>
          </ContainerBlog>
        )
      )}
    </FeatureSectionMotion>
  );
};

const ContainerBlog = styled(Container)`
  width: 300px;
  /* width: 200px; */
  height: 450px;
  &:first-of-type {
    height: 350px;
    @media screen and (min-width: 727px) {
      height: 500px;
    }
  }

  span {
    font-size: 16px;
    text-transform: uppercase;
    margin: 0.5rem 0;
    color: var(--gray);
    font-weight: 700;
  }

  ${H3} {
    color: var(--black);
    margin: 0;
    letter-spacing: 0.1em;
    transition: var(--transition);

    &:hover {
      color: var(--main-color);
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 84%;
    position: absolute;
    top: 0;

    @media screen and (min-width: 992px) {
      height: 74%;
    }
  }

  .div__blogTxt {
    height: 16%;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 992px) {
      height: 26%;
    }
  }
`;
export default Blog;
