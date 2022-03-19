import styled from 'styled-components/macro';
import { useState } from 'react';
import Heading from './Heading';
import { SmallButton } from './Button';
import { H2, H3, H4 } from './Headers';
import FeatureSection from './FeatureSection';
import FilterButton from './FilterButton';
import DivWrap from './DivWrap';

const Blog = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const postCategories = posts.map(post => post.category);
  const categories = Array.from(new Set(postCategories));
  categories.unshift('all');
  console.log(categories);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSelectCategory = category => {
    setSelectedCategory(category);
    console.log(category, selectedCategory);
    const selectedPosts =
      category === 'all'
        ? posts
        : posts.filter(post => post.category === category);
    setFilteredPosts(selectedPosts);
  };

  return (
    <FeatureSection flexDirection="row" flexWrap="wrap">
      <DivWrap>
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
      </DivWrap>
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
          <DivWrapBlog key={id}>
            <img src={photo} alt={heading} />
            <div className="div__blogTxt">
              <H3>{category}</H3>
              <H4>{heading}</H4>
              <div className="socialIcons">
                <a href={urlFb}>{iconFb}</a>
                <a href={urlTwitter}>{iconTwitter}</a>
                <a href={urlIg}>{iconIg}</a>
              </div>
            </div>
          </DivWrapBlog>
        )
      )}
    </FeatureSection>
  );
};

const DivWrapBlog = styled(DivWrap)`
  width: 300px;
  /* width: 200px; */
  height: 500px;
  &:first-of-type {
    height: 350px;
    @media screen and (min-width: 727px) {
      height: 500px;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 76%;
    position: absolute;
    top: 0;
  }

  .div__blogTxt {
    height: 24%;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export default Blog;
